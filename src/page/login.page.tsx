import { Component } from 'react';
import { Link } from 'react-router-dom';
import { countAtom, store, atomQuery } from '../atom/main.atom';
import { fetchLogin } from '../api/user.api';
import { LoginButtons, LoginInput, LoginTitle, LoginWrapper } from '../shared/style/login.styled';

type LoginProps = object;

type LoginState = {
  atomQuery: any;
  email: string;
  password: string;
};

export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      atomQuery: store.get(atomQuery),
      email: '',
      password: '',
    };
  }

  componentDidMount(): void {
    store.sub(atomQuery, () => {
      this.setState({
        atomQuery: store.get(atomQuery),
      });
    });
  }

  render() {
    return (
      <LoginWrapper>
        <LoginTitle>로그인</LoginTitle>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form>
            <LoginInput
              placeholder='email'
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                })
              }
            />
            <LoginInput
              placeholder='password'
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
            <LoginButtons>
              <button
                type='button'
                onClick={() =>
                  fetchLogin({
                    email: this.state.email,
                    password: this.state.password,
                  })
                }
              >
                API 호출
              </button>
            </LoginButtons>
          </form>
        </div>
      </LoginWrapper>
    );
  }
}
