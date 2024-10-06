import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListSection1 from "../../components/ListSection1";
import ListSection from "../../components/ListSection";
import Biking from "../../components/Biking";
import Walking1 from "../../components/Walking1";
import Walking from "../../components/Walking";
import Biking1 from "../../components/Biking1";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Gap,
  Border,
} from "../../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const ChallengesBike = () => {
  return (
    <SafeAreaView style={[styles.challengesBike, styles.challengesBikeBg]}>
      <StatusBar />
      <View style={[styles.searchPageBody, styles.challengesBikeBg]}>
        <View style={[styles.travelSelection, styles.bottomTabShadowBox]}>
          <TopTab.Navigator
            style={styles.waySelectionToptabs}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([<Biking />, <Walking />]);
              const [normalItems] = React.useState([<Walking1 />, <Biking1 />]);
              const activeIndex = state.index;
              return (
                <View style={styles.topTabBarStyle}>
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          >
            <TopTab.Screen name="List section" component={ListSection1} />
            <TopTab.Screen name="List section1" component={ListSection} />
          </TopTab.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  group4: {
    backgroundColor: "#fff",
  },
  waySelectionToptabs: {
    width: "100%",
  },
  topTabBarStyle: {
    borderRadius: 32,
    backgroundColor: "#f4f5f9",
    width: 313,
    height: 44,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 4,
    minHeight: 44,
    zIndex: 1,
  },
  challengesBikeBg: {
    backgroundColor: Color.colorLavender,
    flex: 1,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  challengesClr: {
    color: Color.black,
    textAlign: "left",
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
  },
  listSectionSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  groupChildLayout: {
    width: 48,
    height: 32,
  },
  cityHallTypo: {
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
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  bottomLayout: {
    width: 61,
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  travelSelection: {
    borderRadius: Border.br_xs,
    width: 341,
    padding: Padding.p_sm,
    gap: Gap.gap_3xl,
    flex: 1,
  },
  searchPageBody: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: 375,
  },
  challengesBike: {
    width: "100%",
  },
});

export default ChallengesBike;