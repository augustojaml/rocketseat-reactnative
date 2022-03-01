import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Header} from '../components/Header';
import {InputButton} from '../components/InputButton';
import {TaskItem, TaskProps} from '../components/TaskItem';
import {appStyle} from '../styles';
import {StorageTasks} from '../utils/StorageTasks';

function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddTask(task: string) {
    if (!task) {
      return;
    }
    const data: TaskProps = {
      id: new Date().getTime(),
      title: task,
      done: false,
    };
    StorageTasks.setData([...tasks, data]);
    setTasks([...tasks, data]);
  }

  function handleToggleTaskDone(id: number) {
    const updateTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    StorageTasks.setData(updateTask);
    setTasks(updateTask);
  }

  function handleRemoveTask(id: number) {
    const updateTask = tasks.filter(task => task.id !== id);
    StorageTasks.setData(updateTask);
    setTasks(updateTask);
  }

  function handleUpdateTask(id: number, title: string) {
    const updateTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          title: title,
        };
      }
      return task;
    });
    StorageTasks.setData(updateTask);
    setTasks(updateTask);
  }

  useEffect(() => {
    (async () => {
      const storage = await StorageTasks.getData();
      if (storage) {
        setTasks(storage);
      }
    })();
  }, []);

  return (
    <>
      <Header taskQuantity={tasks?.length} />
      <View style={styles.container}>
        <InputButton addTask={handleAddTask} />
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <>
              <TaskItem
                task={item}
                toggleTaskDone={handleToggleTaskDone}
                removeTask={handleRemoveTask}
                updateTask={handleUpdateTask}
              />
            </>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyle.colors.black900,
    padding: 24,
  },
});

export {Home};
