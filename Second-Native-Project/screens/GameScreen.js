import { Alert, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import NumberContainer from "../components/game/NumberContainer"
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";


let minBoundary = 1, maxBoundary = 100;

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomNumber(minBoundary, maxBoundary);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const nextGuessHandler = (direction)=>{

        if ((direction === '-' && currentGuess < userNumber) || (direction === '+' && currentGuess > userNumber)) {
            Alert.alert(
                'Dont Lie!',
                'You know that is wrong.',
                [{
                    text : 'Sorry!',
                    style : 'cancel'
                }]
            )

            return;
        }


        if (direction === '-') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNum = generateRandomNumber(minBoundary, maxBoundary);
        setCurrentGuess(newRndNum); 
    }
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower?</Text>
            <View>
                <PrimaryButton onPress={()=>nextGuessHandler('-')}>-</PrimaryButton>
                <PrimaryButton onPress={()=>nextGuessHandler('+')}>+</PrimaryButton>
            </View>
        </View>
    </View>
  )
}

export default GameScreen


const styles = StyleSheet.create({
    screen : {
        padding : 32
    }
})