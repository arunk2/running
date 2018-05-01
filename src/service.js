const createRequst = (url, reqConfig) => {
  var headers = Object.assign({}, {
    "Content-Type": "application/json"
  }, reqConfig.header || {});

  if(reqConfig.query) {
    url = serializeQueryParams(url, reqConfig.query);
  }

  var requestOption = {
    method: reqConfig.method,
    headers: headers,
    //mandatory for sending cookie along with request.
    //to block sending cookie set "omit" which is default as per fetch's spec
    credentials: reqConfig.isCORS ? "include" : "same-origin"
    //body: (typeof reqConfig.data !== "string") ? JSON.stringify(reqConfig.data) : reqConfig.data
  };

  if(reqConfig.data) {
    requestOption["body"] = (typeof reqConfig.data !== "string") ? JSON.stringify(reqConfig.data) : reqConfig.data;
    console.log('request body', requestOption["body"]);
  }

  return new Request(url, requestOption);
};

const serializeQueryParams = (url, params = {}) => {
  var queryString = url.lastIndexOf('?') !== -1 ? `&` : `?`;
  Object.keys(params)
    .forEach((key) => {
      queryString += `${key}=${params[key]}`;
    });
  return `${url}${queryString}`;
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    try{
      return response.json().then((json) => {
        return Promise.reject(json);
      });
    }catch(err) {
      return Promise.reject({ status: response.statusText });
    }
  }
};

const parseJSON = (response) => {return response.json();};

const sendRequst = (request) => {
  return fetch(request)
    .then(checkStatus)
    .then(parseJSON);
};

const service = {
  get: (url, options = {}) => {
    options.method = "GET";
    var request = createRequst(url, options);
    return sendRequst(request);
  },

  post: (url, options = {}) => {
    options.method = options.method || "POST";
    var request = createRequst(url, options);
    return sendRequst(request);
  },

  update: function(url, options = {}) {
    options.method = "PUT";
    return this.post(url, options);
  },

  delete: (url, options = {}) => {
    options.method = "DELETE";
    var request = createRequst(url, options);
    return sendRequst(request);
  },

  postq: (url, options = {}, queueName = "default") => {
    let queue = Queue.getQueue(queueName);
    options.method = "POST";
    return queue.send(url, options);
  }
};

export default service;


class Queue {
  static requestQueue = {};

  static getQueue(name = "system") {
    if(!this.requestQueue[name]) {
      this.requestQueue[name] = new Queue(name);
    }
    return this.requestQueue[name];
  }

  constructor(name) {
    this.name = name;
    this.requestQueue = [];
    this.executeQueue = this.executeQueue.bind(this);
  }

  queueRequest(request, callback) {
    let queueId = new Date().getTime();
    this.requestQueue.push({
      id: queueId,
      request,
      callback
    });
    //trigger the queue
    this.executeQueue();
  }

  executeQueue() {
    if(this.requestStatus === 'waiting') {
      //break the recurrsion;
      return;
    }
    let requestObj = this.requestQueue.shift();
    if(!requestObj) {
      return;
    }
    this.requestStatus = "waiting";
    sendRequst(requestObj.request)
      .then((res) => {
        requestObj.callback(null, res);
      }, (err) => {
        requestObj.callback(err, null);
      }).finally(() => {
        this.requestStatus = "done";
        //proceed to next request
        this.executeQueue();
      });
  }

  send(url, option) {
    return new Promise((resolve, reject) => {
      let request = createRequst(url, option);
      const requestCallback = (err, data) => {
        if(data) {
          resolve(data);
        }else {
          reject(err);
        }
      };
      this.queueRequest(request, requestCallback);
    });
  }

  clear() {
    if(this.name === 'system') {
      return;
    }
    Reflect.deleteProperty(Queue.requestQueue, this.name);
  }
}
