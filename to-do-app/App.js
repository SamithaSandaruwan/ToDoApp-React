import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Today task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's Tasks</Text>
        <View style={styles.items}>
          {/* All Tasks */}
          <Task Text={"Task One"}/>
          <Task Text={"Task Two"}/>
        </View>
      </View>

      {/*Add a New Task*/}
    <KeyboardAvoidingView
      behavior ={Platform.OS=='android'? "padding" : "height"}
      style ={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={"Write a task"}></TextInput>


      <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>


    </KeyboardAvoidingView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6CFCB',
  },
  tasksWrapper:{
    paddingTop:60,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    
  },
  input:{
    
  },
  addWrapper:{
    
  },
  addText:{
    
  },

});
