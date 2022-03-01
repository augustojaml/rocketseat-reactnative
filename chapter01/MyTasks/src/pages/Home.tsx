import React from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {InputButton} from '../components/InputButton';
import {TaskItem, TaskItemProps, TaskProps} from '../components/TaskItem';
import {appStyle} from '../styles';

const tasks: TaskProps[] = [
  {
    id: new Date().getTime() + 1,
    title: 'Estudar React',
    done: false,
  },
  {
    id: new Date().getTime() + 2,
    title: 'Estudar Angular',
    done: true,
  },
  {
    id: new Date().getTime() + 3,
    title: 'Estudar React',
    done: false,
  },
];

function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <InputButton />
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <>
              <TaskItem task={item} />
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
