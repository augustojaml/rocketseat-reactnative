import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard(props) {
  return (
    <>
      <TouchableOpacity key={new Date().getTime()} style={styles.buttonSkill}>
        <Text style={styles.textSkill}>{props.skl}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
