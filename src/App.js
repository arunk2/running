

import React, { Component, Fragment } from 'react';
import styles from './styles/app.css';
import Isvg from 'react-inlinesvg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {},
      userData: []
    };
  }

  componentWillMount() {
    this.getlogin();
  }

  getlogin() {
    fetch('http://csika.org:8082/login').then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result);
    });
  }

  getUserData = () => {
    console.log('this.state.items', this.state.items);
    fetch(this.state.items.url).then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result);
    });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.logo}>
        TAMBARAM ThunderBOLTS
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.bannerImage}>&nbsp;</div>
          {this.state.userData.length === 0 && <div className={styles.addButton}>
            <span>&nbsp;</span>
            <button onClick={this.getUserData}>Log In</button>
            <span>&nbsp;</span>
          </div>}
          {this.state.userData.length !== 0 && <div className={styles.mainContent}>
            <div className={styles.header}>
              <h4>Kamal K Activity 1</h4>
            </div>
            <div className={styles.userdetails}>
              <table className={styles.table}>
                <tr>
                  <th>Thing Number</th>
                  <th>Thing 2</th>
                  <th>Thing 3</th>
                  <th>Thing 4</th>
                  <th>Thing 5</th>
                  <th>Thing 6</th>
                  <th>The final thing!</th>
                  <th className={styles.empty} />
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
              </table>
            </div>
            <div className={styles.header}>
              <h4>Kamal K Activity 2</h4>
            </div>
            <div className={styles.userdetails}>
              <table className={styles.table}>
                <tr>
                  <th>Thing Number</th>
                  <th>Thing 2</th>
                  <th>Thing 3</th>
                  <th>Thing 4</th>
                  <th>Thing 5</th>
                  <th>Thing 6</th>
                  <th>The final thing!</th>
                  <th className={styles.empty} />
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                  <td className={styles.editButtons}><Isvg src={require('./styles/edit.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /><Isvg src={require('./styles/delete.svg')}
                    className={styles.svgContainer} cacheGetRequets={true} /></td>
                </tr>
              </table>
            </div>
          </div>}
        </div>
      </Fragment>
    );
  }
}

export default App;
