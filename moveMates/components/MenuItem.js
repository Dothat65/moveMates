import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const MenuItem = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        style={styles.iconlylightprofile}
        contentFit="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Text style={styles.profile}>Profile</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconlylightprofile: {
    width: 24,
    height: 24,
  },
  profile: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    textAlign: "left",
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
    gap: Gap.gap_xl,
  },
});

export default MenuItem;
