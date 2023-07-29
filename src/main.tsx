import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "jotai";
import { store } from "./atom/main.atom.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./page/main.page.tsx";
import Login from "./page/login.page.tsx";
import Root from "./page/root.page.tsx";

const logoutRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={logoutRouter} />
    </Provider>
  </React.StrictMode>
);
