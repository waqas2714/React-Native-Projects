import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, id, handleGoalDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={()=>handleGoalDelete(id)} android_ripple={{color : "#210644"}}>
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
    fontSize: 16,
  },
});
