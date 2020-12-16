import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styled from "styled-components";

import { formatDateTime, saveEvent } from "./api";

export default function EventForm({ navigation }) {
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
    <Form>
      <Container>
        <Title
          placeholder="Event title"
          spellCheck={false}
          value={title}
          onChangeText={handleChangeTitle}
        />
        <Date
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
      </Container>
      <Button onPress={handleAddPress}>
        <ButtonText>Add</ButtonText>
      </Button>
    </Form>
  );
}

const Form = styled.View`
  flex: 1;
`;

const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const Title = styled.TextInput`
  height: 40px;
  margin: 0px;
  margin-left: 7px;
  margin-right: 7px;
  padding-left: 10px;
`;

const Date = styled.TextInput`
  height: 40px;
  margin: 0px;
  margin-left: 7px;
  margin-right: 7px;
  padding-left: 10px;
  border-color: #edeeef;
  border-top-width: 0.5px;
`;

const Button = styled.TouchableHighlight`
  height: 50px;
  background-color: #48bbec;
  border-color: #48bbec;
  align-self: stretch;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
