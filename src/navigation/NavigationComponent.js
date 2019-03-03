import React, { Component } from "react";
import { BackHandler } from "react-native";
import AppNavigator from "./AppNavigator";
import { setNavigator, resetTo } from "./NavigationAction";

export default class NavigationComponent extends Component<ComponentProps> {
  componentDidMount() {
    resetTo("Home");
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    console.log("on back", this.navigator);
    const {
      state: { nav }
    } = this.navigator;
    const currentRoute = nav.routes[nav.index];
    if (currentRoute.routeName === "Screen") {
      if (currentRoute.params.shouldResetToHome) {
        resetTo("Home");
        return true;
      }
    }
    if (this.props.isBSOpen) {
      return true;
    }
    if (nav.index === 0) {
      return false;
    }
    return false;
  };

  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          setNavigator(navigatorRef);
          this.navigator = navigatorRef;
        }}
      />
    );
  }
}
