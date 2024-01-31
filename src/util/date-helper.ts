export const getUnixDateNow = () => {
  return new Date().valueOf();
};

export const getUnixDate = (date: Date) => {
  return date?.valueOf();
};

export const getDateFromUnix = (ut: number) => {
  return new Date(ut);
};
