import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
]);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
