import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Color, Padding } from "../GlobalStyles";

const Header = ({ style }) => {
  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Image
          style={styles.hamburgerIcon}
          contentFit="cover"
          source={require("../assets/hamburger-icon.png")}
        />
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <View style={styles.profile}>
          <Image
            style={styles.group3Icon}
            contentFit="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval1.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.colorWhite,
  },
  hamburgerIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  logoIcon: {
    width: 231,
    height: 103,
  },
  group3Icon: {
    width: 36,
    height: 36,
    zIndex: 0,
  },
  ovalIcon: {
    position: "absolute",
    top: 0,
    left: 26,
    width: 10,
    height: 10,
    zIndex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  view: {
    alignSelf: "stretch",
    height: 94,
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default Header;
