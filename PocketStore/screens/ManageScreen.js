import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons'

const ManageScreen = () => {

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%',paddingHorizontal:15}}>
            <View style={{shadowColor:'#000',shadowOffset:{width:0,height:4},shadowOpacity:0.25,shadowRadius:3,elevation:5,backgroundColor:'#fff',marginTop:15,borderRadius:3}}>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#d0d0d0',padding:15,alignItems:'center'}}>
                    <FontAwesomeIcon icon={faUser} />
                    <Text style={{marginLeft:5}}>example@domain</Text>
                </View>
                <View style={{padding:15}}>
                    <Text>Item x 8</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:15}}>
                    <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:15,marginHorizontal:15,borderWidth:1.5,borderColor:'#6BCF7A',borderRadius:3,width:90,alignItems:'center'}}><Text style={{color:'#6BCF7A',fontWeight:'bold'}}>Approve</Text></TouchableOpacity>
                    <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:15,borderWidth:1.5,borderColor:'#DA525E',borderRadius:3,width:90,alignItems:'center'}}><Text style={{color:'#DA525E',fontWeight:'bold'}}>Reject</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ManageScreen;