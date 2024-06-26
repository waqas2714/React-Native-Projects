import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import { Color } from '../constants/color';
import Title from '../components/Title';

const StartGameScreen = ({pickedNumberHandler}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const handleInputSubmit = ()=>{
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Please choose a number between 1 and 99',
                [{text : 'Okay', style : 'destructive', onPress : ()=>setEnteredNumber('')}]
            )

            return;
        }

        pickedNumberHandler(chosenNumber);
    }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess a Number</Title>
    <View style={styles.inputContainer}>
      <Text style={styles.textStyle}>Enter a Number</Text>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' value={enteredNumber} onChangeText={(text)=>setEnteredNumber(text)} />

        <View style={styles.buttonsContainer}>

            <View style={styles.buttonContainer}><PrimaryButton onPress={()=>setEnteredNumber('')} >Reset</PrimaryButton></View>

            <View style={styles.buttonContainer}><PrimaryButton onPress={handleInputSubmit}>Confirm</PrimaryButton></View>

        </View>

    </View>
    </View>

  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer : {
    marginTop: 100,
    alignItems : 'center'
  },
  inputContainer : {
    alignItems : 'center',
    marginHorizontal : 24,
    marginTop: 24,
    padding : 16,
    backgroundColor : Color.primary800,
    borderRadius : 8,
    elevation : 4, //Shadow for android
    //Shadow for iOS
    shadowColor : 'black',
    shadowOffset : {width : 0, height: 2},
    shadowRadius : 6,
    shadowOpacity : 0.25
  },
  textStyle : {
    fontSize : 24,
    fontWeight: '300',
    color : Color.accent500
  },
  numberInput : {
    height : 50,
    width : 50,
    fontSize : 32,
    borderBottomColor : Color.accent500,
    borderBottomWidth : 2,
    color : Color.accent500,
    marginVertical : 8,
    fontWeight : '300',
    textAlign : 'center'
  },
  buttonsContainer : {
    flexDirection : 'row',
    marginTop : 8
  },
  buttonContainer : {
    flex : 1
  }
});
