import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDateTime, saveEvent } from "./api";

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  text: {
    height: 40,
    margin: 0,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5,
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

const EventForm = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddPress = () => {
    saveEvent({ title, date }).then(() => {
      navigation.goBack();
    });
  };

  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDatePicked = (date) => {
    setDate(date);
    handleDatePickerHide();
  };

  const handleDatePickerHide = () => {
    setShowDatePicker(false);
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
        <TextInput
          style={[styles.text, styles.borderTop]}
          placeholder="Event date"
          spellCheck={false}
          value={formatDateTime(date.toString())}
          editable={!showDatePicker}
          onFocus={handleDatePress}
        />
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="datetime"
          onConfirm={handleDatePicked}
          onCancel={handleDatePickerHide}
        />
      </View>
      <TouchableHighlight onPress={handleAddPress} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EventForm;
