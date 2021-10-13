import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Loading } from './components/Loading/Loading';

const Home = React.lazy(() => import('./pages/home'))

const App = () => {
  return (
      <Switch>
        <Suspense fallback={<Loading/>}>
          <Route path='/' exact component={Home} />
        </Suspense>
      </Switch>
  );
}

export default App;
