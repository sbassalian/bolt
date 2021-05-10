
// import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from './home/home_page';

// // import videoplayer from './videoplayer';
// // import notifications from './notifications';
// // import options from './options';

// const App = () => (
//   <div>
//     <NavBarContainer />

//     <Switch>
//       <AuthRoute exact path="/" component={MainPage} />
//       <AuthRoute exact path="/login" component={LoginFormContainer} />
//       <AuthRoute exact path="/signup" component={SignupFormContainer} />
//       <ProtectedRoute exact path="/home" component={HomePage} />
      
//     </Switch>
//   </div>
// );

// export default App;

import React from 'react';


import VideoPlayer from './videoplayer';

import Notifications from './notifcations';



const App = () => {

  return (
    <div>

      <NavBarContainer />

     <Switch>
       <AuthRoute exact path="/" component={Home} />
       <AuthRoute exact path="/login" component={LoginFormContainer} />
       <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/main" component={MainPage} />

     </Switch>
    </div>
  );
};

export default App;