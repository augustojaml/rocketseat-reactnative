import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {appStyle} from '../styles';

function Header() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.appName}>MyTasks</Text>
        <View style={styles.contentInfo}>
          <Text style={styles.textInfo}>Você tem</Text>
          <Text style={styles.textTask}>03 Tarefas</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyle.colors.black800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 150,
  },
  appName: {
    fontSize: 30,
    fontFamily: appStyle.fonts.extraBold,
  },
  contentInfo: {
    flexDirection: 'row',
  },
  textInfo: {
    fontFamily: appStyle.fonts.regular,
    marginRight: 10,
  },
  textTask: {
    fontFamily: appStyle.fonts.bold,
  },
});

export {Header};
