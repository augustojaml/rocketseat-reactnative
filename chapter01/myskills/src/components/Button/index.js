import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button(props) {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
