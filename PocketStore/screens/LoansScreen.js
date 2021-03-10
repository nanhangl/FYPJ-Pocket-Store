import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const LoansScreen = ({navigation}) => {

    useState(async () => {
        apiReq('myLoans', {}).then(res => {
            if (res.status == "ok") {
                var loans = res.loans;
            } else {

            }
        })
    })

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%',paddingHorizontal:15}}>
            <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15,borderBottomColor:'#d0d0d0',borderBottomWidth:1}}>
                <FontAwesomeIcon icon={faCheckCircle} style={{color:'#6BCF7A'}}/>
                <View style={{marginLeft:25}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#888'}}>Id: </Text>
                        <Text style={{color:'#888'}}>exampleId</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Due Date: </Text>
                        <Text>8 March 2021</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Loan Items: </Text>
                        <Text>1</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default LoansScreen;