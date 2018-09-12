export enum LoginActionTypes {
  UPDATE_USERNAME = 'UPDATE_USERNAME',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
}

export interface UpdateUserNameAction {
  type: LoginActionTypes.UPDATE_USERNAME;
  payload: {
    username: string;
  };
}

export interface UpdatePasswordAction {
  type: LoginActionTypes.UPDATE_PASSWORD;
  payload: {
    password: string;
  };
}

export const updateUserNameAction = (username: string): UpdateUserNameAction => ({
  type: LoginActionTypes.UPDATE_USERNAME,
  payload: {
    username,
  },
});

export const updatePasswordAction = (password: string): UpdatePasswordAction => ({
  type: LoginActionTypes.UPDATE_PASSWORD,
  payload: {
    password,
  },
});

export type LoginActions = UpdateUserNameAction | UpdatePasswordAction;
