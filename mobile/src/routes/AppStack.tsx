import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators   } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabas from './StudyTabs'

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        cardStyle: {
          backgroundColor: '#f0f0f5',
        },
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS


      }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabas} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;