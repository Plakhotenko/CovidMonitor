import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function StatTabs() {
  return (
    <View style={styles.tabsWrap}>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.itemActiveText]}>My Country</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Global</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsWrap: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    margin: 25,
    padding: 3,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  item: {
    width: "50%",
    alignItems: "center",
  },
  itemText: {
    fontWeight: "700",
    color: "white",
  },
  itemActiveText: {
    color: "#0d1333",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
