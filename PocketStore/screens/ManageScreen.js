import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import Toast from 'react-native-toast-message';
import apiReq from '../api'

const ManageScreen = ({route, navigation}) => {
    const [allLoanItems, setAllLoanItems] = useState('');
    const [refreshFlatList, setRefreshFlatList] = useState(false);

    useState(async () => {
        apiReq('allLoans', {}).then(res => {
            if (res.status == "ok") {
                var allLoans = JSON.parse(res.allLoans);
                setAllLoanItems(allLoans.Items);
            } else {
            }
        })
    })

    function updateStatus(loanId, index, newStatus) {
        apiReq('updateStatus', {loanId, newStatus}).then(res => {
            if (res.status == "ok") {
                var items = allLoanItems;
                items[index].LoanStatus = newStatus;
                setAllLoanItems(items);
                setRefreshFlatList(!refreshFlatList);
                Toast.show({
                    text1: 'Status Updated Successfully',
                    text2: `Status of ${loanId} updated to '${newStatus}'`
                  });
            } else {
            }
        })
    }

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',height:'100%',paddingHorizontal:10}}>
            <Toast ref={(ref) => Toast.setRef(ref)} style={{backgroundColor:"#fff",zIndex:2}} />
            <FlatList
            style={{marginVertical:10}}
            data={allLoanItems}
            extraData={refreshFlatList}
            keyExtractor={item => item.LoanId}
            renderItem={(item) => (
                <View style={{shadowColor:'#000',shadowOffset:{width:0,height:4},shadowOpacity:0.25,shadowRadius:3,elevation:3,backgroundColor:'#fff',marginVertical:7.5,borderRadius:3,marginHorizontal:5}}>
                    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#d0d0d0',padding:15,alignItems:'center'}}>
                        <FontAwesomeIcon icon={faUser} />
                        <Text style={{marginLeft:5}}>{item.item.UserId}</Text>
                    </View>
                    <View style={{padding:15}}>
                        <FlatList
                        data={item.item.LoanItems}
                        keyExtractor={item => item.Id}
                        renderItem={(item) => (<Text>{item.item.Name} x {item.item.Qty}</Text>)} />
                    </View>
                    { item.item.LoanStatus == "pending" ?
                    <View style={{flexDirection:'row',marginBottom:15}}>
                        <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:15,marginHorizontal:15,borderWidth:1.5,borderColor:'#6BCF7A',borderRadius:3,width:90,alignItems:'center'}} onPress={() => updateStatus(item.item.LoanId, item.index, 'approved')}><Text style={{color:'#6BCF7A',fontWeight:'bold'}}>Approve</Text></TouchableOpacity>
                        <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:15,borderWidth:1.5,borderColor:'#DA525E',borderRadius:3,width:90,alignItems:'center'}}><Text style={{color:'#DA525E',fontWeight:'bold'}}  onPress={() => updateStatus(item.item.LoanId, item.index, 'rejected')}>Reject</Text></TouchableOpacity>
                    </View>
                    : <Text style={item.item.LoanStatus == "approved" ? {color:"#6BCF7A",marginLeft:15,marginBottom:15} : {color:"#DA525E",marginLeft:15,marginBottom:15}}>Loan {item.item.LoanStatus}</Text> }
                </View>
            )} />
        </View>
    );
}

export default ManageScreen;