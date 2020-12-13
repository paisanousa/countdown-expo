import React from "react";
import { LogBox } from "react-native";
import EventList from "./EventList";

LogBox.ignoreLogs([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
]);

export default class App extends React.Component {
  render() {
    return <EventList />;
  }
}
