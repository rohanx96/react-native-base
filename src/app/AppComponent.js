//@flow
import React, { Component } from "react";
import { Modal, View, Text, SafeAreaView } from "react-native";

const defaultState = {
  isInitialised: false
};

export default class AppComponent extends Component<{}, {}> {
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
            <Modal
              animationType="slide"
              transparent={true}
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
    } else {
      return <View style={{ flex: 1 }} />;
    }
  }
}
