// import React from 'react';

// import { Route, Switch } from 'react-router-dom';
// import Home from '../containers/Home';
// import Palabra from '../containers/Palabra';
// import MisPalabra from '../containers/MisPalabras';
// import Login from '../containers/Login';
// import NotFound from '../containers/404';

// const Routes = () => {
//   return (
//     <>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/palabra" component={Palabra} />
//         <Route exact path="/mispalabras" component={MisPalabra} />
//         <Route exact path="/login" component={Login} />
//       </Switch>
//     </>
//   );
// };

// export default Routes;
import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import MisPalabras from '../containers/MisPalabras';
import Login from '../containers/Login';
import NotFound from '../containers/404';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mispalabras" component={MisPalabras} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
