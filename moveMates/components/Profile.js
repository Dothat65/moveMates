import * as React from "react";
import {
  ScrollView,
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profileIcon}
      resizeMode="cover"
      source={require("../assets/profile.png")}
    >
      <ScrollView
        style={styles.profileSection}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.profileSectionScrollViewContent}
      >
        <View style={[styles.header, styles.headerSpaceBlock]}>
          <Pressable
            style={[styles.iconBackWrapper, styles.wrapperShadowBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              contentFit="cover"
              source={require("../assets/icon--back1.png")}
            />
          </Pressable>
          <View
            style={[styles.fluentedit48RegularWrapper, styles.wrapperShadowBox]}
          >
            <Image
              style={styles.iconBack}
              contentFit="cover"
              source={require("../assets/fluentedit48regular.png")}
            />
          </View>
        </View>
        <View style={styles.profileBody}>
          <View style={[styles.profileDrawer, styles.bottomTabShadowBox]}>
            <View style={styles.profileDetails}>
              <View style={styles.nameParticulars}>
                <View style={styles.aaronDonParent}>
                  <Text style={styles.aaronDon}>Aaron Don</Text>
                  <Text style={[styles.nycNewYork, styles.iLikeToTypo]}>
                    NYC, New York
                  </Text>
                </View>
              </View>
              <Text style={[styles.iLikeTo, styles.iLikeToClr]}>
                I like to ride my bike and run
              </Text>
              <View style={styles.profileDetailsChild} />
              <View style={styles.profileOptions}>
                <View style={[styles.profileOption, styles.bottomTabFlexBox]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.humbleiconsuserAsking}
                      contentFit="cover"
                      source={require("../assets/humbleiconsuserasking.png")}
                    />
                  </View>
                  <View style={styles.bottomTabFlexBox}>
                    <Text style={[styles.totalMiles, styles.iLikeToClr]}>
                      Total Miles
                    </Text>
                  </View>
                </View>
                <View style={[styles.profileOption, styles.bottomTabFlexBox]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      contentFit="cover"
                      source={require("../assets/claritysettingsline.png")}
                    />
                  </View>
                  <Text style={[styles.totalMiles, styles.iLikeToClr]}>
                    Settings
                  </Text>
                </View>
                <View style={[styles.profileOption, styles.bottomTabFlexBox]}>
                  <View style={styles.rate}>
                    <Image
                      style={styles.iconBack}
                      contentFit="cover"
                      source={require("../assets/majesticonslogouthalfcircleline.png")}
                    />
                  </View>
                  <Text style={[styles.totalMiles, styles.iLikeToClr]}>
                    Logout
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImage}>
            <Image
              style={styles.group3Icon}
              contentFit="cover"
              source={require("../assets/group31.png")}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  profileSectionScrollViewContent: {
    flexDirection: "column",
    paddingTop: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 50,
  },
  headerSpaceBlock: {
    padding: Padding.p_base,
    justifyContent: "space-between",
  },
  wrapperShadowBox: {
    justifyContent: "center",
    borderRadius: Border.br_5xl,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    padding: Padding.p_7xs,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "row",
  },
  bottomTabShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignSelf: "stretch",
  },
  iLikeToTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  iLikeToClr: {
    color: Color.black,
    lineHeight: 24,
    textAlign: "left",
  },
  bottomTabFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
  },
  bottomLayout: {
    gap: Gap.gap_lg,
    width: 61,
    alignItems: "center",
  },
  iconBack: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconBackWrapper: {
    padding: Padding.p_7xs,
  },
  fluentedit48RegularWrapper: {
    padding: Padding.p_7xs,
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  aaronDon: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorSeagreen,
  },
  nycNewYork: {
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  aaronDonParent: {
    gap: 2,
  },
  nameParticulars: {
    alignSelf: "stretch",
  },
  iLikeTo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  profileDetailsChild: {
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_200,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  humbleiconsuserAsking: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  rate: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorAliceblue_100,
    padding: Padding.p_7xs,
  },
  totalMiles: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  profileOption: {
    gap: Gap.gap_xl,
  },
  profileOptions: {
    gap: Gap.gap_3xl,
    alignSelf: "stretch",
  },
  profileDetails: {
    gap: Gap.gap_xl,
    flex: 1,
  },
  profileDrawer: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 20,
    elevation: 20,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 43,
    zIndex: 0,
    flexDirection: "row",
  },
  group3Icon: {
    width: 84,
    height: 84,
  },
  profileImage: {
    position: "absolute",
    top: 0,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
  },
  profileBody: {
    paddingTop: 42,
    alignSelf: "stretch",
  },
  profileSection: {
    flex: 1,
    alignSelf: "stretch",
  },
  profileIcon: {
    width: 375,
  },
});

export default Profile;
