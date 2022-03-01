import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {appStyle} from '../styles';

interface inputButtonProps {
  addTask: (task: string) => void;
}

function InputButton({addTask}: inputButtonProps) {
  const [taskInput, setTaskInput] = useState('');

  function handleAddTask() {
    addTask(taskInput);
    setTaskInput('');
    Keyboard.dismiss();
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={taskInput}
          onChangeText={setTaskInput}
          style={styles.textInput}
          placeholder="Adicione uma tarefa"
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.75}
          onPress={handleAddTask}>
          <Icon
            style={styles.iconButton}
            name="chevron-right"
            size={24}
            color={appStyle.colors.black300}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyle.colors.black100,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: -50,
    marginBottom: 25,
  },
  textInput: {
    flex: 1,
    padding: 16,
    fontFamily: appStyle.fonts.regular,
    fontSize: 18,
  },
  buttonContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: appStyle.colors.black300,
    backgroundColor: appStyle.colors.purple,
  },
  iconButton: {
    fontSize: 32,
  },
});

export {InputButton};
