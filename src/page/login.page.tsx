import { Component } from 'react';
import { store, atomQuery } from '../atom/main.atom';
import { fetchLogin } from '../api/user.api';
import { styled } from 'styled-components';
import tw from 'twin.macro';

type LoginProps = Record<string, unknown>;

type LoginState = {
  atomQuery: any;
  email: string;
  password: string;
};

export const Wrapper = styled.div`
  ${tw`w-full h-[100vh] flex justify-center items-center flex-col`}
`;

export const LoginWrapper = styled.div`
  ${tw`w-[30%] h-[55%] flex justify-center items-center flex-col gap-24 ring-1 ring-gray-300 p-12 rounded-md`}
`;

export const Title = styled.h1`
  ${tw`text-xl`}
`;

export const Form = styled.form`
  ${tw`flex flex-col w-full h-full gap-7`}
`;

export const Input = styled.input.attrs((_props) => {
  return {
    className: 'focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-sm',
  };
})`
  ${tw`w-full h-10 ring-1 ring-gray-300 rounded-md px-2`}
`;

export const Button = styled.button.attrs((_props) => {
  return {
    className: 'hover:bg-blue-400',
  };
})`
  ${tw`flex w-full justify-center items-center p-2 bg-blue-500 rounded-md text-white text-sm`}
`;

export const Content = styled.div`
  ${tw`flex flex-col w-full`}
`;

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
      <Wrapper>
        <LoginWrapper>
          <Title>Cafe Small House ☕️</Title>
          <Content>
            <Form>
              <Input
                placeholder='이메일'
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
              <Input
                placeholder='비밀번호'
                onChange={(e) =>
                  this.setState({
                    password: e.target.value,
                  })
                }
              />
              <Button
                type='button'
                onClick={() =>
                  fetchLogin({
                    email: this.state.email,
                    password: this.state.password,
                  })
                }
              >
                로그인
              </Button>
            </Form>
          </Content>
        </LoginWrapper>
      </Wrapper>
    );
  }
}
