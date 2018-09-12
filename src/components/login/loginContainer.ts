import { connect } from 'react-redux';
import { AppState } from '../../Store';
import { LoginComponent } from './loginComponent';
import { updateUserNameAction, updatePasswordAction, LoginActions } from '../../actions/loginAction';
import { Dispatch } from 'redux';

function mapDispatchToProps(dispatch: Dispatch<LoginActions>) {
  return {
    updateUserName: (name: string) => dispatch(updateUserNameAction(name)),
    updatePassword: (password: string) => dispatch(updatePasswordAction(password)),
  };
}

function mapStateToProps(state: AppState) {
  const username = state.login.username;
  const password = state.login.password;
  return {
    username,
    password,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
