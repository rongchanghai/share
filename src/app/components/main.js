import React from 'react';
import {Link} from 'react-router';
//css 写法的一种方式
let styles = {
  leftNav: {
    width: '170px',
    position: 'fixed',
    top: '56px',
    height: '100%',
    background: 'lightblue'
  },
  content: {
    background: '#fff',
    position: 'absolute',
    top: '56px',
    left: '200px',
    width: '70%',
    height: '90%',
  },
  menu: {
    display: 'block',
    overflow: 'hidden'
  },
  list: {
    fontSize: "20px",
    listStyle: "none",
  },
  reset: {
    textDecoration: "none"
  }
};
class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="leftNav" style={styles.leftNav}>
          <nav>
            <ul>
              <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/login">login</Link>
              </li>
              <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/logout">logout</Link>
              </li>
              <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/video">video</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content" style={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main