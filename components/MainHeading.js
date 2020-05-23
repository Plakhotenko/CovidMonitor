import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function MainHeading() {
  return (
    <View style={styles.mainHeading}>
      <Text style={styles.text}>Statistics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeading: {
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});
