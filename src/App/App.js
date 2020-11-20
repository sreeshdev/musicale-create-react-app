import React from "react";
import { store } from "../_helpers";
import { Provider } from "react-redux";
import { history } from "../_helpers";
import AppRouter from "./router";
import "./App.scss";
import SideBar from "../components/sideBar";
import Header from "../components/header";

const App = ({}) => (
  <Provider store={store}>
    <Header history={history} />
    <SideBar />
    {/* <MainContent /> */}
    <AppRouter history={history} />
  </Provider>
);

export default App;
