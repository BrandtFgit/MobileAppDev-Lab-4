import React from 'react';
import 
{ 
    View, 
    TextInput, 
    Button, 
    Alert
} from 'react-native';
import { styles } from '../../styles';
import { useState } from 'react';


export default function ToDoForm({ addTask, tasks }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '' && !tasks.includes(taskText.trim())) {
      addTask(taskText.trim());
      setTaskText('');
    } else{
      Alert.alert("Task already exists or empty!");
    }
  };

  return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
  );   
}
