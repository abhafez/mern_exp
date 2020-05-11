import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'constants/Routes';

import { wrapWithMainLayout } from 'functions/wrappers';
import HomaPage from 'components/HomePage';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={Routes.home}>
            {wrapWithMainLayout(<HomaPage />)}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
