import { Component } from "react";
import { loginStorageAtom, store } from "../atom/main.atom";

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <h1>컨텐츠</h1>
        <button
          type="button"
          onClick={() => {
            store.set(loginStorageAtom, { email: "", token: "" });
            window.location.href = "/";
          }}
        >
          로그이웃
        </button>
      </div>
    );
  }
}
