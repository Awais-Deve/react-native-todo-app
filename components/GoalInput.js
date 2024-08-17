import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput({ handleChangeOnTextInput, handlePressOnAddGoalButton,value }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter text here..."
        onChangeText={handleChangeOnTextInput}
        value={value}
      />
      <Button
        title="Add Goal"
        color="purple"
        onPress={handlePressOnAddGoalButton}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "purple",
    alignItems: "center",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "purple",
    width: "73%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
