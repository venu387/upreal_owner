import {UserInfo} from '@upreal/store/slices/authSlice';
import axiosInstance from './index';

const getCurrentUser = async () => {
  const response = await axiosInstance.get('/v1/user');
  return response.data;
};

const createUser = async (user: UserInfo) => {
  const response = await axiosInstance.post('/v1/user', user);
  return response.data;
};

export {getCurrentUser, createUser};
