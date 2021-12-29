import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };


  const addGoalHandler = () =>{
    setCourseGoals(currentGoals => [...courseGoals, {id: Math.random().toString(), value:enteredGoal}]);

  };

  return(
          <View style = {styles.screen}>
            <View style = {styles.inputContainer}>
              <TextInput
              placeholder = "Project Goal"
              style = {styles.input}
              onChangeText = {goalInputHandler}
              value = {enteredGoal}
              />
              <Button title = "Add" onPress = {addGoalHandler} />
            </View>
            <FlatList
            keyExtractor = {(item, index) => item.id}
            data = {courseGoals} renderItem = {itemData => (
              <View style = {styles.listItem}>
              <Text> {itemData.item.value} </Text>
              </View>
            )}
            />
          </View>







          //   const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
          //   return (
          //     <View style={styles.container}>
          //       <Text>{outputText}</Text>
          //       <Button title = "Change Text" onPress = {() => setOutputText('Text has changed!')}/>
          //     </View>
          //   );
          // }
          //
          // const styles = StyleSheet.create({
          //   container: {
          //     flex: 1,
          //     backgroundColor: '#fff',
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //   },
          // });




  );
}
const styles = StyleSheet.create({
  screen:{
      padding: 50
  },

  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },

  listItem:{
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,


  }

});
