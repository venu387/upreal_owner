import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppButton} from '@upreal/components/AppButton/AppButton';
import {TextField} from '@upreal/components/TextInput/TextInput';
import {AppTheme, BaseStyle, colors} from '@upreal/config/cssConfig';
import {Typography} from '@upreal/components/Typography';
import {login} from '../store/slices/authSlice';
import {IconType} from '@upreal/config/config.types';
import {useAppDispatch} from '@upreal/store/hooks';
import {loginUser} from '@upreal/api/auth';
import {useToast} from 'react-native-toast-notifications';
import Loader from '@upreal/components/Loader/Loader';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | undefined>(undefined);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const toast = useToast();
  const dispatch = useAppDispatch();

  const submit = async () => {
    if (email && password) {
      setShowLoader(true);
      const res = await loginUser(email, password);

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
        toast.show(res.error, {type: 'error'});
        setError(res.error);
      }
    } else {
      setError('Enter email and password');
    }
    setShowLoader(false);
  };

  return (
    <SafeAreaView style={{...BaseStyle.background}}>
      {showLoader && <Loader />}
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
            onPress={() => {
              setShowLoader(true);
              submit();
            }}
            buttonStyles={styles.loginButton}
            textStyles={BaseStyle.fontColorSecondary}></AppButton>
        </View>

        <View style={{marginTop: 20, width: '100%'}}>
          <AppButton
            title={'Sign Up'}
            onPress={() => navigation.navigate('SignUp')}
            buttonStyles={styles.signupButton}
            textStyles={BaseStyle.fontColorPrimary}></AppButton>
        </View>

        <Typography
          variant="link"
          styles={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password
        </Typography>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 90,
    marginBottom: 35,
  },
  loginButton: {
    marginTop: 20,
    ...BaseStyle.primaryButton,
  },
  signupButton: {
    ...BaseStyle.secondraryButton,
  },
  forgotPassword: {
    marginTop: 30,
  },
});

export default LoginScreen;
