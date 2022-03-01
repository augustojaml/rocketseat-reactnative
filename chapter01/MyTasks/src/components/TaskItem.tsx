import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {darken, opacify, rgba} from 'polished';

import {appStyle} from '../styles';

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

export interface TaskItemProps {
  task: TaskProps;
}

function TaskItem({task}: TaskItemProps) {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, task.done && styles.containerTaskDone]}>
        <Icon
          style={[styles.iconStatus]}
          name={task.done ? 'check' : 'circle'}
          size={12}
          color={
            task.done
              ? rgba(appStyle.colors.success, 0.3)
              : appStyle.colors.black300
          }
        />
        <Text style={[styles.textTask, task.done && styles.textTaskDone]}>
          Alguma tarefa
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: appStyle.colors.black800,
    marginTop: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStatus: {
    fontSize: 20,
  },
  textTask: {
    color: rgba(appStyle.colors.black100, 0.75),
    fontFamily: appStyle.fonts.semiBold,
    marginLeft: 16,
  },
  containerTaskDone: {
    backgroundColor: rgba(appStyle.colors.black800, 0.3),
  },
  iconStatusDone: {
    color: rgba(appStyle.colors.black100, 0.3),
  },
  textTaskDone: {
    color: rgba(appStyle.colors.black100, 0.3),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontFamily: appStyle.fonts.regular,
  },
});

export {TaskItem};
