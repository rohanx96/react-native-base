import React from "react";
import { Text, StyleSheet, TouchableHighlight, Platform } from "react-native";
import textStyle from "../common/styles/TextStyles";
import ThemeStyle from "../common/styles/ThemeStyle";
import Dimensions, { getScaledDimension } from "../common/styles/Dimensions";

const Button = props => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={`${ThemeStyle.accentColor}66`}
      onPress={props.onPress}
      style={[styles.touches, props.style]}
    >
      <Text style={[textStyle.callToAction, styles.text, props.textStyle]}>
        {props.name}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  touches: {
    backgroundColor: ThemeStyle.accentColor,
    borderRadius: Dimensions.ms32,
    minWidth: getScaledDimension(128),
    paddingVertical: Dimensions.ms16,
    paddingHorizontal: Dimensions.ms24
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: Platform.OS === "ios" ? 15 : 14
  }
});
