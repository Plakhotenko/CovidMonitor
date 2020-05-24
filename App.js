import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import StatTabs from "./components/StatisticsTabs";
import DailyStatTabs from "./components/DailyStatTabs";
import StatInfo from "./components/StatInfo";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <MainHeading />
      <StatTabs />
      <DailyStatTabs />
      <StatInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#473f97",
  },
});
