import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Color } from "../constants/color";

let minBoundary = 1,
  maxBoundary = 100;

const GameScreen = ({ userNumber, setIsGameOver, setRoundsNumber }) => {
  const initialGuess = generateRandomNumber(minBoundary, maxBoundary);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nextGuessHandler = (direction) => {
    if (
      (direction === "-" && currentGuess < userNumber) ||
      (direction === "+" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie!", "You know that is wrong.", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);

      return;
    }

    if (direction === "-") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNum = generateRandomNumber(minBoundary, maxBoundary);
    setCurrentGuess(newRndNum);
    setGuesses([newRndNum, ...guesses]);
  };

  useEffect(() => {
    setRoundsNumber((prev) => prev + 1);
    if (currentGuess === userNumber) {
      setIsGameOver(true);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const getRoundsListLength = guesses.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numContainer}>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("-")}>-</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("+")}>+</PrimaryButton>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={(dataItem) => (
            <View style={styles.listItem}>
              <Text>#{getRoundsListLength - dataItem.index}</Text>
              <Text>Opponent's Guess: {dataItem.item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 32,
    paddingTop: 64,
  },
  numContainer: {
    marginTop: 16,
  },
  listItem: {
    borderColor: Color.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  listContainer: {
    flex: 1,
    // padding: 16,
  },
});
