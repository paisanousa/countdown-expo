import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
});

const EventForm = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState("");

  const handleAddPress = () => {
    console.log(date);
    navigation.navigate("List");
  };

  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.text}
          placeholder="Event title"
          spellCheck={false}
          value={title}
          onChangeText={handleChangeTitle}
        />
      </View>
      <TouchableHighlight onPress={handleAddPress}>
        <Text>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EventForm;
