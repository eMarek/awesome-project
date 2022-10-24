import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ id, text, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'blue' }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({pressed}) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#4183A7',
    color: 'white'
  },
  pressItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 10,
    color: 'white'
  }
});
