import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export interface AuthState {
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  isLoggedIn: boolean | undefined;
  token: string | undefined;
  otp: number | undefined;
}

export interface RegisterUser {
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

const initialState: AuthState = {
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  isLoggedIn: undefined,
  token: undefined,
  otp: undefined,
};

export interface LoginUser {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  password: string;
  newPassword: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginUser>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (
        action.payload.email == 'admin@test.com' &&
        action.payload.password === 'test'
      ) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
      Alert.alert('Login ' + (state.isLoggedIn ? 'success' : 'failed'));
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    register: (state, action: PayloadAction<RegisterUser>) => {
      (state.email = action.payload.email),
        (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName);
    },
    resetPassword: (state, action: PayloadAction<ForgotPasswordRequest>) => {
      // send api call to update password
      Alert.alert('Password updated');
    },
    generateOtp: state => {
      state.otp = getRandomInt(100000, 999999);
      console.log('otp', state.otp);
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, register, resetPassword, generateOtp} =
  authSlice.actions;

export default authSlice.reducer;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
