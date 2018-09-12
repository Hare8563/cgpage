import * as React from 'react';
import { LoginState } from '../../states/loginState';
import { UpdateUserNameAction, UpdatePasswordAction } from '../../actions/loginAction';

interface LoginActions {
  updateUserName: (username: string) => UpdateUserNameAction;
  updatePassword: (password: string) => UpdatePasswordAction;
}

export type LoginProps = LoginState & LoginActions;

export const LoginComponent: React.SFC<LoginProps> = (props: LoginProps) => {
  return (
    <div>
      <form>
        <span>
          ユーザ名:
          <input type="text" value={props.username} onChange={e => props.updateUserName(e.target.value)} />
        </span>
        <span>
          パスワード:
          <input type="password" value={props.password} onChange={e => props.updatePassword(e.target.value)} />
        </span>
      </form>
    </div>
  );
};
