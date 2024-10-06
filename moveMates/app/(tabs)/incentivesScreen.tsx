import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {
  Padding,
  Color,
  FontSize,
  FontFamily,
  Gap,
  Border,
} from "../../GlobalStyles";

const Incentives = () => {
  return (
    <SafeAreaView style={styles.incentives}>
      <StatusBar />
      <View style={[styles.offersBody, styles.viewFlexBox]}>
        <View style={styles.offersList}>
          <View style={styles.offerCardShadowBox}>
            <View style={[styles.frameParent, styles.viewFlexBox1]}>
              <View style={[styles.limitedOfferWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.limitedOffer, styles.searchTypo]}>
                  Limited offer!
                </Text>
              </View>
              <Image
                style={styles.iconHeart}
                contentFit="cover"
                source={require("../../assets/icon--heart.png")}
              />
            </View>
            <Text
              style={[styles.get20DiscountContainer, styles.incentives1Clr]}
            >
              <Text style={styles.get20Discount}>Get 20% discount</Text>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.whenCompletingThis}>
                when completing this ride
              </Text>
            </Text>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../../assets/frame-2442.png")}
              />
              <View style={styles.onceThisRideIsCompleteGetWrapper}>
                <Text
                  style={[styles.onceThisRide, styles.searchClr]}
                >{`Once this ride is complete get 20% discount instantly! `}</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../../assets/vector-1.png")}
              />
            </View>
          </View>
          <View style={styles.offerCardShadowBox}>
            <View style={[styles.frameParent, styles.viewFlexBox1]}>
              <View style={[styles.limitedOfferWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.limitedOffer, styles.searchTypo]}>
                  Limited offer!
                </Text>
              </View>
              <Image
                style={styles.iconHeart}
                contentFit="cover"
                source={require("../../assets/icon--heart1.png")}
              />
            </View>
            <Text
              style={[styles.get20DiscountContainer, styles.incentives1Clr]}
            >
              <Text style={styles.get20Discount}>25% discount</Text>
              <Text style={styles.textTypo}>{` `}</Text>
              <Text style={styles.whenCompletingThis}>
                when completing this ride
              </Text>
            </Text>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../../assets/frame-2443.png")}
              />
              <View style={styles.onceThisRideIsCompleteGetWrapper}>
                <Text
                  style={[styles.onceThisRide, styles.searchClr]}
                >{`Once this ride is complete get 25% discount instantly! `}</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../../assets/vector-11.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  viewFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  incentives1Clr: {
    color: Color.black,
    textAlign: "left",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  viewFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchTypo: {
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  searchClr: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.robotoRegular,
  },
  bottomLayout: {
    width: 61,
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  limitedOffer: {
    textTransform: "uppercase",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 18,
  },
  limitedOfferWrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumaquamarine,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
  },
  iconHeart: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  get20Discount: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  whenCompletingThis: {
    fontFamily: FontFamily.robotoRegular,
  },
  get20DiscountContainer: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 104,
    height: 72,
  },
  onceThisRide: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
    alignSelf: "stretch",
  },
  onceThisRideIsCompleteGetWrapper: {
    flex: 1,
  },
  frameItem: {
    width: 5,
    height: 10,
  },
  frameGroup: {
    gap: Gap.gap_xl,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  offerCardShadowBox: {
    gap: Gap.gap_xs,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  offersList: {
    gap: Gap.gap_lg,
  },
  offersBody: {
    paddingVertical: 19,
  },
  incentives: {
    backgroundColor: Color.colorLavender,
    width: "100%",
    flex: 1,
  },
});

export default Incentives;