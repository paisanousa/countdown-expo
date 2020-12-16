import React, { Component } from "react";
import ActionButton from "react-native-action-button";
import styled from "styled-components";

import EventCard from "./EventCard";
import { getEvents } from "./api";

export default class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map((evt) => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    this.props.navigation.addListener("focus", () => {
      getEvents().then((events) => this.setState({ events }));
    });
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("Form");
  };

  render() {
    return [
      <List
        key="flatlist"
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
      />,
      <ActionButton key="fab" onPress={this.handleAddEvent} buttonColor="rgba(231, 76, 60, 1)" />,
    ];
  }
}

const List = styled.FlatList`
  flex: 1;
  padding-top: 20px;
  background-color: #f3f3f3;
`;
