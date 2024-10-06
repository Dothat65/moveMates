import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Walking = ({ style }) => {
  return (
    <View style={[styles.walking, style]}>
      <Text style={styles.walking1}>Walking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  walking1: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
  walking: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorSeagreen,
    width: 153,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default Walking;
