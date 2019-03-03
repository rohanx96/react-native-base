import React, { Component, Fragment } from "react";
import {
  Modal,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";
import NavigationComponent from "../navigation/NavigationComponent";
import TextStyles from "../common/styles/TextStyles";
import ThemeStyle from "../common/styles/ThemeStyle";
import Dimensions, { getScaledDimension } from "../common/styles/Dimensions";

const defaultState = {
  isInitialised: false
};

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    if (this.props.isRehydrated) {
      SplashScreen.hide();
      return (
        <Fragment>
          <SafeAreaView
            style={{ flex: 0, backgroundColor: this.props.topSafeAreaView }}
          />
          <SafeAreaView
            style={{ flex: 1, backgroundColor: this.props.bottomSafeAreaView }}
          >
            <NavigationComponent />
            <Modal
              animationType="slide"
              transparent
              visible={this.props.isBSOpen}
              onRequestClose={() => {
                if (this.props.isBSBackClose) {
                  this.props.closeBottomSheet();
                }
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  backgroundColor: "#33333333"
                }}
              >
                {this.props.renderBottomsheet()}
              </View>
            </Modal>
            <Modal
              transparent
              animationType="none"
              visible={this.props.loading}
              onRequestClose={() => {
                console.log("close modal");
                // goBackTo();
                // this.props.setLoading(false);
              }}
            >
              <StatusBar translucent={false} backgroundColor="#000000aa" />
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#000000aa"
                }}
              >
                <View
                  style={{
                    borderRadius: Dimensions.ms8,
                    backgroundColor: "#fff",
                    padding: Dimensions.ms16,
                    height: getScaledDimension(132),
                    width: getScaledDimension(132),
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ActivityIndicator
                    animating={this.props.loading}
                    color={ThemeStyle.mainColor}
                    size="large"
                  />
                  <Text
                    style={[
                      TextStyles.h3,
                      { textAlign: "center", fontSize: Dimensions.ms14 }
                    ]}
                  >
                    {"Loading...\nPlease Wait"}
                  </Text>
                </View>
              </View>
            </Modal>
          </SafeAreaView>
          <FlashMessage position="top" />
        </Fragment>
      );
    }
    return null;
  }
}
