import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignIn from './src/page/SignIn';
import SignUp from './src/page/SignUp';
import FootSize from './src/page/FootSize';
import Home from './src/page/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import usePermissions from './src/hooks/userPermissions';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  FootSize: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {

  usePermissions();
  React.useEffect(() => {
    setTimeout(()=>{SplashScreen.hide()}, 3000)
  },[])

  return (
        <>
          <NavigationContainer>
            <Tab.Navigator initialRouteName='SignIn'>
              <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  title: '회원가입',
                  tabBarIcon: () => <MaterialCommunityIcons name="file-sign" size={20} />,
                }}
              />

              <Tab.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  title: '로그인',
                  tabBarIcon: () => <MaterialCommunityIcons name="login" size={20} />,
                }}
              />

              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  title: '홈',
                  tabBarIcon: () => <MaterialCommunityIcons name="home" size={20} />,
                }}
              />

              <Tab.Screen
                name="FootSize"
                component={FootSize}
                options={{
                  title: '측정',
                  tabBarIcon: () => <MaterialCommunityIcons name="foot-print" size={20} />,
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </>
  );
}

export default App;