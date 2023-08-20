import { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class Root extends Component {
  render() {
    return <Outlet />;
  }
}
