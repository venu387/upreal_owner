type UserDto = {
  id?: string;
  uid?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailVerified?: boolean;
  isActive?: boolean;
  createdOn?: Date;
  updatedOn?: Date;
};

type RegisterUser = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export {type UserDto, type RegisterUser};
