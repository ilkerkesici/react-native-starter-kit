import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Login, Splash, Register, AllMessages, Users, Messaging } from '../../screens';
import { SECONDARY_DARK_COLOR, PRIMARY_COLOR } from '../../styles/Colors';
import { MailIcon, UsersIcon } from '../../components';

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
          <Scene initial={true} key={'tabs'}  showLabel={false}  tabs  inactiveTintColor={SECONDARY_DARK_COLOR} activeTintColor={PRIMARY_COLOR} hideNavBar>
            <Scene key="users" component={Users} icon={UsersIcon} hideNavBar />
            <Scene key="all_messages" component={AllMessages} icon={MailIcon} hideNavBar />
          </Scene>
          <Scene key="messaging" component={Messaging} hideNavBar />
        </Stack>
      </Stack>
    </Router>
  );
}