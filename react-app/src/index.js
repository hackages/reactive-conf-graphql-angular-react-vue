import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import {ApolloProvider} from 'react-apollo';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {apolloClient} from './apollo';

import Login from './component/authentication/Login';
import Register from './component/authentication/Register';

import Header from './component/header/Header';

import ConferenceNavigation from './ConferenceNavigation';
import './main.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <div>
        <Header/>

        <Switch>
          <Route path="/authentication/login" component={Login}/>
          <Route path="/authentication/register" component={Register}/>

          <Route path="/" component={ConferenceNavigation}/>
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
