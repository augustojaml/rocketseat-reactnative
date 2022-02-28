import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export interface EditTaskArgs {
  taskId: number;
  taskTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === '') {
      return;
    }

    const findTask = tasks.find((task) => task.title === newTaskTitle);

    if (findTask) {
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com mesmo nome');
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
    Alert.alert('Remover Task', 'Tem certeza que você deseja remover essa Task', [
      {
        style: 'cancel',
        text: 'Não',
      },
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          setTasks((state) => state.filter((findTask) => findTask.id !== id));
        },
      },
    ]);
  }

  function handleEditTask({ taskId, taskTitle }: EditTaskArgs) {
    const findTask = tasks.find((task) => task.id === taskId);
    if (!findTask) {
      return;
    }
    findTask.title = taskTitle;
    setTasks(tasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList tasks={tasks} toggleTaskDone={handleToggleTaskDone} removeTask={handleRemoveTask} editTask={handleEditTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});
