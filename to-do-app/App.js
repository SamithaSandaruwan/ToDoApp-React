import React,{ useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View ,TextInput, Keyboard,map} from 'react-native';
import Task from './components/Task';

export default function App() {

const[task,setTask]=useState();
const[taskItems,setTaskItems]=useState([]);

const handleAddTask =()=>{
  Keyboard.dismiss();
  setTaskItems([...taskItems,task])
  setTask(null);
}

const deleteTask=(index)=>{
  let itemsCopy =[...taskItems];
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);
}



  return (
    <View style={styles.container}>
      {/*Today task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's Tasks</Text>
        <View style={styles.items}>
          {/* All Tasks */}
          {
            taskItems.map((item,index) =>{
              return (
                <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
                  <Task  text={item}/>
                </TouchableOpacity>
              )
              
            })
          }
        </View>
      </View>

      {/*Add a New Task*/}
    <KeyboardAvoidingView
      behavior ={Platform.OS=='android'? "padding" : "height"}
      style ={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text =>setTask(text)}/>


      <TouchableOpacity onPress={() => handleAddTask()}>
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
    backgroundColor: '#82E0AA',
  },
  tasksWrapper:{
    paddingTop:60,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:32,
    color:'#0B5345',
    fontWeight:"bold",
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    fontColor:'#0B5345',
    backgroundColor:"#D5F5E3",
    borderRadius:20,
    borderColor:"#0B53454",
    borderWidth:1,
    width:270
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#D5F5E3",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#0B5345",
    borderWidth:1,
  },
  addText:{
    fontSize:30,
    color:'#0B5345',
  },

});
