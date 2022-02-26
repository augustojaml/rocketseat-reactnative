import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

export function Home() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    if (skill === '') {
      return;
    }

    setSkills(state => [...state, skill]);

    setSkill('');
  }

  return (
    <>
      <StatusBar backgroundColor="#121015" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome, Augusto</Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#666"
          onChangeText={setSkill}
          value={skill}
        />
        <Button title="Add Skill" onPress={handleAddNewSkill} />
        <Text style={[styles.title, styles.titleListSkills]}>My Skill's</Text>

        {skills.map(skl => (
          <SkillCard key={skl} skl={skl} />
        ))}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 20 : 15,
    marginTop: 20,
    borderRadius: 8,
  },
  titleListSkills: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
  },
});
