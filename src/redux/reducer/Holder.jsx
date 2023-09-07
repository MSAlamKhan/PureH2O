export const IS_SIGN_IN = 'IS_SIGN_IN';
export const USER_DETAILS = 'USER_DETAILS';
export const OTP = 'OTP';
export const ROLE_ID = 'ROLE_ID';
export const FIRST_SPLASH = 'FIRST_SPLASH';
export const SECOND_SPLASH = 'SECOND_SPLASH';
export const SOCIAL_DATA = 'SOCIAL_DATA';

const initial_state = {
  userDetails: null,
  isSignin: null,
  otp: null,
  role_id: null,
  first_splash: null,
  second_splash: null,
  social_data: null,
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case IS_SIGN_IN:
      return {
        ...state,
        isSignin: action.payload,
      };
    case SOCIAL_DATA:
      return {
        ...state,
        social_data: action.payload,
      };
    case OTP:
      return {
        ...state,
        otp: action.payload,
      };
    case ROLE_ID:
      return {
        ...state,
        role_id: action.payload,
      };
    case FIRST_SPLASH:
      return {
        ...state,
        first_splash: action.payload,
      };
    case SECOND_SPLASH:
      return {
        ...state,
        second_splash: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
