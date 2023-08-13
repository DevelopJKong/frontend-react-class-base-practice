import { Component } from 'react';
import { countAtom, store } from '../atom/main.atom';
import { Link } from 'react-router-dom';
import { Container } from '../shared/style/main.styled';

type MainProps = Record<string, unknown>;

type MainState = {
  count: number;
  atomCount: number;
  setAtomCount: (count: number) => void;
};

export default class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      count: 0,
      atomCount: store.get(countAtom),
      setAtomCount: (count: number) => {
        store.set(countAtom, count);
      },
    };
  }

  onClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <Container>
        <button type='button' onClick={this.onClick}>
          클릭 {this.state.count}
        </button>
        <button
          type='button'
          onClick={() => {
            this.state.setAtomCount(this.state.atomCount + 1);
            this.setState((state) => ({ atomCount: state.atomCount + 1 }));
          }}
        >
          jotai atom {store.get(countAtom)}
        </button>
        <Link to='/login'>로그인</Link>
      </Container>
    );
  }
}
