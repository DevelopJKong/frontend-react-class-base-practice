import { Component } from "react";
import { Link } from "react-router-dom";
import { countAtom, store, atomQuery } from "../atom/main.atom";

type LoginProps = object;

type LoginState = {
  atomCount: number;
  setStoreAtomCount: (count: number) => void;
  atomQuery: any;
};

export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      atomCount: store.get(countAtom),
      setStoreAtomCount: (count: number) => {
        store.set(countAtom, count);
      },
      atomQuery: store.get(atomQuery),
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
      <div>
        <h1>로그인</h1>
        <div>{this.state.atomCount}</div>
        <button
          type="button"
          onClick={() => {
            this.state.setStoreAtomCount(this.state.atomCount + 1);
            this.setState((state) => ({ atomCount: state.atomCount + 1 }));
          }}
        >
          클릭
        </button>
        <div>{JSON.stringify(this.state.atomQuery, null, 2)}</div>
        <Link to="/">홈</Link>
      </div>
    );
  }
}
