import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Main from './pages/Main';
import Question from './pages/Question';
import FinalScreen from './pages/FinalScreen';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Main">
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="FinalScreen" component={FinalScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
