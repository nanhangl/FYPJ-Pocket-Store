import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AddItemsScreen = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#e5e5e5',width:'95%',paddingHorizontal:10,marginTop:10,borderRadius:50 }}>
                <FontAwesomeIcon icon={faSearch} />
                <TextInput value={searchValue} onChangeText={setSearchValue} autoCapitalize='none' autoCompleteType='off' placeholder='Search' style={{marginLeft:5}} />
            </View>
        </View>
    );
}

export default AddItemsScreen;