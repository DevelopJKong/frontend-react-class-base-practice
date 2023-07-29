import * as Api from "backend-nestia-base-nest-cafesmallhouse/lib/api/functional";

export const fetchLogin = async () => {
  const response = await Api.users.login(
    {
      host: "http://127.0.0.1:8000",
    },
    {
      email: "jeongbin@naver.com",
      password: "Aasd1234!@",
    }
  );
  console.log(response);
};
