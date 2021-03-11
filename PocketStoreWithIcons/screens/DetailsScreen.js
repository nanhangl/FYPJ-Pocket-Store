import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Toast from 'react-native-toast-message';
import apiReq from '../api'

const DetailsScreen = ({route, navigation}) => {
    const loan = route.params.loan;

    function deleteLoan(loanId) {
        apiReq('deleteLoan', {loanId}).then(res => {
            if (res.status == "ok") {
                navigation.navigate('My Loans', {"resetNav":true, "refetchData":true})
            } else {
            }
        })
    }

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%',padding:15}}>
            <Toast ref={(ref) => Toast.setRef(ref)} style={{backgroundColor:"#fff",zIndex:2}} />
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#888'}}>Id: </Text>
                <Text style={{color:'#888'}}>{loan.LoanId}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Status: </Text>
                <Text>{loan.LoanStatus}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Due Date: </Text>
                <Text>{loan.DueDate}</Text>
            </View>
            <FlatList
            data={loan.LoanItems}
            keyExtractor={item => item.Id}
            renderItem={(item) => (
                <View style={{borderBottomColor:"#d0d0d0",borderBottomWidth:1,paddingVertical:10}}>
                    <Text>{item.item.Name} x {item.item.Qty}</Text>
                </View>
            )} />
            { loan.LoanStatus == "pending" ? <TouchableOpacity style={{width:'100%',paddingVertical:10,alignItems:'center',backgroundColor:'#DA525E'}} onPress={() => deleteLoan(loan.LoanId)}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Delete Loan</Text></TouchableOpacity> : <></> }
        </View>
    );
}

export default DetailsScreen;