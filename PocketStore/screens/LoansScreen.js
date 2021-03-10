import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCheckCircle, faTimesCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import apiReq from '../api'

const LoansScreen = ({route, navigation}) => {
    const [loansFromDb, setLoansFromDb] = useState('');

    useEffect(() => {
        apiReq('myLoans', {}).then(res => {
            if (res.status == "ok") {
                var loans = JSON.parse(res.loans);
                setLoansFromDb(loans.Items);
            } else {
            }
        })
    }, [route.params ? route.params["refetchData"] : ""])

    function statusIcon(status) {
        switch (status) {
            case 'pending':
                return <FontAwesomeIcon icon={faClock} style={{color:'#FFCC00'}}/>
            case 'approved':
                return <FontAwesomeIcon icon={faCheckCircle} style={{color:'#6BCF7A'}}/>
            case 'rejected':
                return <FontAwesomeIcon icon={faTimesCircle} style={{color:'#DA525E'}}/>
        }
    }

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%',paddingHorizontal:15}}>
            <FlatList
            data={loansFromDb}
            keyExtractor={item => item.LoanId}
            renderItem={item => (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Loan Details', {"loan":loansFromDb[item.index]});
                }}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15,borderBottomColor:'#d0d0d0',borderBottomWidth:1}}>
                        { statusIcon(item.item.LoanStatus) }
                        <View style={{marginLeft:25}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#888'}}>Id: </Text>
                                <Text style={{color:'#888'}}>{item.item.LoanId}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>Due Date: </Text>
                                <Text>{item.item.DueDate}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text>Loan Items: </Text>
                                <Text>{item.item.LoanItems.length}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    );
}

export default LoansScreen;