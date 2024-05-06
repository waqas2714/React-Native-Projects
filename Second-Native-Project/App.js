import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { Color } from './constants/color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const pickedNumberHandler = (number)=>{
    setChosenNumber(number);
  }

  const onStartNewGame = ()=>{
    setChosenNumber(null);
    setRoundsNumber(0);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />

  if (chosenNumber && !isGameOver) {
    screen = <GameScreen userNumber={chosenNumber} setRoundsNumber={setRoundsNumber} setIsGameOver={setIsGameOver}/>
  }

  if (isGameOver) {
    screen = <GameOverScreen roundsNumber={roundsNumber} userNumber={chosenNumber} onStartNewGame={onStartNewGame} />
  }

  return (
    <LinearGradient colors={[Color.primary700, Color.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1
  },
  backgroundImage : {
    opacity : 0.15
  }
});
