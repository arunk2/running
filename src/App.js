

import React, { Component, Fragment } from 'react';
import styles from './styles/app.css';
import { athletesService } from './dataservice';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {},
      userData: {
        athletes: [
          {
            access_token: "cfc6e196c13ab4e3bd97e64151267cbec58acb4d",
            email: "kamalcdsk@gmail.com",
            firstname: "Kamal",
            id: 29315452,
            lastname: "K",
            profile: "https://lh3.googleusercontent.com/-Iccq9_n2RKk/AAAAAAAAAAI/AAAAAAAAEKk/7vYg_0XXFiw/photo.jpg",
            sex: "M",
            username: "None"
          },
          {
            access_token: "aa70f5f3249fb5279b36266df780904ffefd708e",
            email: "emailarunkumar@gmail.com",
            firstname: "Arunkumar",
            id: 23133379,
            lastname: "Krishnan",
            profile: "https://lh6.googleusercontent.com/-BkIIQNOenVE/AAAAAAAAAAI/AAAAAAAABIo/hPpblnjTygM/photo.jpg",
            sex: "M",
            username: "arunkumar_krishnan"
          }
        ],
        status: "success"
      }
    };
  }

  componentWillMount() {
    this.getLogin();
  }


  getLogin = () => {
    athletesService.getLogin().then((result) => {
      const totalRecord = result;
      this.setState({ totalRecord });
    }, (err) => {
      console.log("all list count error ", err);
    });
  }

  getUserData = () => {
    console.log('this.state.items', this.state.items);
    athletesService.getLogin().then((result) => {
      const totalRecord = result;
      this.setState({ totalRecord });
    }, (err) => {
      console.log("all list count error ", err);
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
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
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
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>some data</td>
                  <td>other data</td>
                  <td>ye?</td>
                  <td>nay?</td>
                  <td>smashing!</td>
                  <td>yeah!</td>
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
