import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import FootSize from './src/FootSize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  FootSize: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  title: '로그인',
                  tabBarIcon: () => <FontAwesome5 name="list" size={20} />,
                }}
              />
              <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  title: '회원가입',
                  tabBarIcon: () => <FontAwesome5 name="list" size={20} />,
                }}
              />
              <Tab.Screen
                name="FootSize"
                component={FootSize}
                options={{
                  title: '측정',
                  tabBarIcon: () => <FontAwesome5 name="list" size={20} />,
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
  );
}

export default App;