import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text, TextInput, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import TaskItem from "../components/TaskItem";
import { Keyboard } from "react-native";


export default function TodayView() {
    const [taskListData, setTaskListData] = useState([
        {id: 1, name: 'Zadanie 1', done: false},
        {id: 2, name: 'Zadanie 2', done: false},
        {id: 3, name: 'Zadanie 3', done: false},
        {id: 4, name: 'Zadanie 4', done: false},
        {id: 5, name: 'Zadanie 5', done: false},
        {id: 6, name: 'Zadanie 6', done: false},
        {id: 7, name: 'Zadanie 7', done: false},
        {id: 8, name: 'Zadanie 8', done: false},
        {id: 9, name: 'Zadanie 9', done: false},
        {id: 10, name: 'Zadanie 10', done: false},
        {id: 11, name: 'Zadanie 11', done: false},
        {id: 12, name: 'Zadanie 12', done: false}
    ]);

    const [newTask, setNewTask] = useState("")

    function addTask() {
        if(newTask == "") return;
        Keyboard.dismiss();
        setTaskListData([...taskListData, {id: getNextTaskId(), name: newTask, done: false}])
        setNewTask("")
    }

    function getNextTaskId() {
        let id = Math.max(...taskListData.map(t=>t.id))+1;

        if (id < 0) return 0;

        return id;
    }

    function checkFunction(index) {
        let listCopy = taskListData.slice();
        listCopy.find(item => item.id==index).done = true;
        setTaskListData(listCopy);
    }

    function uncheckFunction(index) {
        let listCopy = taskListData.slice();
        listCopy.find(item => item.id==index).done = false;
        setTaskListData(listCopy);
    }

    function deleteTask(index) {
        let listCopy = taskListData.slice();
        setTaskListData(listCopy.filter(item => item.id != index))
    }

    return (    
        <View style={styles.container}>
            <View style={styles.calendar}>  
            </View>
            <KeyboardAvoidingView style={styles.taskAddView}>
                <TextInput style={styles.textInput} placeholder="Wpisz nazwę zadania" onChangeText={text => setNewTask(text)}>
                    {newTask}
                </TextInput>
                <TouchableOpacity style={styles.taskAddButton} onPress={() => addTask()}>
                    <Text>+</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <View style={styles.list}>
                <FlatList 
                    data={taskListData}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) => (
                        <TaskItem item={item} index={index} checkFunction={checkFunction} uncheckFunction={uncheckFunction} deleteTask={deleteTask}/>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    calendar: {
      flex: 1,
      backgroundColor: '#e23636',
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskAddView: {
        flexDirection: 'row',
        padding: 20
    },
    textInput: {
        flex: 1,
        height: 50,
        fontSize: 20
    },
    taskAddButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e23636"
    },
    list: {
        flex: 6,
    }
  });