import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { pushState } from 'redux-router';

@connect(state => ({ routerState: state.router }))
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { dispatch, routerState } = this.props;
    const links = [
      {to: '/container-a', text: 'Container A'},
      {to: '/container-b', text: 'Container B'},
      {to: '/container-c', text: 'Container C'}
    ].map(l =>
        <li key={l.to}><Link to={l.to}>{l.text}</Link></li>
    );

    return (
      <div className="wrapper dashboard-wrapper">
        <aside className="dashboard-aside">
          <div className="aside__content">
            <div className="aside__header">
              <Link to="/">Dashboard</Link>
            </div>
            <nav className="aside__navigation">
              <ul>
                {links}
              </ul>
            </nav>
          </div>
        </aside>
        <main className="dashboard-main">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
