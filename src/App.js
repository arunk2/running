import React, { Component } from 'react';
import styles from './styles/app.css';
import Isvg from 'react-inlinesvg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.logo}>
         ArunVa
        </div>
        <div className={styles.header}>
          <div className={styles.searchBox}>
          &nbsp;
          </div>
          <ul className={styles.userOptions}>
            <li>
            &nbsp;
            </li>
            <li>
            &nbsp;
            </li>
            <li>
            &nbsp;
            </li>
            <li >
            &nbsp;
            </li>
          </ul>
        </div>
        <div className={styles.userpf}>
          <div className={styles.avatar}>
            <div className={styles.avatarContent}>
              <div className={styles.avatarimgwrapper}>
                <div className={styles.avatarBadge}>
                  <img alt="Kamal K" className={styles.avatarImg} src="https://lh3.googleusercontent.com/-Iccq9_n2RKk/AAAAAAAAAAI/AAAAAAAAEKk/7vYg_0XXFiw/photo.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <h2 className={styles.cusName}>Kamal K</h2>
          <ul className={styles.listStats}>
            <li>
              <a className={styles.stat} href="https://www.strava.com/athletes/29315452/follows?type=following">
                <div className={styles.statSubtext}>
                Following
                </div>
                <b className={styles.statText}>1</b>
              </a>
            </li>
            <li>
              <a className={styles.stat} href="https://www.strava.com/athletes/29315452/follows?type=following">
                <div className={styles.statSubtext}>
                Following
                </div>
                <b className={styles.statText}>1</b>
              </a>
            </li>
            <li>
              <a className={styles.stat} href="https://www.strava.com/athletes/29315452/follows?type=following">
                <div className={styles.statSubtext}>
                Following
                </div>
                <b className={styles.statText}>1</b>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.mainContent}>
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
        </div>
      </div>
    );
  }
}

export default App;
