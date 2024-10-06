import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Biking = ({ style }) => {
  return (
    <View style={[styles.biking, style]}>
      <Text style={styles.biking1}>Biking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  biking1: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    textAlign: "center",
    width: 64,
  },
  biking: {
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

export default Biking;
