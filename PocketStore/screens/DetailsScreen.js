import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const DetailsScreen = () => {

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%',padding:15}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#888'}}>Id: </Text>
                <Text style={{color:'#888'}}>justanexample</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Status: </Text>
                <Text>pending</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Due Date: </Text>
                <Text>8 March 2021</Text>
            </View>
            <TouchableOpacity style={{width:'100%',paddingVertical:10,alignItems:'center',backgroundColor:'#DA525E'}}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Delete Loan</Text></TouchableOpacity>
        </View>
    );
}

export default DetailsScreen;