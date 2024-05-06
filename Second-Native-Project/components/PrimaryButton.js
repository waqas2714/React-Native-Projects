import { Pressable, StyleSheet, Text, View } from "react-native"
import { Color } from "../constants/color";

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable
            style={
                ({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer 
            }
            android_ripple={{color : '#640223'}}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer : {
        borderRadius : 28,
        margin : 4,
        overflow : 'hidden'
    },
    buttonInnerContainer : {
        backgroundColor : Color.primary500,
        paddingVertical : 8,
        paddingHorizontal : 16,
        elevation : 2
    },
    buttonText : {
        color : 'white',
        textAlign : 'center'
    },
    pressed : {
        opacity : 0.75
    }
});
