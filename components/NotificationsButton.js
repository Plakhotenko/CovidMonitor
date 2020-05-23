import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function NotificationsButton() {
  return (
    <View style={styles.notificationsButton}>
      <Image source={require("../assets/bell.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  notificationsButton: {},
});
