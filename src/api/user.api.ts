import * as Api from "backend-nestia-base-nest-cafesmallhouse/lib/api/functional";
import { loginStorageAtom, store } from "../atom/main.atom";

interface IFetchLogin {
  email: string;
  password: string;
}

export const fetchLogin = async ({ email, password }: IFetchLogin) => {
  const response = await Api.users.login(
    {
      host: "http://127.0.0.1:8000",
    },
    {
      email,
      password,
    }
  );

  if (response.message.statusCode !== 200)
    throw new Error(response.message.text);

  if (typeof response.data === "object" && response.data.token) {
    store.set(loginStorageAtom, {
      email,
      token: response.data.token,
    });

    window.location.href = "/";
  }
};
