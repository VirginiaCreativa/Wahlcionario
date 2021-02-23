/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { history } from './redux/store/store';
import { LoadUser } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (localStorage.user) {
      this.props.LoadUser();
    } else {
      history.push('landing');
    }
  }

  componentWillUpdate() {
    if (localStorage.user) {
      this.props.LoadUser();
    } else {
      history.push('landing');
    }
  }

  render() {
    return (
      <Router history={history}>
        <Layouts>
          <Routes />
        </Layouts>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ LoadUser }, dispatch);

export default compose(connect(null, mapDispatchToProps))(App);
