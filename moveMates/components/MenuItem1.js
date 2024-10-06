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

const MenuItem1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() => navigation.navigate("ChallengesBike")}
    >
      <Image
        style={styles.iconlylightfilter}
        contentFit="cover"
        source={require("../assets/iconlylightfilter.png")}
      />
      <Text style={styles.challenges}>Challenges</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconlylightfilter: {
    width: 24,
    height: 24,
  },
  challenges: {
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

export default MenuItem1;
