/*eslint-disable*/
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Exlean = React.lazy(() =>
  import(/* webpackChunkName: "menu-level-3" */ './ExerciseLean')
);
const ExGain = React.lazy(() =>
  import(/* webpackChunkName: "menu-level-3" */ './ExerciseGain')
);

const ExerciseMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/exerciseLean`}
      />
     
      <Route
        path={`${match.url}/exerciseLean`}
        render={(props) => <Exlean {...props} />}
      />
      <Route
        path={`${match.url}/exerciseGain`}
        render={(props) => <ExGain {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default ExerciseMenu;
