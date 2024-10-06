import React, { useState } from "react";
import MenuItem from "./MenuItem";
import DrawerMenuItems from "./DrawerMenuItems";
import MenuItem1 from "./MenuItem1";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const DrawerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([<MenuItem />, <MenuItem1 />]);
  const [drawerItemsActive] = useState([<DrawerMenuItems />, <MenuItem1 />]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <View style={styles.drawerMenu}>
      <View style={styles.menu}>
        <View style={styles.profile}>
          <View style={styles.group3Wrapper}>
            <Image
              style={styles.group3Icon}
              contentFit="cover"
              source={require("../assets/group32.png")}
            />
          </View>
          <View>
            <Text style={[styles.hello, styles.helloClr]}>Hello</Text>
            <Text style={styles.aaronDon}>Aaron Don</Text>
          </View>
        </View>
        <View style={styles.menuChild} />
        {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
      </View>
      <View style={styles.group3Wrapper}>
        <Text style={[styles.appVersion10, styles.profile1Layout]}>
          App version 1.0
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloClr: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  profile1Layout: {
    lineHeight: 24,
    textAlign: "left",
  },
  iconlylightprofileLayout: {
    height: 24,
    width: 24,
  },
  group3Icon: {
    width: 49,
    height: 49,
  },
  group3Wrapper: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
  },
  aaronDon: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    textAlign: "left",
  },
  profile: {
    alignItems: "center",
    gap: 12,
    flexDirection: "row",
  },
  menuChild: {
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  menu: {
    gap: Gap.gap_3xl,
    alignSelf: "stretch",
  },
  appVersion10: {
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  drawerMenu: {
    backgroundColor: Color.colorLavender,
    width: 320,
    height: 812,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default DrawerMenu;
