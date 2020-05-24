import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function StatInfoItem(props) {
  return (
    <View
      style={[
        styles.Item,
        { backgroundColor: props.item.color },
        { width: props.item.width === undefined ? "46%" : props.item.width },
      ]}
    >
      <Text style={styles.ItemTitle}>{props.item.title}</Text>
      <Text style={styles.ItemValue}>{props.item.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Item: {
    justifyContent: "space-between",
    width: "46%",
    margin: "2%",
    height: 100,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#ffb259",
  },
  ItemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  ItemValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
