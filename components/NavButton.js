import React from "react";
import { StyleSheet, View } from "react-native";

export default function NavButton() {
  return (
    <View>
      <View style={styles.line}></View>
      <View style={[styles.line, styles.lineSecond]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    width: 24,
    height: 3,
    backgroundColor: "white",
    marginBottom: 6,
    borderRadius: 4,
  },
  lineSecond: {
    width: 20,
  },
});
