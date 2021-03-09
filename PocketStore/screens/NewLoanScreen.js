import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity }  from 'react-native';
import { Input, Button } from 'react-native-elements';

const NewLoanScreen = ({navigation}) => {

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <Button title="Add Items" type="clear" onPress={() => {
                navigation.navigate("Add Items");
            }} />
            <TouchableOpacity style={{width:'95%',paddingVertical:10,alignItems:'center',backgroundColor:'#007aff'}}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Submit</Text></TouchableOpacity>
        </View>
    );
}

export default NewLoanScreen;