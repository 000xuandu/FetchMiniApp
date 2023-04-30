import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#E2E2EA',
          },
        }}>
        <Stack.Screen name="BOTTOM_TAB" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
