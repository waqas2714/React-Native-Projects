import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

const GoalInput = ({ handleGoalPress, isModalOpen, setIsModalOpen }) => {
  const [input, setInput] = useState("");

  const handleTextChange = (text) => {
    setInput(text);
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>

        <Image style={styles.image} source={require('../assets/images/goal.png')} />

        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals..."
          value={input}
          onChangeText={handleTextChange}
        />

        <View style={styles.buttonContainer}>

        <View style={styles.button}>
            <Button
              title="Cancel"
              color='#f31282'
              onPress={() => {
                setIsModalOpen(false);
              }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#5e0acc"
              onPress={() => {
                handleGoalPress(input);
                setInput("");
              }}
            />
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : '#311b6b'
  },
  image : {
    height : 200,
    width : 200,
  },
  textInput: {
    borderColor: '#f3edfa',
    backgroundColor : '#f3edfa',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical : 8,
    width: "95%",
    color: '#120438',
    marginTop : 40
  },
  buttonContainer : {
    flexDirection : 'row',
    justifyContent : "space-between",
    width : "70%",
    marginTop: 32,
    marginBottom: 225
  },
  button : {
    width : 100
  }
});
