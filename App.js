import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import MainHeading from './components/MainHeading';
import StatTabs from './components/StatisticsTabs'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <MainHeading />
      <StatTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#473f97'
  },
});
