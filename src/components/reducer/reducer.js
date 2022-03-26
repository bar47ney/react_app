export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return action.data;
    case LOGOUT:
      return action.data;
    default:
      throw new Error();
  }
};
