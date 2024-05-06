import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { Color } from "../constants/color"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.screen}>
        <Title>Game Over!</Title>

        <View>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>

        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{userNumber}</Text>.</Text>

        
        <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    image : {
        width : 200,
        height : 200,
        borderRadius : 100,
        margin : 48,
        borderWidth : 3,
        borderColor : Color.primary800
    },
    summaryText : {
        fontSize : 20,
        textAlign : 'center',
        marginBottom : 24
    },
    highlightedText : {
        fontWeight : 'bold',
        color : Color.primary700
    }
})