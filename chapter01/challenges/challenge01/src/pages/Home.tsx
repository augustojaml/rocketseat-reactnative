import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === '') {
      return;
    }

    const data: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((state) => [...state, data]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks((state) =>
      state.map((findTask) => {
        if (findTask.id === id) {
          return {
            ...findTask,
            done: !findTask.done,
          };
        }
        return findTask;
      })
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((state) => state.filter((findTask) => findTask.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList tasks={tasks} toggleTaskDone={handleToggleTaskDone} removeTask={handleRemoveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});
