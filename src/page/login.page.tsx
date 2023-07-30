import { Component } from "react";
import { Link } from "react-router-dom";
import { countAtom, store, atomQuery } from "../atom/main.atom";
import { fetchLogin } from "../api/user.api";

type LoginProps = object;

type LoginState = {
  atomCount: number;
  setStoreAtomCount: (count: number) => void;
  atomQuery: any;
  email: string;
  password: string;
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
      email: "",
      password: "",
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
      <div className="container">
        <h1>로그인</h1>
        <div>{this.state.atomCount}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <form>
            <input
              placeholder="email"
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                })
              }
            />
            <input
              placeholder="password"
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
            <div className="grid">
              <button
                type="button"
                onClick={() => {
                  this.state.setStoreAtomCount(this.state.atomCount + 1);
                  this.setState((state) => ({
                    atomCount: state.atomCount + 1,
                  }));
                }}
              >
                클릭
              </button>
              <button
                type="button"
                onClick={() =>
                  fetchLogin({
                    email: this.state.email,
                    password: this.state.password,
                  })
                }
              >
                API 호출
              </button>
            </div>
          </form>
        </div>
        <div>{JSON.stringify(this.state.atomQuery, null, 2)}</div>
        <Link to="/">홈</Link>
      </div>
    );
  }
}
