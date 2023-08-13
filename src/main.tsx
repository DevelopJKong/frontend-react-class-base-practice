import React from 'react';
import './style/index.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { loginStorageAtom, store } from './atom/main.atom.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './page/main.page.tsx';
import Login from './page/login.page.tsx';
import Root from './page/root.page.tsx';
import Content from './page/content.page.tsx';
import * as _ from 'lodash';

const logoutRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const loginRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Content />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={_.isEmpty(store.get(loginStorageAtom)?.token) ? logoutRouter : loginRouter} />
    </Provider>
  </React.StrictMode>,
);
