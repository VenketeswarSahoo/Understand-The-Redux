export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const setUserAction = user => {
  return {
    type: "SET_USER",
    user: user
  };
};
