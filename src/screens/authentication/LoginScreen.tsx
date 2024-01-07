import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {App} from '../../../App';
import {AppButton} from '../../components/AppButton/AppButton';
import {TextField} from '../../components/TextInput/TextInput';
import {AppTheme, BaseStyle} from '../../config/cssConfig';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slices/authSlice';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('../../assets/images/logo.png')}
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
          onPress={() => dispatch(login({email, password}))}
          buttonStyles={styles.loginButton}
          textStyles={styles.loginText}></AppButton>
      </View>
      <Text
        style={styles.forgotPassword}
        onPress={() => {
          navigation.navigate({name: 'ForgotPassword'});
        }}>
        Forgot Password
      </Text>
    </SafeAreaView>
  );
};

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
    ...BaseStyle.primaryButton,
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

export default LoginScreen;
