import React, { Component } from "react";
import { Modal, View, Text, SafeAreaView, Dimensions } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

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
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              padding: 24
            }}
          >
            <View
              style={{
                width: moderateScale(200),
                height: moderateScale(200),
                padding: moderateScale(24),
                borderWidth: 2,
                borderColor: "#ccc",
                justifyContent: "center"
              }}
              onLayout={event => {
                console.log("--------- DIMENSIONS ----------");
                console.log(
                  `SCREEN WIDTH: ${
                    Dimensions.get("window").width
                  } || SCREEN HEIGHT: ${Dimensions.get("window").height}`
                );
                console.log(`SCREEN SCALE: ${Dimensions.get("window").scale}`);
                console.log(
                  `CONVERSION: 200 => ${event.nativeEvent.layout.height}`
                );
                console.log(`CONVERSION: 200 => ${scale(200)}`);
                console.log(`CONVERSION: 22 => ${moderateScale(22)}`);
              }}
            >
              <Text style={{ fontSize: moderateScale(22) }}>
                {"Responsive\nLorem Ipsum"}
              </Text>
              <View
                style={{
                  width: moderateScale(48),
                  height: moderateScale(48),
                  marginTop: moderateScale(48),
                  backgroundColor: "#ccc"
                }}
              />
            </View>
            <View
              style={{
                width: 200,
                height: 200,
                marginTop: 44,
                borderWidth: 2,
                borderColor: "#ccc",
                padding: 24,
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 22 }}>{"Normal\nLorem Ipsum"}</Text>
              <View
                style={{
                  width: 48,
                  height: 48,
                  marginTop: 48,
                  backgroundColor: "#ccc"
                }}
              />
            </View>
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
                  paddingHorizontal: 22,
                  justifyContent: "flex-end",
                  backgroundColor: "#33333333"
                }}
              >
                {this.props.renderBottomsheet()}
              </View>
            </Modal>
          </View>
        </SafeAreaView>
      );
    }
    return <View style={{ flex: 1 }} />;
  }
}
