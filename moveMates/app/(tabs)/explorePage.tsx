import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {
  FontFamily,
  Padding,
  Color,
  FontSize,
  Gap,
  Border,
} from "../../GlobalStyles";

const Explore = () => {
  return (
    <SafeAreaView style={styles.explore}>
      <StatusBar />
      <ScrollView
        style={styles.exploreMainView}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.exploreMainViewContent}
      >
        <View style={styles.exploreContent}>
          <View style={styles.dailyChallenge}>
            <Text
              style={[styles.dailyChallenge1, styles.dailyTypo]}
            >{`Daily Challenge `}</Text>
            <View style={styles.frameParent}>
              <View style={[styles.group13Parent, styles.group13ParentFlexBox]}>
                <View style={styles.group13}>
                  <Text style={[styles.home, styles.dailyTypo]}>Home</Text>
                  <Text style={[styles.templePa, styles.templePaClr]}>
                    Temple, PA
                  </Text>
                </View>
                <View style={styles.line2Parent}>
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../../assets/line21.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/oval2.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    contentFit="cover"
                    source={require("../../assets/icon--flight.png")}
                  />
                  <Image
                    style={[styles.ovalIcon2, styles.ovalIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/oval2.png")}
                  />
                </View>
                <View style={styles.group131}>
                  <Text style={[styles.home, styles.dailyTypo]}>random</Text>
                  <Text style={[styles.templePa, styles.templePaClr]}>
                    random
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../../assets/line31.png")}
              />
              <View
                style={[
                  styles.completeYourDailyRideWrapper,
                  styles.group13ParentFlexBox,
                ]}
              >
                <Text style={[styles.completeYourDaily, styles.dailyTypo]}>
                  Complete your daily ride
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.dailyChallenge}>
            <View style={styles.header1}>
              <Text style={[styles.challenges1, styles.dailyTypo]}>
                Challenges
              </Text>
              <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
            </View>
            <ScrollView
              style={styles.challengesCardView}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.challengesCardViewContent}
            >
              <View style={styles.challengesCardRow}>
                <Pressable
                  style={[
                    styles.destinationCard,
                    styles.destinationCardShadowBox,
                  ]}
                >
                  <Image
                    style={styles.destinationIconLayout}
                    contentFit="cover"
                    source={require("../../assets/destination-image.png")}
                  />
                  <View style={styles.details}>
                    <View style={styles.location}>
                      <Text style={[styles.cityHall, styles.templePaClr]}>
                        City Hall
                      </Text>
                      <Text
                        style={[styles.philadelphia, styles.seeAllTypo]}
                      >{`Philadelphia `}</Text>
                    </View>
                  </View>
                </Pressable>
                <View
                  style={[
                    styles.destinationCard1,
                    styles.destinationCardShadowBox,
                  ]}
                >
                  <Image
                    style={[
                      styles.destinationImageIcon1,
                      styles.destinationIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../../assets/destination-image1.png")}
                  />
                  <View style={styles.details}>
                    <View style={styles.location}>
                      <Text style={[styles.cityHall, styles.templePaClr]}>
                        place2
                      </Text>
                      <Text
                        style={[styles.philadelphia, styles.seeAllTypo]}
                      >{`Philadelphia `}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.destinationCardShadowBox}>
                  <Image
                    style={[
                      styles.destinationImageIcon1,
                      styles.destinationIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../../assets/destination-image2.png")}
                  />
                  <View style={styles.details}>
                    <View style={styles.location}>
                      <Text style={[styles.cityHall, styles.templePaClr]}>
                        place3
                      </Text>
                      <Text
                        style={[styles.philadelphia, styles.seeAllTypo]}
                      >{`Philadelphia `}</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.destinationCard3,
                    styles.destinationCardShadowBox,
                  ]}
                >
                  <Image
                    style={[
                      styles.destinationImageIcon1,
                      styles.destinationIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../../assets/destination-image3.png")}
                  />
                  <View style={styles.details}>
                    <View style={styles.location}>
                      <Text style={[styles.cityHall, styles.templePaClr]}>
                        place4
                      </Text>
                      <Text
                        style={[styles.philadelphia, styles.seeAllTypo]}
                      >{`Philadelphia `}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.dailyChallenge}>
            <Text style={[styles.dailyChallenge1, styles.dailyTypo]}>
              Incentives
            </Text>
            <ScrollView
              style={styles.challengesCardView}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.offersRowScrollViewContent}
            >
              <View style={styles.offerCardShadowBox}>
                <View style={styles.offerDetails}>
                  <Text
                    style={[
                      styles.discountForMastercardContainer,
                      styles.limitedTimeOfferLayout,
                    ]}
                  >
                    <Text style={styles.discount}>20% discount</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.forMastercardUsers}>
                      for mastercard users
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.limitedTimeOffer,
                      styles.limitedTimeOfferLayout,
                    ]}
                  >
                    Limited time offer!
                  </Text>
                </View>
                <Image
                  style={styles.offerImageIcon}
                  contentFit="cover"
                  source={require("../../assets/offer-image.png")}
                />
              </View>
              <View style={styles.offerCardShadowBox}>
                <View style={styles.offerDetails}>
                  <Text
                    style={[
                      styles.discountForMastercardContainer,
                      styles.limitedTimeOfferLayout,
                    ]}
                  >
                    <Text style={styles.discount}>25% discount</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.forMastercardUsers}>
                      with your Visa credit cards
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.limitedTimeOffer,
                      styles.limitedTimeOfferLayout,
                    ]}
                  >
                    Limited time offer!
                  </Text>
                </View>
                <Image
                  style={styles.offerImageIcon}
                  contentFit="cover"
                  source={require("../../assets/offer-image1.png")}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  challengesCardViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offersRowScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
  },
  exploreMainViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dailyTypo: {
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  group13ParentFlexBox: {
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  templePaClr: {
    color: Color.black,
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 8,
    width: 8,
  },
  seeAllTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  destinationCardShadowBox: {
    padding: Padding.p_3xs,
    gap: Gap.gap_md,
    borderRadius: Border.br_5xs,
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
  destinationIconLayout: {
    height: 90,
    width: 131,
  },
  limitedTimeOfferLayout: {
    width: 136,
    textAlign: "left",
  },
  searchTypo: {
    textAlign: "center",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
  },
  bottomLayout: {
    width: 61,
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  dailyChallenge1: {
    textAlign: "left",
    color: Color.colorSeagreen,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
  },
  home: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorSeagreen,
  },
  templePa: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  group13: {
    gap: Gap.gap_3xs,
  },
  line2Icon: {
    marginTop: -0.3,
    top: "50%",
    right: 8,
    left: 9,
    height: 1,
    position: "absolute",
    zIndex: 0,
  },
  ovalIcon1: {
    zIndex: 1,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon2: {
    zIndex: 3,
  },
  line2Parent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  group131: {
    alignItems: "flex-end",
    gap: Gap.gap_3xs,
  },
  group13Parent: {
    paddingTop: Padding.p_xs,
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
  line3Icon: {
    maxHeight: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  completeYourDaily: {
    fontSize: 15,
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  completeYourDailyRideWrapper: {
    paddingBottom: Padding.p_xs,
    justifyContent: "space-between",
  },
  frameParent: {
    gap: Gap.gap_xl,
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
    backgroundColor: Color.colorWhite,
  },
  dailyChallenge: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  challenges1: {
    width: 174,
    textAlign: "left",
    color: Color.colorSeagreen,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
  },
  seeAll: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSeagreen,
  },
  header1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cityHall: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
  },
  philadelphia: {
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray,
  },
  location: {
    gap: Gap.gap_4xs,
  },
  details: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  destinationCard: {
    width: 151,
    padding: Padding.p_3xs,
  },
  destinationImageIcon1: {
    borderRadius: Border.br_11xs,
  },
  destinationCard1: {
    width: 151,
    padding: Padding.p_3xs,
  },
  destinationCard3: {
    width: 151,
    padding: Padding.p_3xs,
  },
  challengesCardRow: {
    gap: Gap.gap_md,
    flexDirection: "row",
  },
  challengesCardView: {
    alignSelf: "stretch",
    width: "100%",
  },
  discount: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  forMastercardUsers: {
    fontFamily: FontFamily.robotoRegular,
  },
  discountForMastercardContainer: {
    lineHeight: 19,
    color: Color.black,
    fontSize: FontSize.size_sm,
  },
  limitedTimeOffer: {
    lineHeight: 18,
    color: Color.gray999,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  offerDetails: {
    top: 13,
    left: 112,
    gap: Gap.gap_3xs,
    position: "absolute",
  },
  offerImageIcon: {
    top: 17,
    left: 15,
    width: 74,
    height: 51,
    position: "absolute",
  },
  offerCardShadowBox: {
    height: 86,
    width: 264,
    borderRadius: Border.br_5xs,
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
  exploreContent: {
    gap: 30,
    alignSelf: "stretch",
  },
  exploreMainView: {
    alignSelf: "stretch",
    flex: 1,
  },
  explore: {
    backgroundColor: Color.colorLavender,
    width: "100%",
    flex: 1,
  },
});

export default Explore;