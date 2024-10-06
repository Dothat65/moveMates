import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Header1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.incentivesWrapper}>
          <Text style={styles.incentives}>Incentives</Text>
        </View>
        <Image
          style={[styles.iconKebab, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--kebab.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  incentives: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  incentivesWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
  },
});

export default Header1;
