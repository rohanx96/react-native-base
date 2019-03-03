import React, { Component, Fragment } from "react";
import { Text, Image, View, TouchableOpacity, Linking } from "react-native";
import { DrawerActions, createDrawerNavigator } from "react-navigation";
import Icon from "../common/icons";
import TextStyles from "../common/styles/TextStyles";
import { goToScreen } from "./NavigationAction";
import Dimensions, { getScaledDimension } from "../common/styles/Dimensions";
import HomeComponent from "../home/HomeComponent";

class Drawermenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.drawerItems = [
      {
        title: "Tour",
        onPress: () => goToScreen("Onboarding"),
        // image: require("../src/tour.png"),
        iconName: "web",
        iconFamily: "MaterialCommunityIcons",
        isIcon: true
      },
      {
        title: "Settings",
        onPress: () => goToScreen("SettingScreen"),
        iconName: "settings",
        iconFamily: "MaterialIcons",
        isIcon: true
      },
      {
        title: "About",
        onPress: () => goToScreen("AboutScreen"),
        iconName: "info-outline",
        iconFamily: "MaterialIcons",
        isIcon: true
      },
      {
        title: "Privacy Policy",
        onPress: () => {
          Linking.openURL("");
        },
        iconName: "lock-open",
        iconFamily: "MaterialIcons",
        isIcon: true
      },
      {
        title: "Terms & Conditions",
        onPress: () => {
          Linking.openURL("");
        },
        iconName: "chrome-reader-mode",
        iconFamily: "MaterialIcons",
        isIcon: true
      },
      {
        title: "Support",
        onPress: () => {
          Linking.openURL("");
        },
        iconName: "headset-mic",
        iconFamily: "MaterialIcons",
        isIcon: true
      },
      // {
      //   title: "Rate Us",
      //   onPress: () => {},
      //   iconName: "star-o",
      //   iconFamily: "FontAwesome",
      //   isIcon: true
      // },
      {
        title: "Logout",
        onPress: () => {},
        iconName: "logout",
        iconFamily: "MaterialCommunityIcons",
        isIcon: true
      }
    ];
  }

  componentDidMount() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  navigateToScreen = route => () => {
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    goToScreen(route);
  };

  render() {
    return (
      <Fragment>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: Dimensions.ms24
            }}
          >
            <Image
              source={{}}
              style={{
                height: getScaledDimension(60),
                width: getScaledDimension(60),
                borderRadius: getScaledDimension(30),
                resizeMode: "contain"
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                marginLeft: Dimensions.ms12,
                fontSize: Dimensions.ms16,
                fontWeight: "bold"
              }}
            >
              {"APP NAME"}
            </Text>
          </View>
        </View>
        <View style={{ flex: 3.5 }}>
          {this.drawerItems.map(item => (
            <TouchableOpacity
              style={{
                padding: Dimensions.ms12,
                borderColor: "#0003",
                borderTopWidth: 0.5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
              onPress={item.onPress}
            >
              {item.isIcon ? (
                <Icon
                  name={item.iconName}
                  size={Dimensions.ms24}
                  family={item.iconFamily}
                />
              ) : (
                <Image
                  source={item.image}
                  style={{
                    height: Dimensions.ms24,
                    width: Dimensions.ms24,
                    resizeMode: "contain"
                  }}
                />
              )}
              <Text
                style={[
                  TextStyles.h3,
                  { marginLeft: Dimensions.ms12, fontSize: Dimensions.ms16 }
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Fragment>
    );
  }
}

export default createDrawerNavigator(
  {
    Home: HomeComponent
  },
  {
    drawerWidth: getScaledDimension(250),
    drawerPosition: "left",
    contentComponent: Drawermenu,
    initialRouteName: "Home",
    unmountInactiveRoutes: true
  }
);
