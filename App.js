import { useScreens } from "react-native-screens";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./src/common/Store";
import AppContainer from "./src/app/AppContainer";

useScreens();
export default class App extends Component {
  constructor() {
    super();
    console.disableYellowBox = true;
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
