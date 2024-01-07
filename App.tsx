/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {AppTheme} from './src/config/cssConfig';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/authentication/LoginScreen';
import ForgotPasswordScreen from './src/screens/authentication/ForgotPasswordScreen';

import type {RootState} from './src/store/store';
import {useSelector, Provider, useDispatch} from 'react-redux';
import {store} from './src/store/store';
import {logout} from './src/store/slices/authSlice';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={() => dispatch(logout())} />
    </View>
  );
}

function RootApp(): React.JSX.Element {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
}

function App(): React.JSX.Element {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            key={'Login'}
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen key={'Home'} name="Home" component={HomeScreen} />
        )}
        <Stack.Screen
          key={'ForgotPassword'}
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: 'Reset Password',
            headerStyle: {
              backgroundColor: AppTheme?.appColor1,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: AppTheme?.appColor1,
    minHeight: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 90,
    marginBottom: 35,
  },
  loginButton: {
    width: '80%',
    height: 55,
    justifyContent: 'center',
    backgroundColor: AppTheme?.buttonPrimaryColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  loginText: {
    color: AppTheme?.fontColor2,
  },
  forgotPassword: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: AppTheme?.fontColor1,
    fontSize: 16,
  },
});

export {App, RootApp};
