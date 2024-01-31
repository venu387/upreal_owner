import {AppButton} from '@upreal/components/AppButton/AppButton';
import {TextField} from '@upreal/components/TextInput/TextInput';
import {Typography} from '@upreal/components/Typography';
import {BaseStyle} from '@upreal/config/cssConfig';
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';
import {signupUser, logoutUser} from '@upreal/api/auth';
import Loader from '@upreal/components/Loader/Loader';
import {useToast} from 'react-native-toast-notifications';

const SignUpScreen = ({navigation}: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState<string | undefined>(undefined);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const toast = useToast();

  const submit = async () => {
    if (email && password) {
      setShowLoader(true);

      const res = await signupUser({email, password, firstName, lastName});

      if (!res?.error) {
        toast.show('Account created successfully!');

        // Firebase creates a session for the new user. Clear the session and force user to manually login
        await logoutUser();

        navigation.navigate('LogIn');
      } else {
        // Show toaster
        toast.show(res.error, {type: 'error'});
      }
    } else {
      setError('Enter email and password');
    }
    setShowLoader(false);
  };
  return (
    <SafeAreaView
      style={{
        ...BaseStyle.background,
      }}>
      {showLoader && <Loader />}
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant="h5" styles={styles.heading}>
          Create an account
        </Typography>
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
          label="First Name"
          type={'givenName'}
          kbType={'default'}
          value={firstName}
          setValue={setFirstName}
        />
        <TextField
          label="Last Name"
          type={'givenName'}
          kbType={'default'}
          value={lastName}
          setValue={setLastName}
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
        <TextField
          label="Confirm Password"
          type={'password'}
          kbType={'default'}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <View style={{marginTop: 40, width: '100%'}}>
          <AppButton
            title={'Sign Up'}
            onPress={() => submit()}
            buttonStyles={styles.button}
            textStyles={BaseStyle.fontColorSecondary}></AppButton>
        </View>

        <Typography variant="body-2" styles={styles.linkLogin}>
          Already have an account?{' '}
          <Typography
            variant="link"
            styles={styles.ml5}
            onPress={() => navigation.navigate('LogIn')}>
            Sign In
          </Typography>
        </Typography>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 60,
    marginBottom: 35,
  },
  button: {
    marginTop: 20,
    ...BaseStyle.primaryButton,
  },
  linkLogin: {
    marginTop: 30,
  },
  ml5: {
    paddingLeft: 15,
    verticalAlign: 'top',
  },
});
export default SignUpScreen;
