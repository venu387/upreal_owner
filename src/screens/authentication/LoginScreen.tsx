import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppButton} from '@upreal/components/AppButton/AppButton';
import {TextField} from '@upreal/components/TextInput/TextInput';
import {AppTheme, BaseStyle} from '@upreal/config/cssConfig';
import {useDispatch} from 'react-redux';
import {Typography} from '@upreal/components/Typography';
import {login} from '../../store/slices/authSlice';
import {IconType} from '@upreal/config/config.types';

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
        source={require('@upreal/assets/images/logo.png')}
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
        icon={{name: 'mail', type: IconType.ion}}
      />
      <TextField
        label="Password"
        type={'password'}
        kbType={'default'}
        value={password}
        setValue={setPassword}
        error={passwordError}
        icon={{name: 'lock-closed', type: IconType.ion}}
      />
      <View style={{marginTop: 40, width: '100%'}}>
        <AppButton
          title={'Login'}
          onPress={() => submit()}
          buttonStyles={styles.loginButton}
          textStyles={BaseStyle.fontColorSecondary}></AppButton>
      </View>
      <Typography
        variant="link"
        styles={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot Password
      </Typography>
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
    marginTop: 30,
  },
});

export default LoginScreen;
