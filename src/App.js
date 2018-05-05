

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
        columns: [{ id: 'Id', profile: 'Profile Pic', firstname: 'First Name', lastname: 'Last Name' }]
      },
      allAthletes: [],
      athletes: []
    };
  }

  componentWillMount() {
    this.getLogin();
    this.getAthletes();
  }

  getLogin = () => {
    athletesService.getLogin().then((result) => {
      const items = result;
      this.setState({ items });
    }, (err) => {
      console.log("all list count error ", err);
    });
  }

  getUserData = () => {
    athletesService.getLoginAcess(this.state.items.url).then((result) => {
      const totalRecord = result;
      this.setState({ totalRecord });
    }, (err) => {
      console.log("all list count error ", err);
    });
  }

  getAthletes= () => {
    athletesService.getAthletes().then((result) => {
      let allAthletes = result.athletes;
      this.setState({ allAthletes, athletes: allAthletes });
    }, (err) => {
      console.log("all list count error ", err);
    });
  }
  searchColumns = (e) => {
    var updatedList = this.state.allAthletes;
    updatedList = updatedList.filter(function(item) {
      return item.firstname.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ athletes: updatedList });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.logo}>
        TAMBARAM ThunderBOLTS
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.bannerImage}>&nbsp;</div>
          <div className={styles.addButton}>
            <span>&nbsp;</span>
            <button onClick={this.getUserData}>Link Strava</button>
            <span>&nbsp;</span>
          </div>
          {this.state.athletes.length !== 0 && <div className={styles.mainContent}>
            <div className={styles.header}>
              <h4>Kamal K Activity 1</h4>
              <div>&nbsp;<input type="text" placeholder="search" onChange={this.searchColumns}/></div>
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
                {this.state.athletes.map((data) => (<tr key={data.id}>
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
                {this.state.athletes.map((data) => (<tr key={data.id}>
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
