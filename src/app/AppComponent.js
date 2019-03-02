import React, { Component } from "react";
import { Modal, View, Text, SafeAreaView } from "react-native";
import Icon, { iconFamily } from "../common/icons";

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
          <View>
            <Text style={{ alignSelf: "center" }}>
              Add your custom component here
            </Text>
            <Icon family={iconFamily.materialCommunity} name="adobe" />
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
