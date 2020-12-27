import React, {useState, useEffect} from 'react';

import {
  StatusBar,
} from 'react-native';

import { BottomNavigation } from 'react-native-paper';

import SplashScreen from 'react-native-splash-screen';

import appTheme from '../theme';

import { Container } from './styles';

import Home from '../screens/Home';
import Historic from '../screens/Historic';

const App = () => {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {key: 'historic', title: "Histórico", icon: 'update'},
    {key: 'home', title: "Ínicio", icon: 'home'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    historic: Historic
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // TODO - DELETE NATIVE ROUTER FROM APP

  return (
    <Container theme={appTheme}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      {/* <NativeRouter>
        <Route exact path='/' component={Home} />
      </NativeRouter> */}
      <BottomNavigation 
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </Container>
  );
};

export default App;