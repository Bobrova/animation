import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import FirstTaskContainer from 'containers/firstTaskContainer';
import SecondTask from 'components/SecondTask';
import ThirdTask from 'components/ThirdTask';
import FourthTask from 'components/FourthTask';
import { store } from 'store/configureStore';

render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route
          path="/"
          component={App}
          exact
        />
        <Route
          path="/first-task"
          component={FirstTaskContainer}
          exact
        />
        <Route
          path="/second-task"
          component={SecondTask}
          exact
        />
        <Route
          path="/third-task"
          component={ThirdTask}
          exact
        />
        <Route
          path="/fourth-task"
          component={FourthTask}
          exact
        />
      </Switch>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
