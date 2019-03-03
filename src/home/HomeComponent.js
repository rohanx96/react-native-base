import React, { Component } from "react";
import { View, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import Icon, { iconFamily } from "../common/icons";
import Button from "../components/Button";
import { errorMessage } from "../utils";
import TextStyles from "../common/styles/TextStyles";

export default class HomeComponent extends Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <View style={{ padding: 24 }}>
        <Text style={[TextStyles.h1, { alignSelf: "center" }]}>Header 1</Text>
        <Text style={[TextStyles.h2, { alignSelf: "center" }]}>Header 2</Text>
        <Text style={[TextStyles.h3, { alignSelf: "center" }]}>Header 3</Text>
        <Text style={[TextStyles.body, { alignSelf: "center" }]}>
          Lorem ipsum is a placeholder text. Placeholder text is used to display
          how real text would look
        </Text>
        <Icon family={iconFamily.materialCommunity} name="adobe" />
        <Button
          name="Show Message"
          onPress={() => {
            showMessage(errorMessage());
          }}
        />
      </View>
    );
  }
}
