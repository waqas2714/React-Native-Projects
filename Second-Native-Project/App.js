import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { Color } from './constants/color';

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();

  const pickedNumberHandler = (number)=>{
    setChosenNumber(number);
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />

  if (chosenNumber) {
    screen = <GameScreen userNumber={chosenNumber}/>
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
