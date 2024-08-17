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

  function handleChangeOnTextInput(text) {
    setText(text);
  }
  function handlePressOnAddGoalButton() {
    setGoals((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        text,
      },
    ]);
    setText("");
  }
  function deleteItem(id) {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  }

  return (
    <View style={styles.container}>
      <GoalInput
        handleChangeOnTextInput={handleChangeOnTextInput}
        handlePressOnAddGoalButton={handlePressOnAddGoalButton}
        value={text}
      />

      <View style={styles.listItemsContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 68,
    paddingHorizontal: 24,
  },

  listItemsContainer: {
    paddingVertical: 24,
    flex: 1,
  },
});
