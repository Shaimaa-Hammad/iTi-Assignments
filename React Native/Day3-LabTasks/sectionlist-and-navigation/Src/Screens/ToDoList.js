import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.trim().length < 4) {
      alert('min characters must be more than 3 chars!');
      return;
    }

    const newTask = {
      id: uuid.v4(),
      name: task,
      done: false,
    };

    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleToggleTask = (taskId) => {
    setTaskList(
      taskList.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My ToDo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      {taskList.map((task) => (
        <View key={task.id} style={styles.taskRow}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => handleToggleTask(task.id)}
          >
            {task.done && <View style={styles.checkedBox} />}
          </TouchableOpacity>
          <Text style={[styles.taskName, task.done && styles.taskNameDone]}>
            {task.name}
          </Text>
          <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 16,
    height: 16,
    backgroundColor: '#000',
  },
  taskName: {
    flex: 1,
    fontSize: 16,
  },
  taskNameDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ToDoList;
