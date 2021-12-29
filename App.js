import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  //const courseGoals[courseGoalItems, setCourseGoals] = useState([]);
  const addGoalHandler = () =>{
    console.log(enteredGoal);

  }

  return(
          <View style = {styles.screen}>
            <View style = {styles.inputContainer}>
              <TextInput
              placeholder = "Project Goal"
              style = {style = styles.input}
              onChangeText = {goalInputHandler}
              value = {enteredGoal}
              />
              <Button title = "Add" onPress = {addGoalHandler} />
            </View>
            <View />
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
  }

});


//***********************
          //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
//***********************
