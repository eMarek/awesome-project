import { Fragment, useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisiable, setModalIsVisiable] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisiable(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisiable(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ])
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id)
    })
  }

  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#6B90A3" onPress={startAddGoalHandler} />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisiable}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => <GoalItem
              id={itemData.item.key}
              text={itemData.item.text}
              onDeleteGoal={deleteGoalHandler}
            />}
          />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 15
  }
});
