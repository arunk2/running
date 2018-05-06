

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
      activityData: {
        columns: [{ start_date: 'Date', athlete_id: 'Athlete Id', athlete_firstname: 'Name', title: 'Title', type: 'Type', distance: 'Distance', elapsed_time: 'Time' }]
      },
      allAthletes: [],
      athletes: [],
      activites: [],
      allActivites: []
    };
  }

  componentWillMount() {
    this.getLogin();
    this.getAthletes();
    this.getActivites();
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
  getActivites= () => {
    athletesService.getActivites().then((result) => {
      let allActivites = result.activities;
      this.setState({ allActivites, activites: allActivites });
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

  searchActivites = (e) => {
    var updatedList = this.state.allActivites;
    updatedList = updatedList.filter(function(item) {
      return item.athlete_firstname.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ activites: updatedList });
  }


  render() {
    return (
      <Fragment>
        <div className={styles.logo}>
        Tambaram Thunderbolts
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.bannerImage}>&nbsp;</div>
          <div className={styles.addButton}>
            <span>&nbsp;</span>
            <a href={this.state.items.url} target="_blank">Link Strava</a>
            <span>&nbsp;</span>
          </div>
          {this.state.athletes.length !== 0 && <div className={styles.mainContent}>
            <div className={styles.header}>
              <div><input type="text" placeholder="Search by Name" onChange={this.searchColumns}/></div>
              <h4>Athletes</h4>
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
                      {/* <th>&nbsp;</th> */}
                    </Fragment>
                  ))}
                </tr>
                {this.state.athletes.map((data) => (<tr key={data.id}>
                  <Fragment >
                    <td>{data.id}</td>
                    <td><img src={data.profile} alt="Smiley face" height="40" width="40"/></td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    {/* <td className={styles.editButtons}>
                      <Isvg src={require('./styles/edit.svg')}
                        className={styles.svgContainer} cacheGetRequets={true} />
                      <Isvg src={require('./styles/delete.svg')}
                        className={styles.svgContainer} cacheGetRequets={true} /></td> */}
                  </Fragment>
                </tr>))}
              </table>
            </div>
            <div className={styles.header}>
              <div><input type="text" placeholder="Search by Name" onChange={this.searchActivites}/></div>
              <h4>Activities</h4>
            </div>
            <div className={styles.userdetails}>
              <table className={styles.table}>
                <tr>
                  {this.state.activityData.columns.map((data) => (
                    <Fragment key={data.athlete_id}>
                      <th>{data.start_date}</th>
                      <th>{data.athlete_id}</th>
                      <th>{data.athlete_firstname}</th>
                      <th>{data.title}</th>
                      <th>{data.type}</th>
                      <th>{data.distance}</th>
                      <th>{data.elapsed_time}</th>
                      {/* <th>&nbsp;</th> */}
                    </Fragment>
                  ))}
                </tr>
                {this.state.activites.map((data) => (<tr key={data.id}>
                  <Fragment >
                    <td>{data.start_date}</td>
                    <td>{data.athlete_id}</td>
                    <td>{data.athlete_firstname}</td>
                    <td>{data.title}</td>
                    <td>{data.type}</td>
                    <td>{data.distance}</td>
                    <td>{data.elapsed_time}</td>
                    {/* <td>&nbsp;</td> */}
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