import React from "react";
import { View,Text,StyleSheet } from "react-native";


const Task = (props) =>{

    return (
    <View style ={style.item}> 
     <View style={style.itemLeft}>
        <View style={style.square}></View>
        <Text style={style.itemText}>{props.text}</Text>
     </View>
        <View style={style.circular}></View>
    </View>
    )

}

const style =StyleSheet.create({
    item:{
        backgroundColor:"#D5F5E3",
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        
    },
    itemLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#229954",
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:"80%",
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#229954",
        borderWidth:2,
        borderRadius:5,
    },
        
});

export default Task;