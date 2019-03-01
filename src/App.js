import React, { Component } from 'react';
// import Auth from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
// import Post from './component/Post/Post';
import Nav from './component/Nav/Nav';
import './App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom' //

class App extends Component {
  render() {
    const {location} = this.props
    return (
      <div className="App">
        <Nav location={location} />
        {routes}
      </div> //{routes} and <Nav/> are siblings, which means that despite {routes} having the location object, it isn't normally accessible by <Nav/>.  However, importing {withRouter} from 'react-router-dom' and exporting App through it ie.   export default withRouter(App);   gives App access to location on props. We can then pass location down to <Nav/> as a prop.
    );
  }
}

export default withRouter(App);
