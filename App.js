import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [doShowCreateGoalModal, setDoShowCreateGoalModal] = useState(false);

  // Handlers
  function handleChangeOnTextInput(text) {
    setText(text);
  }
  function handlePressOnAddGoalButton() {
    if(!text) return;

    setGoals((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        text,
      },
    ]);
    setText("");
    setDoShowCreateGoalModal(false);
  }
  function deleteItem(id) {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  }
  function handlePressOnCancelButton() {
    setDoShowCreateGoalModal(false);
    if(text) setText("");
  }
  function handlePressOnAddNewGoalButton() {
    setDoShowCreateGoalModal(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Button
          title="Add New Goal"
          color="purple"
          onPress={handlePressOnAddNewGoalButton}
        />
      </View>

      <View style={styles.listItemsContainer}>
        <Text style={styles.goalsHeading}>All Goals</Text>
        <FlatList
          data={goals}
          renderItem={(props) => (
            <GoalItem
              text={props.item.text}
              id={props.item.id}
              onItemPress={deleteItem}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <GoalInput
        handleChangeOnTextInput={handleChangeOnTextInput}
        handlePressOnAddGoalButton={handlePressOnAddGoalButton}
        handlePressOnCancelButton={handlePressOnCancelButton}
        value={text}
        doShowModal={doShowCreateGoalModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 68,
    paddingHorizontal: 24,
  },
  addButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 32,
  },
  listItemsContainer: {
    paddingVertical: 24,
    flex: 1,
  },
  goalsHeading:{
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom:20
  }
});
