import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  title: string;
}

export function SkillCard({title, ...rest}: SkillCardProps) {
  return (
    <>
      <TouchableOpacity {...rest} style={styles.buttonSkill}>
        <Text style={styles.textSkill}>{title}</Text>
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
