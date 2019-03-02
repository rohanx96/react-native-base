import React, { Component } from "react";
import { Modal, View, Text, SafeAreaView } from "react-native";
import Icon, { iconFamily } from "../common/icons";
import TextStyles from "../common/styles/TextStyles";

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
