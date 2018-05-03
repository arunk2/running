

import React, { Component, Fragment } from 'react';
import styles from './styles/app.css';
import { athletesService } from './dataservice';
import Isvg from 'react-inlinesvg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {},
      userData: {
        columns: [{ id: 'Id', profile: 'Profile Pic', firstname: 'First Name', lastname: 'Last Name' }],
        athletes: [],
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
    console.log('this.state.userData', this.state.userData);
    return (
      <Fragment>
        <div className={styles.logo}>
        TAMBARAM ThunderBOLTS
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.bannerImage}>&nbsp;</div>
          {this.state.userData.athletes.length === 0 && <div className={styles.addButton}>
            <span>&nbsp;</span>
            <button onClick={this.getUserData}>Log In</button>
            <span>&nbsp;</span>
          </div>}
          {this.state.userData.athletes.length !== 0 && <div className={styles.mainContent}>
            <div className={styles.header}>
              <h4>Kamal K Activity 1</h4>
            </div>
            <div className={styles.userdetails}>
              <table className={styles.table}>
                <tr>
                  {this.state.userData.columns.map((data) => (
                    <Fragment key={data.id}>
                      <th>{data.id}</th>
                      <th>{data.profile}</th>
                      <th>{data.firstname}</th>
                      <th>{data.lastname}</th>
                      <th>&nbsp;</th>
                    </Fragment>
                  ))}
                </tr>
                {this.state.userData.athletes.map((data) => (<tr key={data.id}>
                  <Fragment >
                    <td>{data.id}</td>
                    <td><img src={data.profile} alt="Smiley face" height="42" width="42"/></td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td className={styles.editButtons}>
                      {/* <Isvg src={require('./styles/edit.svg')}
                        className={styles.svgContainer} cacheGetRequets={true} /> */}
                      <Isvg src={require('./styles/delete.svg')}
                        className={styles.svgContainer} cacheGetRequets={true} /></td>
                  </Fragment>
                </tr>))}
              </table>
            </div>
            <div className={styles.header}>
              <h4>Kamal K Activity 2</h4>
            </div>
            <div className={styles.userdetails}>
              <table className={styles.table}>
                <tr>
                  {this.state.userData.columns.map((data) => (
                    <Fragment key={data.id}>
                      <th>{data.id}</th>
                      <th>{data.profile}</th>
                      <th>{data.firstname}</th>
                      <th>{data.lastname}</th>
                      <th>&nbsp;</th>
                    </Fragment>
                  ))}
                </tr>
                {this.state.userData.athletes.map((data) => (<tr key={data.id}>
                  <Fragment >
                    <td>{data.id}</td>
                    <td><img src={data.profile} alt="Smiley face" height="42" width="42"/></td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td className={styles.editButtons}>
                      {/* <Isvg src={require('./styles/edit.svg')}
                        className={styles.svgContainer} cacheGetRequets={true} /> */}
                      <Isvg src={require('./styles/delete.svg')}
                        className={styles.svgContainer} cacheGetRequets={true} /></td>
                  </Fragment>
                </tr>))}
              </table>
            </div>
          </div>}
        </div>
      </Fragment>
    );
  }
}

export default App;
