import {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppButton} from '../../components/AppButton/AppButton';
import {TextField} from '../../components/TextInput/TextInput';
import {resetPassword, generateOtp} from '../../store/slices/authSlice';
import {AppTheme} from '../../config/cssConfig';
import {RootState} from '../../store/store';
import {BaseStyle} from '../../config/cssConfig';

const ForgotPasswordScreen = ({navigation}: any) => {
  const [currentStep, setCurrentStep] = useState<
    'sendOtp' | 'verifyOtp' | 'resetPassword'
  >('sendOtp');
  const [email, setEmail] = useState('');
  const [userOtp, setUserOtp] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const {otp} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const sendOtp = () => {
    dispatch(generateOtp());

    // Send email / text
    setCurrentStep('verifyOtp');
  };

  const verifyOtp = () => {
    // Check OTP expiry
    if (otp?.expiry && new Date() > otp?.expiry) {
      Alert.alert('OTP Expired');
    }
    if (otp?.code?.toString() === userOtp) {
      setCurrentStep('resetPassword');
    } else {
      Alert.alert('Wrong OTP');
    }
  };

  const cancel = () => {
    navigation.navigate('Login');
  };

  const checkResetPassword = () => {
    if (password !== newPassword) {
      Alert.alert('Passwords do not match');
    } else {
      dispatch(resetPassword({password, newPassword}));
      navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={styles.background}>
      {currentStep === 'sendOtp' && (
        <View>
          <Text style={styles.headingText}>
            Enter your email address to receive password reset instructions
          </Text>
          <View style={styles.formFields}>
            <TextField
              label="Email Address"
              type={'emailAddress'}
              kbType={'email-address'}
              value={email}
              setValue={setEmail}
              icon="mail"
            />
          </View>
          <View style={styles.submitButtonView}>
            <AppButton
              title={'Submit'}
              onPress={sendOtp}
              buttonStyles={styles.loginButton}
              textStyles={styles.loginText}></AppButton>
          </View>
        </View>
      )}
      {currentStep === 'verifyOtp' && (
        <View>
          <Text style={styles.headingText}>Verify OTP</Text>
          <View style={styles.formFields}>
            <TextField
              label="Enter OTP"
              type={'oneTimeCode'}
              kbType={'number-pad'}
              value={userOtp}
              setValue={setUserOtp}
              max={6}
              icon="key"
            />
          </View>
          <View style={styles.submitButtonView}>
            <AppButton
              title={'Submit'}
              onPress={() => verifyOtp()}
              buttonStyles={styles.loginButton}
              textStyles={styles.loginText}></AppButton>
          </View>
        </View>
      )}
      {currentStep === 'resetPassword' && (
        <View>
          <Text style={styles.headingText}>Reset your password</Text>
          <View style={styles.formFields}>
            <TextField
              label="Enter New Password"
              type={'password'}
              kbType={'default'}
              value={password}
              setValue={setPassword}
              icon="lock-closed"
            />
            <TextField
              label="Confirm New Password"
              type={'password'}
              kbType={'default'}
              value={newPassword}
              setValue={setNewPassword}
              icon="lock-closed"
            />
          </View>
          <View style={styles.submitButtonView}>
            <AppButton
              title={'Submit'}
              onPress={() => checkResetPassword()}
              buttonStyles={styles.loginButton}
              textStyles={styles.loginText}></AppButton>
          </View>
        </View>
      )}

      <View>
        <AppButton
          title={'Cancel'}
          onPress={() => cancel()}
          buttonStyles={styles.cancelButton}
          textStyles={styles.cancelText}></AppButton>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppTheme?.appColor2,
    minHeight: '100%',
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    color: AppTheme?.fontColor1,
  },
  formFields: {
    width: '100%',
    alignItems: 'center',
  },
  submitButtonView: {marginTop: 40},
  loginButton: {
    width: '90%',
    ...BaseStyle.primaryButton,
  },
  cancelButton: {
    width: '90%',
    ...BaseStyle.secondraryButton,
  },
  loginText: {
    color: AppTheme?.fontColor2,
  },
  cancelText: {
    color: AppTheme?.fontColor1,
  },
});

export default ForgotPasswordScreen;
