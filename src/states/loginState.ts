import { LoginActions, LoginActionTypes } from '../actions/loginAction';

export interface LoginState {
  username: string;
  password: string;
}

const initialState: LoginState = {
  username: '',
  password: '',
};

export const loginReducer = (state: LoginState = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case LoginActionTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    case LoginActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
