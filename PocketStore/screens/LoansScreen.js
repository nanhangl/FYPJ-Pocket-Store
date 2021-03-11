import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCheckCircle, faTimesCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import {useTheme} from './context/ThemeContext';
import apiReq from '../api'

const LoansScreen = ({route, navigation}) => {
    const [loansFromDb, setLoansFromDb] = useState('');
    const {colors, isDark} = useTheme();

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
        <View style={{backgroundColor:colors.background,display:'flex',flexDirection:'column',height:'100%'}}>
            <Text style={{paddingVertical:15,borderBottomWidth:0.5,borderBottomColor:"#d0d0d0",color:colors.text,width:'100%',textAlign:'center',fontWeight:'bold',fontSize:17}}>My Loans</Text>
            <FlatList
            data={loansFromDb}
            keyExtractor={item => item.LoanId}
            renderItem={item => (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Loan Details', {"loan":loansFromDb[item.index]});
                }} >
                    <View style={{flexDirection:'row',alignItems:'center',padding:15,borderBottomColor:'#d0d0d0',borderBottomWidth:1}}>
                        { statusIcon(item.item.LoanStatus) }
                        <View style={{marginLeft:25}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#888'}}>Id: </Text>
                                <Text style={{color:'#888'}}>{item.item.LoanId}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:colors.text}}>Due Date: </Text>
                                <Text style={{color:colors.text}}>{item.item.DueDate}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:colors.text}}>Loan Items: </Text>
                                <Text style={{color:colors.text}}>{item.item.LoanItems.length}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    );
}

export default LoansScreen;