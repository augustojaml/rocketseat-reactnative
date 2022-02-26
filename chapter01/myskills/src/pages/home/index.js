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
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleAddNewSkill}>
          <Text style={styles.buttonText}>Add Skill</Text>
        </TouchableOpacity>
        <Text style={[styles.title, styles.titleListSkills]}>My Skill's</Text>

        {skills.map(skl => (
          <TouchableOpacity
            key={new Date().getTime()}
            style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{skl}</Text>
          </TouchableOpacity>
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
  titleListSkills: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
  },
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
