import { StyleSheet } from "react-native";
import Dimensions from "./Dimensions";

export default StyleSheet.create({
  h1: {
    fontFamily: "Manrope-Semibold",
    fontSize: Dimensions.ms40,
    color: "#333"
  },
  h2: {
    fontFamily: "Manrope-Medium",
    fontSize: Dimensions.ms32,
    color: "#333"
  },
  h3: {
    fontFamily: "Manrope-Medium",
    fontSize: Dimensions.ms24,
    color: "#333"
  },
  h4: {
    fontFamily: "Manrope-Medium",
    fontSize: Dimensions.ms20,
    color: "#333"
  },
  callToAction: {
    fontFamily: "Manrope-Medium",
    fontSize: Dimensions.ms18,
    color: "#333"
  },
  body: {
    fontFamily: "Manrope-Regular",
    fontSize: Dimensions.ms16,
    color: "#333"
  },
  subTitle: {
    fontFamily: "Manrope-Regular",
    fontSize: Dimensions.ms14,
    color: "#333"
  },
  footnote: {
    fontFamily: "Manrope-Regular",
    fontSize: Dimensions.ms12,
    color: "#333"
  }
});

export const FONT_FAMILY = "Manrope-Regular";
