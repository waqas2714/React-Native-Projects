import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from "react-native";
import {StatusBar} from 'expo-status-bar';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleGoalPress = (input) => {
    if (input !== "") {
      setGoals((goals) => [
        ...goals,
        { text: input, id: Math.random().toString() },
      ]);
    }
  };

  const handleGoalDelete = (id)=>{
    setGoals(prevGoals => prevGoals.filter((goal)=>goal.id !== id));
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add A Task" color="#5e0acc" onPress={()=>setIsModalOpen(true)} />
      <GoalInput handleGoalPress={handleGoalPress} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} id={itemData.item.id} handleGoalDelete={handleGoalDelete} />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 8,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 3,
    padding: 8,
  }
});
