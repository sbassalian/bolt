

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPageContainer from './main/main_page_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './home/home_page';







const App = () => {
  
  return (
    <div>

      <NavBarContainer />

     <Switch>
       <AuthRoute exact path="/" component={Home} />
       <AuthRoute exact path="/login" component={LoginFormContainer} />
       <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/main" component={MainPageContainer} />

     </Switch>
    </div>
  );
};

export default App;
