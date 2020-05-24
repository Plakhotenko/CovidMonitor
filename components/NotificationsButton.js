import React from "react";
import { View, Image } from "react-native";

export default function NotificationsButton() {
  return (
    <View>
      <Image source={require("../assets/bell.png")} />
    </View>
  );
}
