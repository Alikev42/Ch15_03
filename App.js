import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.box}>#1a</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.box}>#2a</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.box}>#3a</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 100,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#341256"
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  }
});
