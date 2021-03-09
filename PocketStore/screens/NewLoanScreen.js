import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native'

const NewLoanScreen = ({route, navigation}) => {
    const [loanItemsWithQty, setLoanItemsWithQty] = useState('');
    const [refreshFlatList, setRefreshFlatList] = useState(false);
    const originalItemsForLoan = [
        {
            "id": "0",
            "name": "Table"
        },
        {
            "id": "1",
            "name": "Chair"
        },
        {
            "id": "2",
            "name": "Projector"
        },
        {
            "id": "3",
            "name": "Speaker"
        },
        {
            "id": "4",
            "name": "DSLR"
        },
        {
            "id": "5",
            "name": "Video Camera"
        },
        {
            "id": "6",
            "name": "Tripod"
        },
        {
            "id": "7",
            "name": "Laptop"
        },
        {
            "id": "8",
            "name": "Monitor"
        },
        {
            "id": "9",
            "name": "TV"
        },
        {
            "id": "10",
            "name": "Keyboard"
        },
        {
            "id": "11",
            "name": "Mouse"
        }
    ];

    React.useLayoutEffect(() => {
    if (route.params) {
        const resetNav = route.params["resetNav"];
        if (resetNav) {
            navigation.dispatch(
                CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'UserHome' }
                ],
                }))
        }
    }   
    }, [navigation]);

    if (route.params) {
        const loanItemsQty = route.params["loanItemsQty"];
        if (loanItemsQty) {
            var loanItemsTemp = [];
            for (var id in originalItemsForLoan) {
                if (loanItemsQty[id] > 0) {
                    loanItemsTemp.push({"id":originalItemsForLoan[id].id, "name":originalItemsForLoan[id].name, "qty":loanItemsQty[id]})
                }
            }
            setLoanItemsWithQty(loanItemsTemp);
            //setRefreshFlatList(!refreshFlatList);
        }
    }

    return (
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <Button title="Add Items" type="clear" onPress={() => {
                navigation.navigate("Add Items");
            }} />
            <FlatList 
            data={loanItemsWithQty}
            extraData={refreshFlatList}
            renderItem={item => (
                <Text>{item.item.name} x {item.item.qty}</Text>
            )}
            keyExtractor={item => item.id} />
            <TouchableOpacity style={{width:'95%',paddingVertical:10,alignItems:'center',backgroundColor:'#007aff'}}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Submit</Text></TouchableOpacity>
        </View>
    );
}

export default NewLoanScreen;