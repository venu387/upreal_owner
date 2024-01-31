import {upRealApiInstance} from '@upreal/lib/axios';
import {UserDto} from './user.types';

const getCurrentUser = async () => {
  try {
    const response = await upRealApiInstance.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createUser = async (user: UserDto) => {
  try {
    const response = await upRealApiInstance.post('/user', user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (user: UserDto) => {
  try {
    const response = await upRealApiInstance.put('/user', user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getCurrentUser, createUser, updateUser};
