import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = React.lazy(() => import('./pages/home/HomePageContainer'))

const App = () => {
  return (
      <Switch>
        <Suspense fallback={<>Loading...</>}>
          <Route path='/' exact component={Home} />
        </Suspense>
      </Switch>
  );
}

export default App;
