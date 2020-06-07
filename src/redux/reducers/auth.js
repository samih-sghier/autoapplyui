import { AuthActionTypes } from '../consts';

const { LOADING_AUTH, LOG_IN, LOG_OUT } = AuthActionTypes;

const initialState = {
  firebaseToken: '',
  loggingIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LOADING_AUTH:
    return {
      ...state,
      loggingIn: true,
    };
  case LOG_IN:
    return {
      ...state,
      loggingIn: false,
      firebaseToken: action.payload,
    };
  case LOG_OUT:
    return {
      ...state,
      firebaseToken: '',
    };
  default:
    return state;
  }
};

export const selectFirebaseToken = (state) => (state.firebaseToken);

export const selectLoggingIn = (state) => (state.loggingIn);