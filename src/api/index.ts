import axios from 'axios';
import {ApiBaseUrl} from '@upreal/config/config';
import {firebase} from '@react-native-firebase/auth';

const token = firebase.auth().currentUser?.getIdToken();
const axiosInstance = axios.create({
  baseURL: ApiBaseUrl,
  timeout: 1000,
  headers: {Authentication: `Bearer ${token}`},
});

export default axiosInstance;
