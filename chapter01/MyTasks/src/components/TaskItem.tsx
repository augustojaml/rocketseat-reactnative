import React, {useEffect, useRef, useState} from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {rgba} from 'polished';

import {appStyle} from '../styles';

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

export interface UpdateTaskProps {
  id: number;
  title: number;
}

export interface TaskItemProps {
  task: TaskProps;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTask: (id: number, title: string) => void;
}

function TaskItem({
  task,
  toggleTaskDone,
  removeTask,
  updateTask,
}: TaskItemProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [valueEditTask, setValueEditTask] = useState(task.title);
  const textInputRef = useRef<TextInput>(null);

  function handleSetTaskDone() {
    toggleTaskDone(task.id);
  }

  function handleRemoveTask() {
    removeTask(task.id);
  }

  function handleEditTask() {
    setIsEditable(true);
  }

  function handleCancelTask() {
    setIsEditable(false);
  }

  function handleUpdateTask() {
    updateTask(task.id, valueEditTask);
    setIsEditable(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditable) {
        textInputRef.current.focus();
      } else {
        setIsEditable(false);
        textInputRef.current.blur();
      }
    }
  }, [isEditable]);

  return (
    <>
      <TouchableOpacity
        onPress={handleSetTaskDone}
        style={[styles.container, task.done && styles.containerTaskDone]}>
        <View style={styles.info}>
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
          <TextInput
            ref={textInputRef}
            value={valueEditTask}
            onChangeText={setValueEditTask}
            style={[styles.textTask, task.done && styles.textTaskDone]}
            editable={isEditable}
            onSubmitEditing={handleUpdateTask}
          />
          {/* <Text style={[styles.textTask, task.done && styles.textTaskDone]}>
            {task.title}
          </Text> */}
        </View>
        <View style={[styles.actions]}>
          {!task.done ? (
            !isEditable ? (
              <TouchableOpacity onPress={handleEditTask}>
                <Icon
                  name="edit"
                  style={[
                    styles.iconActions,
                    task.done && styles.iconActionsDone,
                    {marginRight: 16},
                  ]}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleCancelTask}>
                <Icon
                  name="x"
                  style={[
                    styles.iconActions,
                    task.done && styles.iconActionsDone,
                    {marginRight: 16},
                  ]}
                />
              </TouchableOpacity>
            )
          ) : null}

          {isEditable ? (
            <TouchableOpacity onPress={handleUpdateTask}>
              <Icon
                name="check"
                style={[
                  styles.iconActions,
                  task.done && styles.iconActionsDone,
                ]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleRemoveTask}>
              <Icon
                name="trash"
                style={[
                  styles.iconActions,
                  task.done && styles.iconActionsDone,
                ]}
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: appStyle.colors.black800,
    marginTop: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconActions: {
    color: rgba(appStyle.colors.black100, 0.75),
    fontSize: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  iconActionsDone: {
    color: rgba(appStyle.colors.black100, 0.3),
    fontSize: 20,
  },
});

export {TaskItem};
