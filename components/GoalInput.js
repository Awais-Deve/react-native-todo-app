import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({
  handleChangeOnTextInput,
  handlePressOnAddGoalButton,
  handlePressOnCancelButton,
  value,
  doShowModal,
}) {
  return (
    <Modal animationType="slide" visible={doShowModal}>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/goal.png")} style={styles.image} />
          <TextInput
            style={styles.inputText}
            placeholder="Enter text here..."
            onChangeText={handleChangeOnTextInput}
            value={value}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Add Goal"
              color="#9C059C"
              onPress={handlePressOnAddGoalButton}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Cancel"
              color="#9C059C"
              onPress={handlePressOnCancelButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "purple",
  },
  image: {
    width: 200,
    height: 200,

    marginHorizontal:"auto",
    marginBottom:18
  },
  inputContainer: {
    paddingBottom: 24,
    alignItems: "center",
    marginHorizontal: 19,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "purple",
    paddingHorizontal: 8,
    width: "100%",
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 18,
    backgroundColor:"white"
  },
  buttonContainer: {
    width: "49%",
  },
});
