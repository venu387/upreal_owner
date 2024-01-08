import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../../components/AppButton/AppButton';
import {TextField} from '../../components/TextInput/TextInput';
import {AppTheme, BaseStyle} from '../../config/cssConfig';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slices/authSlice';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined,
  );

  const dispatch = useDispatch();

  const submit = () => {
    if (!email) {
      setEmailError('Please enter valid email');
    }
    if (!password) {
      setPasswordError('Please enter valid password');
    }
    if (email && password) {
      dispatch(login({email, password}));
      setEmailError(undefined);
      setPasswordError(undefined);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      {(emailError || passwordError) && (
        <Text style={[BaseStyle.bold, {fontSize: 18, minHeight: 10}]}>
          Please enter valid credentials
        </Text>
      )}
      <TextField
        label="Email Address"
        type={'emailAddress'}
        kbType={'email-address'}
        value={email}
        setValue={setEmail}
        error={emailError}
        icon={'mail'}
      />
      <TextField
        label="Password"
        type={'password'}
        kbType={'default'}
        value={password}
        setValue={setPassword}
        error={passwordError}
        icon={'lock-closed'}
      />
      <View style={{marginTop: 40, width: '100%'}}>
        <AppButton
          title={'Login'}
          onPress={() => submit()}
          buttonStyles={styles.loginButton}
          textStyles={BaseStyle.fontColorSecondary}></AppButton>
      </View>
      <Text
        style={[styles.forgotPassword, BaseStyle.fontColorPrimary]}
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
    fontFamily: 'Lato-Bold',
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
  forgotPassword: {
    marginTop: 20,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default LoginScreen;
