import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function NotificationsButton() {
  return (
    <View style={styles.notificationsButton}>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationsButton: {
    width: 18,
    height: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
});
