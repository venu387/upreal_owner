import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {RootState} from '../store';
import {UserDto} from '@upreal/api/user.types';
import {getUnixDate} from '@upreal/util/date-helper';

export interface AuthState {
  user: UserDto | undefined;
  otp: {code: number; expiry: number} | undefined;
  isLoggedIn: boolean | undefined;
}

export interface ForgotPasswordRequest {
  password: string;
  newPassword: string;
}

const initialState: AuthState = {
  user: undefined,
  otp: undefined,
  isLoggedIn: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        userInfo: UserDto;
      }>,
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload.userInfo) {
        state.user = action.payload.userInfo;
        state.isLoggedIn = !!state.user;
      } else {
        state.user = undefined;
        state.isLoggedIn = !!state.user;
      }
    },
    logout: state => {
      state.user = undefined;
      state.isLoggedIn = !!state.user;
    },
    resetPassword: (state, action: PayloadAction<ForgotPasswordRequest>) => {
      // Reset OTP
      state.otp = undefined;
      // send api call to update password
      Alert.alert('Password updated');
    },
    generateOtp: state => {
      state.otp = {
        code: getRandomInt(100000, 999999),
        expiry: getExpiryForOtp(new Date(), 1),
      };
      console.log('otp', state.otp);
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, resetPassword, generateOtp} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getExpiryForOtp(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000).valueOf();
}
