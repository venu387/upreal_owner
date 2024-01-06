/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {AppTheme} from './src/config/config';
import {TextField} from './src/components/TextInput/TextInput';
import {AppButton} from './src/components/AppButton/AppButton';
import {Typography} from './src/components/Typography';

function App(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('AppTheme', AppTheme);
  const login = () => {
    Alert.alert('User logged in');
  };

  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('./src/assets/images/upreal_owner.png')}
        style={styles.logo}
      />
      <TextField
        label="Email Address"
        type={'emailAddress'}
        kbType={'email-address'}
        value={email}
        setValue={setEmail}
      />
      <TextField
        label="Password"
        type={'password'}
        kbType={'default'}
        value={password}
        setValue={setPassword}
      />
      <View style={{marginTop: 40, width: '100%'}}>
        <AppButton
          title={'Login'}
          onPress={() => Alert.alert('New Login Button')}
          buttonStyles={styles.loginButton}
          textStyles={styles.loginText}></AppButton>
      </View>
      <Text
        style={styles.forgotPassword}
        onPress={() => {
          Alert.alert('Forgot password');
        }}>
        Forgot Password
      </Text>
    </SafeAreaView>
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

export default App;
