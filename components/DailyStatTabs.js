import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function DailyStatTabs() {
  return (
    <View style={styles.tabsWrap}>
      <Text style={[styles.itemStyle, styles.itemStyleActive]}>Total</Text>
      <Text style={styles.itemStyle}>Today</Text>
      <Text style={styles.itemStyle}>Yesterdat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsWrap: {
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  itemStyle: {
    color: "rgba(255, 255, 255, 0.4)",
    fontWeight: "700",
    fontSize: 14,
    padding: 12,
  },
  itemStyleActive: {
    color: "white",
  },
});
