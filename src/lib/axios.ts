import {firebase} from '@react-native-firebase/auth';
import {ApiBaseUrl} from '@upreal/config/config';
import Axios, {InternalAxiosRequestConfig} from 'axios';

const acquireToken = () => async (config: InternalAxiosRequestConfig<any>) => {
  try {
    const token = await firebase.auth().currentUser?.getIdToken();
    config.headers['Authorization'] = `Bearer ${token}`;
  } catch (error) {
    throw error;
  }
  return config;
};

export const upRealApiInstance = Axios.create({
  baseURL: ApiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

upRealApiInstance.interceptors.request.use(acquireToken());
