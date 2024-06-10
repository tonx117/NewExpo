import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

interface Task {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: Date;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskAuthor, setTaskAuthor] = useState<string>("");

  const addTask = () => {
    if (taskTitle.trim() === "") return;

    const newTask: Task = {
      id: String(tasks.length + 1),
      title: taskTitle,
      description: taskDescription,
      author: taskAuthor,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskDescription("");
    setTaskAuthor("");
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const viewTask = (task: Task) => {
    // Mostrar los detalles de la tarea en un mensaje en pantalla
    alert(
      `Title: ${task.title}\nDescription: ${task.description}\nAuthor: ${
        task.author
      }\nCreated at: ${task.createdAt.toLocaleString()}`
    );
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => viewTask(item)}>
          <Text style={styles.viewButton}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTask(item.id)}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={taskTitle}
          onChangeText={(text) => setTaskTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={taskDescription}
          onChangeText={(text) => setTaskDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={taskAuthor}
          onChangeText={(text) => setTaskAuthor(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 350,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  taskItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: 350,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  viewButton: {
    color: "blue",
    fontWeight: "bold",
    paddingRight: 10,
  },
  removeButton: {
    color: "red",
    fontWeight: "bold",
  },
});
