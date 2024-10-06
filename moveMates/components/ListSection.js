import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
} from "../GlobalStyles";

const ListSection = ({ style }) => {
  return (
    <View style={[styles.listSection, style, styles.listSectionSpaceBlock]}>
      <View style={styles.listItems}>
        <View style={styles.challengeCardHolder}>
          <View style={styles.challengeCardShadowBox}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={[styles.groupParent, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/group-46.png")}
                />
                <Text style={[styles.rand, styles.minClr]}>RAND</Text>
              </View>
              <View
                style={[
                  styles.fluenttimer24RegularParent,
                  styles.parentFlexBox,
                ]}
              >
                <Image
                  style={styles.fluenttimer24RegularIcon}
                  contentFit="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.min, styles.minTypo]}>40min</Text>
              </View>
            </View>
            <View style={[styles.group13Parent, styles.frameSpaceBlock]}>
              <View style={styles.group13}>
                <Text style={styles.rand1}>Rand</Text>
                <Text style={[styles.philadelphia, styles.philadelphiaTypo]}>
                  Philadelphia
                </Text>
              </View>
              <View style={[styles.line2Parent, styles.frameParentFlexBox]}>
                <Image
                  style={[styles.line2Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.ovalIconLayout]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
                <Image
                  style={styles.iconFlight}
                  contentFit="cover"
                  source={require("../assets/icon--flight.png")}
                />
                <Image
                  style={[styles.ovalIcon1, styles.ovalIconLayout]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
              </View>
              <View style={styles.group131}>
                <Text style={styles.rand1}>Rand</Text>
                <Text style={[styles.philadelphia, styles.philadelphiaTypo]}>
                  Philadelphia
                </Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
                <View style={styles.difficultyEasyWrapper}>
                  <Text
                    style={[styles.difficultyEasy, styles.philadelphiaTypo]}
                  >
                    Difficulty Easy
                  </Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary, styles.parentFlexBox]}>
                <Text style={styles.viewDetails}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.challengeCardHolder}>
          <View style={styles.challengeCardShadowBox}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={[styles.groupParent, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/group-46.png")}
                />
                <Text style={[styles.rand, styles.minClr]}>RAND</Text>
              </View>
              <View
                style={[
                  styles.fluenttimer24RegularParent,
                  styles.parentFlexBox,
                ]}
              >
                <Image
                  style={styles.fluenttimer24RegularIcon}
                  contentFit="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.min, styles.minTypo]}>40min</Text>
              </View>
            </View>
            <View style={[styles.group13Parent, styles.frameSpaceBlock]}>
              <View style={styles.group13}>
                <Text style={styles.rand1}>Rand</Text>
                <Text style={[styles.philadelphia, styles.philadelphiaTypo]}>
                  Philadelphia
                </Text>
              </View>
              <View style={[styles.line2Parent, styles.frameParentFlexBox]}>
                <Image
                  style={[styles.line2Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.ovalIconLayout]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
                <Image
                  style={styles.iconFlight}
                  contentFit="cover"
                  source={require("../assets/icon--flight.png")}
                />
                <Image
                  style={[styles.ovalIcon1, styles.ovalIconLayout]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
              </View>
              <View style={styles.group131}>
                <Text style={styles.rand1}>Rand</Text>
                <Text style={[styles.philadelphia, styles.philadelphiaTypo]}>
                  Philadelphia
                </Text>
              </View>
            </View>
            <Image
              style={[styles.line3Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
                <View style={styles.difficultyEasyWrapper}>
                  <Text
                    style={[styles.difficultyEasy, styles.philadelphiaTypo]}
                  >
                    Difficulty Easy
                  </Text>
                </View>
              </View>
              <View style={[styles.buttonPrimary, styles.parentFlexBox]}>
                <Text style={styles.viewDetails}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listSectionSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  minClr: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  minTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  philadelphiaTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 8,
    width: 8,
  },
  frameChild: {
    width: 48,
    height: 32,
  },
  rand: {
    textAlign: "left",
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  groupParent: {
    gap: Gap.gap_sm,
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  min: {
    textAlign: "right",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  fluenttimer24RegularParent: {
    gap: Gap.gap_3xs,
  },
  frameParent: {
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_xs,
    alignSelf: "stretch",
  },
  rand1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorSeagreen,
    textAlign: "left",
  },
  philadelphia: {
    fontSize: FontSize.size_sm,
  },
  group13: {
    gap: Gap.gap_3xs,
  },
  line2Icon: {
    position: "absolute",
    marginTop: -0.3,
    top: "50%",
    right: 8,
    left: 9,
    height: 1,
    zIndex: 0,
  },
  ovalIcon: {
    zIndex: 1,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon1: {
    zIndex: 3,
  },
  line2Parent: {
    flex: 1,
  },
  group131: {
    alignItems: "flex-end",
    gap: Gap.gap_3xs,
  },
  group13Parent: {
    paddingVertical: 0,
    gap: Gap.gap_2xl,
    alignItems: "center",
    flexDirection: "row",
  },
  line3Icon: {
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  difficultyEasy: {
    width: 85,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
  },
  difficultyEasyWrapper: {
    flexDirection: "row",
  },
  frameWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_7xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  viewDetails: {
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 120,
    fontSize: FontSize.size_sm,
  },
  buttonPrimary: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorSeagreen,
    justifyContent: "center",
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  frameGroup: {
    paddingBottom: Padding.p_xs,
    gap: Gap.gap_md,
  },
  challengeCardShadowBox: {
    gap: Gap.gap_lg,
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  challengeCardHolder: {
    paddingBottom: Padding.p_4xs,
    alignSelf: "stretch",
  },
  listItems: {
    alignSelf: "stretch",
  },
  listSection: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 0,
    flex: 1,
  },
});

export default ListSection;
