import { Text, StyleSheet, Pressable, View } from "react-native";

function GoalItem({ text, onItemPress, id }) {
  return (
    <Pressable onPress={() => onItemPress(id)}>
      {({ pressed }) => (
        <Text
          style={{
            ...styles.item,
            ...(pressed ? styles.pressedItemStyle : styles.unPressedItemStyle),
          }}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  item: {
    color: "white",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  unPressedItemStyle: {
    backgroundColor: "purple",
  },
  pressedItemStyle: {
    backgroundColor: "#670367",
  },
});
