/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppTheme} from './src/config/cssConfig';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import MyPropertiesScreen from './src/screens/MyPropertiesScreen';

import type {RootState} from './src/store/store';
import {useSelector, Provider, useDispatch} from 'react-redux';
import {store, logout} from './src/store';
import {ToastProvider} from 'react-native-toast-notifications';
import Toaster from './src/components/Toaster/Toaster';

const Stack = createNativeStackNavigator();

function RootApp(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ToastProvider
        placement="top"
        duration={5000}
        animationType="zoom-in"
        animationDuration={250}
        textStyle={{fontSize: 20}}
        offsetTop={20}
        offsetBottom={40}
        swipeEnabled={true}
        renderToast={_toastOptions => (
          <Toaster
            title={_toastOptions.message}
            type={_toastOptions.type}></Toaster>
        )}>
        <App />
      </ToastProvider>
    </Provider>
  );
}

function App(): React.JSX.Element {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log('IsUserLoggedIn', isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="LogIn"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{
                title: 'Reset Password',
                headerStyle: {
                  backgroundColor: AppTheme?.appColor1,
                },
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}></Stack.Screen>
          </Stack.Group>
        ) : (
          <Stack.Screen
            name="Home"
            component={MyPropertiesScreen}
            options={{
              title: '',
              headerLeft: () => headerLogo(),
              headerStyle: {
                backgroundColor: AppTheme?.appColor1,
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {App, RootApp};

function headerLogo(): React.ReactNode {
  return (
    <View style={{width: 24}}>
      <Image source={require('./src/assets/images/logo_small.png')}></Image>
    </View>
  );
}
