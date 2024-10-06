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

const DrawerMenuItems = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.drawerMenuItems, style]}
      onPress={() => navigation.navigate("Profile")}
    >
      {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
      {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
      <View style={styles.menuItem}>
        <Image
          style={[styles.ionmailOutlineIcon, styles.iconlylightprofileLayout]}
          contentFit="cover"
          source={require("../assets/ionmailoutline.png")}
        />
        <Text style={styles.profile}>Get Help</Text>
      </View>
      <View style={styles.menuItem}>
        <Image
          style={[styles.ionmailOutlineIcon, styles.iconlylightprofileLayout]}
          contentFit="cover"
          source={require("../assets/rate.png")}
        />
        <Text style={styles.profile}>Favorite Rides</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconlylightprofileLayout: {
    height: 24,
    width: 24,
  },
  ionmailOutlineIcon: {
    overflow: "hidden",
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
  drawerMenuItems: {
    gap: Gap.gap_4xl,
  },
});

export default DrawerMenuItems;
