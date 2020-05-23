import React from "react";
import { StyleSheet, View } from "react-native";

export default function NavButton() {
  return (
    <View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    width: 22,
    height: 3,
    backgroundColor: "white",
    marginBottom: 4,
    borderRadius: 4,
  },
});
