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
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon, { iconFamily } from "../common/icons";
import TextStyles from "../common/styles/TextStyles";
import ThemeStyle from "../common/styles/ThemeStyle";
import Button from "../components/Button";
import Dimensions, { getScaledDimension } from "../common/styles/Dimensions";
import { errorMessage } from "../utils";

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
            <View style={{ padding: 24 }}>
              <Text style={[TextStyles.h1, { alignSelf: "center" }]}>
                Header 1
              </Text>
              <Text style={[TextStyles.h2, { alignSelf: "center" }]}>
                Header 2
              </Text>
              <Text style={[TextStyles.h3, { alignSelf: "center" }]}>
                Header 3
              </Text>
              <Text style={[TextStyles.body, { alignSelf: "center" }]}>
                Lorem ipsum is a placeholder text. Placeholder text is used to
                display how real text would look
              </Text>
              <Icon family={iconFamily.materialCommunity} name="adobe" />
              <Button
                name="Show Message"
                onPress={() => {
                  showMessage(errorMessage());
                }}
              />
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
            </View>
          </SafeAreaView>
          <FlashMessage position="top" />
        </Fragment>
      );
    }
    return null;
  }
}
