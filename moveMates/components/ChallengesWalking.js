import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {
  FontFamily,
  Color,
  Padding,
  Border,
  FontSize,
  Gap,
} from "../GlobalStyles";

const ChallengesWalking = () => {
  return (
    <View style={styles.challengesWalking}>
      <StatusBar />
      <View style={styles.searchPageBody}>
        <View style={[styles.travelSelection, styles.bottomTabShadowBox]}>
          <View style={styles.bikingSection} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group4: {
    backgroundColor: "#fff",
  },
  iconLayout1: {
    width: 32,
    height: 32,
  },
  challengesTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  bottomTabShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.colorWhite,
  },
  bikingLayout: {
    width: 153,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_13xl,
    paddingHorizontal: Padding.p_base,
  },
  walkingFlexBox: {
    backgroundColor: Color.colorSeagreen,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  walking1Typo: {
    color: Color.colorWhite,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  listSectionSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  randTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  minTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 8,
    width: 8,
  },
  searchTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  bottomLayout: {
    width: 61,
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  bikingSection: {
    backgroundColor: Color.colorGhostwhite,
    width: 313,
    padding: Padding.p_9xs,
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    height: 44,
  },
  travelSelection: {
    borderRadius: Border.br_xs,
    width: 341,
    padding: Padding.p_sm,
    gap: Gap.gap_3xl,
  },
  searchPageBody: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: 375,
    backgroundColor: Color.colorLavender,
  },
  challengesWalking: {
    backgroundColor: Color.colorLavender,
  },
});

export default ChallengesWalking;
