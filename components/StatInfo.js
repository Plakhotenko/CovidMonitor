import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StatInfoItem from "./StatInfoItem";

const state = {
  items: [
    {
      title: "Affected",
      value: "336,851",
      color: "#ffb259",
    },
    {
      title: "Death",
      value: "9,620",
      color: "#ff5959",
    },
    {
      title: "Recovered",
      value: "17,977",
      color: "#4cd97b",
      width: "29%",
    },
    {
      title: "Active",
      value: "301,251",
      color: "#4db5ff",
      width: "29%",
    },
    {
      title: "Serious",
      value: "18,702",
      color: "#9059ff",
      width: "29%",
    },
  ],
};

export default function StatInfo() {
  return (
    <View style={styles.Wrapper}>
      {state.items.map((item) => (
        <StatInfoItem item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
