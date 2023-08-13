import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../shared/style/main.styled';

type MainProps = Record<string, unknown>;

type MainState = Record<string, unknown>;

export default class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Link to='/login'>로그인</Link>
      </Container>
    );
  }
}
