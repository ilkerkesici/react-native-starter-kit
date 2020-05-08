import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Login, Splash, Register, Main } from '../../screens';

export const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="splash" component={Splash} hideNavBar type="reset" />
        <Stack key={"auth"} hideNavBar type="reset">
          <Scene key="login" component={Login} hideNavBar initial />
          <Scene key="register" component={Register} hideNavBar />
        </Stack>
        <Stack key={'home'} type="reset" hideNavBar>
          <Scene key="main" component={Main}  hideNavBar initial />
        </Stack>
      </Stack>
    </Router>
  );
}