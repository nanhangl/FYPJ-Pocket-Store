import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const DetailsScreen = () => {

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%'}}>
            <View>
                <Text>Id: </Text>
                <Text>justanexample</Text>
            </View>
        </View>
    );
}

export default DetailsScreen;