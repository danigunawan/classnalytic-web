import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Helmet from 'react-helmet';
import dynamic from 'next/dynamic';
// import Router from 'next/router';

import Loader from '../components/commons/Loader';

const Login = dynamic(import('../components/pages/login'), {
  loading: () => <Loader />
});

const enhance = compose(
  connect(
    (state) => state,
    {}
  )
);

class LoginPage extends Component {
  static async getInitialProps({ store }) {
    return { ...store };
  }

  render() {
    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'th' }}
          title="Smart Classroom | Login"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
            { property: 'og:title', content: 'Smart Classroom' }
          ]}
        />
        <Login store={this.props.login} />
      </Fragment>
    );
  }
}

export default enhance(LoginPage);
