import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

interface SkillProps {
  id: string;
  name: string;
}

export function Home(): JSX.Element {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState<SkillProps[]>([]);
  const [greeting, setGreeting] = useState('Good morning');

  function handleAddSkill(): void {
    if (skill === '') {
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: skill,
    };
    setSkills(state => [...state, data]);

    setSkill('');
  }

  function handleRemoveSkill(id: string) {
    setSkills(state => state.filter(skl => skl.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour > 4 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{greeting}, Augusto</Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#666"
          onChangeText={setSkill}
          value={skill}
        />
        <Button
          activeOpacity={0.6}
          title="Add Skill"
          onPress={handleAddSkill}
        />
        <Text style={[styles.title, styles.titleListSkills]}>My Skill's</Text>
        <FlatList
          data={skills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              title={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
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
