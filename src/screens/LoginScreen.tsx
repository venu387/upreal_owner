import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppButton} from '@upreal/components/AppButton/AppButton';
import {TextField} from '@upreal/components/TextInput/TextInput';
import {AppTheme, BaseStyle} from '@upreal/config/cssConfig';
import {Typography} from '@upreal/components/Typography';
import {login} from '../store/slices/authSlice';
import {IconType} from '@upreal/config/config.types';
import {useAppDispatch} from '@upreal/store/hooks';
import {loginUser, logoutUser} from '@upreal/api/auth';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();

  const submit = async () => {
    if (email && password) {
      const res = await loginUser(email, password);
      console.log('res', res);

      if (!res?.error) {
        dispatch(
          login({
            userInfo: {
              email: res?.userInfo?.email!,
              firstName: res?.userInfo?.firstName!,
              lastName: res?.userInfo?.lastName!,
            },
          }),
        );
      } else {
        // Show toaster
        setError(res.error);
      }
    } else {
      setError('Enter email and password');
    }
  };

  useEffect(() => {
    logoutUser();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('@upreal/assets/images/logo.png')}
        style={styles.logo}
      />
      {error && (
        <Text
          style={[
            BaseStyle.error,
            {fontSize: 16, minHeight: 10, paddingHorizontal: 10},
          ]}>
          {error}
        </Text>
      )}
      <TextField
        label="Email Address"
        type={'emailAddress'}
        kbType={'email-address'}
        value={email}
        setValue={setEmail}
        icon={{name: 'mail', type: IconType.ion}}
      />
      <TextField
        label="Password"
        type={'password'}
        kbType={'default'}
        value={password}
        setValue={setPassword}
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
