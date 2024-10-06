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

const Group1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.group4, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout2}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.challengesWrapper}>
          <Text style={styles.challenges}>Challenges</Text>
        </View>
        <Image
          style={[styles.iconKebab, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/icon--kebab1.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  group4: {
    backgroundColor: Color.colorWhite,
  },
  iconLayout2: {
    height: 32,
    width: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  challenges: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  challengesWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    width: 375,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
  },
});

export default Group1;
