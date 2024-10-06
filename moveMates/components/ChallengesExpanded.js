import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const ChallengesExpanded = () => {
  return (
    <View style={styles.challengesExpanded}>
      <StatusBar />
      <ScrollView
        style={styles.challengesBody}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.challengesBodyScrollViewContent}
      >
        <View style={[styles.challengesCard, styles.bottomTabShadowBox]}>
          <Image
            style={[styles.mapIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/map.png")}
          />
          <View style={styles.challengesDetails}>
            <View style={[styles.group13Parent, styles.parentFlexBox]}>
              <View style={styles.group13}>
                <Text style={styles.rand}>Rand</Text>
                <Text style={[styles.philadelphia, styles.philadelphiaTypo]}>
                  Philadelphia
                </Text>
              </View>
              <View style={[styles.line2Parent, styles.viewFlexBox]}>
                <Image
                  style={[styles.line2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/line22.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.ovalIconLayout]}
                  contentFit="cover"
                  source={require("../assets/oval2.png")}
                />
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/icon--flight.png")}
                />
                <Image
                  style={[styles.ovalIcon1, styles.ovalIconLayout]}
                  contentFit="cover"
                  source={require("../assets/oval2.png")}
                />
              </View>
              <View style={styles.group131}>
                <Text style={styles.rand}>Rand</Text>
                <Text style={[styles.philadelphia, styles.philadelphiaTypo]}>
                  Philadelphia
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={[styles.groupParent, styles.parentFlexBox]}>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Image
                    style={styles.image2Icon}
                    contentFit="cover"
                    source={require("../assets/image-21.png")}
                  />
                </View>
                <Text style={[styles.rand2, styles.minLayout]}>Rand</Text>
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
                <Text style={[styles.min, styles.minLayout]}>40min</Text>
              </View>
            </View>
            <Text style={[styles.seeOtherChallenges, styles.philadelphiaTypo]}>
              See Other Challenges...
            </Text>
            <View
              style={[styles.challengesDetailsChild, styles.frameParentFlexBox]}
            />
          </View>
          <Pressable style={[styles.editButton, styles.editButtonSpaceBlock]}>
            <Button
              style={[styles.buttonPrimary, styles.bookingsFlexBox]}
              disabled={false}
              uppercase={true}
              mode="contained"
              labelStyle={styles.buttonPrimaryBtn}
              contentStyle={styles.buttonPrimaryBtn1}
            >
              BEGIN
            </Button>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  buttonPrimaryBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  buttonPrimaryBtn1: {
    paddingHorizontal: 104,
    paddingVertical: 10,
    borderRadius: 5,
  },
  challengesBodyScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 31,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 32,
    width: 32,
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
    alignSelf: "stretch",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  philadelphiaTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  ovalIconLayout: {
    height: 8,
    width: 8,
  },
  frameParentFlexBox: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_10xs,
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupChildLayout: {
    width: 48,
    height: 32,
  },
  minLayout: {
    lineHeight: 16,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  editButtonSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  bookingsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
  },
  bottomLayout: {
    width: 61,
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  mapIcon: {
    height: 247,
    width: "100%",
    alignSelf: "stretch",
  },
  rand: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorSeagreen,
    textAlign: "left",
  },
  philadelphia: {
    color: Color.black,
  },
  group13: {
    gap: Gap.gap_2xs,
  },
  line2Icon: {
    marginTop: -0.3,
    top: "50%",
    right: 8,
    left: 9,
    zIndex: 0,
    height: 1,
    position: "absolute",
  },
  ovalIcon: {
    zIndex: 1,
  },
  icon1: {
    height: 41,
    zIndex: 2,
    width: 41,
  },
  ovalIcon1: {
    zIndex: 3,
  },
  line2Parent: {
    flex: 1,
  },
  group131: {
    alignItems: "flex-end",
    gap: Gap.gap_2xs,
  },
  group13Parent: {
    gap: Gap.gap_2xl,
    alignSelf: "stretch",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    position: "absolute",
  },
  image2Icon: {
    top: 4,
    left: 4,
    height: 25,
    width: 41,
    position: "absolute",
  },
  rand2: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "left",
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
    fontSize: FontSize.size_xs,
    textAlign: "right",
    color: Color.colorLightslategray,
  },
  fluenttimer24RegularParent: {
    justifyContent: "flex-end",
    gap: Gap.gap_3xs,
  },
  frameParent: {
    paddingVertical: 8,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  seeOtherChallenges: {
    color: "#1262ae",
  },
  challengesDetailsChild: {
    width: 323,
    height: 1,
  },
  challengesDetails: {
    paddingVertical: 0,
    gap: Gap.gap_lg,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buttonPrimary: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  editButton: {
    paddingBottom: Padding.p_xs,
  },
  challengesCard: {
    borderRadius: Border.br_5xs,
    gap: 17,
    overflow: "hidden",
  },
  challengesBody: {
    flex: 1,
    alignSelf: "stretch",
  },
  challengesExpanded: {
    backgroundColor: Color.colorLavender,
    width: 375,
  },
});

export default ChallengesExpanded;
