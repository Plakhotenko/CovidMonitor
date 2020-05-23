import React from "react";
import { StyleSheet, View } from "react-native";
import NavButton from "./NavButton";
import NotificationsButton from "./NotificationsButton";

export default function Header() {
  return (
    <View style={styles.header}>
      <NavButton />
      <NotificationsButton />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
});
