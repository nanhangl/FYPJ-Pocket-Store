import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native'
import {useTheme} from './context/ThemeContext';
import apiReq from '../api'
import Toast from 'react-native-toast-message';

const NewLoanScreen = ({route, navigation}) => {
    const [loanItemsWithQty, setLoanItemsWithQty] = useState('');
    const [refreshFlatList, setRefreshFlatList] = useState(false);
    const [addItemsTitle, setAddItemsTitle] = useState('Add Items');
    const [resetQty, setResetQty] = useState('false');
    const {colors, isDark} = useTheme();
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

        useEffect(() => {
            if (route.params) {
                const loanItemsQty = route.params["loanItemsQty"];
                if (loanItemsQty) {
                    if (loanItemsQty != [0,0,0,0,0,0,0,0,0,0,0,0]) {
                        setAddItemsTitle('Edit Items');
                    }
                    var loanItemsTemp = [];
                    for (var id in originalItemsForLoan) {
                        if (loanItemsQty[id] > 0) {
                            loanItemsTemp.push({"id":originalItemsForLoan[id].id, "name":originalItemsForLoan[id].name, "qty":loanItemsQty[id].toString()})
                        }
                    }
                    setLoanItemsWithQty(loanItemsTemp);
                }
            }
        }, [route.params ? JSON.stringify(route.params["loanItemsQty"]) : ""])

    const addNewLoan = async () => {
        apiReq('newLoan', JSON.stringify(loanItemsWithQty)).then(res => {
            if (res.status == "ok") {
                setLoanItemsWithQty('');
                setResetQty(true);
                setAddItemsTitle('Add Items');
                    Toast.show({
                      text1: 'Loan Created Successfully'
                    });
            } else {
                console.log("err")
            }
        })
    }

    const goAddItems = () => {
        if (route.params) {
            if (resetQty) {
                setResetQty(false);
                navigation.navigate("Add Items");
            } else {
                navigation.navigate("Add Items", { "currentLoanItemsQty": route.params["loanItemsQty"] });
            }
        } else {
            navigation.navigate("Add Items");
        }
    }

    return (
        <View style={{backgroundColor: colors.background,display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <Text style={{paddingVertical:15,borderBottomWidth:0.5,borderBottomColor:"#d0d0d0",color:colors.text,width:'100%',textAlign:'center',fontWeight:'bold',fontSize:17}}>New Loan</Text>
            <Toast ref={(ref) => Toast.setRef(ref)} style={{backgroundColor:colors.background,zIndex:2}} />
            <Button title={addItemsTitle} type="clear" onPress={goAddItems} />
            <FlatList 
            data={loanItemsWithQty}
            extraData={refreshFlatList}
            renderItem={item => (
                <Text style={{color:colors.text}}>{item.item.name} x {item.item.qty}</Text>
            )}
            keyExtractor={item => item.id} />
            <TouchableOpacity style={{width:'95%',paddingVertical:10,alignItems:'center',backgroundColor:'#007aff',marginBottom:15}} onPress={addNewLoan}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Submit</Text></TouchableOpacity>
        </View>
    );
}

export default NewLoanScreen;