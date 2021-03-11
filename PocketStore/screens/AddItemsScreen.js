import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, I18nManager }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';
import { RectButton } from 'react-native-gesture-handler';
import {useTheme} from './context/ThemeContext';
I18nManager.allowRTL(false);

const AddItemsScreen = ({navigation}) => {
    const ThemeContext = React.createContext('loanItemsQty');
    const [loanItemsQty, setLoanItemsQty] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
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
    const [itemsForLoan, setItemsForLoan] = useState(originalItemsForLoan);
    const {colors, isDark} = useTheme();

    const clearLoanItemQty = (itemId) => {
        var loanQtyArray = loanItemsQty;
        loanQtyArray[itemId] = 0;
        setLoanItemsQty(loanQtyArray);
        setRefreshFlatList(!refreshFlatList);
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={{marginRight:15}} onPress={() => {navigation.navigate("New Loan", {"loanItemsQty":loanItemsQty, "resetNav":true})}}>
                <Text style={{color:"#007aff"}}>Done</Text>
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: colors.background,borderBottomColor:"#d0d0d0",borderBottomWidth:0.5},
          headerTintColor: colors.text
        });
    }, [navigation]);

    const Row = ({ item }) => (
        <RectButton style={styles.rectButton} onPress={() => {
            var originalQty = loanItemsQty;
            isNaN(originalQty[item.id]) ? '' : originalQty[item.id] += 1;
            setLoanItemsQty(originalQty);
            setRefreshFlatList(!refreshFlatList);
        }} >
          <Text style={{width:'50%',fontSize:15, color:colors.text}}>{item.name}</Text>
          <Text style={{width:'50%',fontSize:15, color:colors.text}}>{loanItemsQty[item.id]}</Text>
        </RectButton>
      );
      
      const SwipeableRow = ({ item }) => {
          return (
            <AppleStyleSwipeableRow itemId={item.id} clearLoanItemQty={clearLoanItemQty}>
              <Row item={item}/>
              <View style={{borderBottomColor:"#d0d0d0",borderBottomWidth:1}}></View>
            </AppleStyleSwipeableRow>
          );
      };

      const styles = StyleSheet.create({
        rectButton: {
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 3,
          flexDirection: 'row',
          backgroundColor: colors.background,
          borderBottomWidth: 1
        },
        separator: {
          backgroundColor: 'rgb(200, 199, 204)',
          height: StyleSheet.hairlineWidth,
        }
      });

    return (
        <View style={{backgroundColor:colors.background,display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#e5e5e5',width:'95%',paddingHorizontal:10,marginTop:10,borderRadius:3 }}>
                <FontAwesomeIcon icon={faSearch} />
                <TextInput onChangeText={(text) => {
                    if (text) { 
                        var searchResults = [];
                        for (var id in originalItemsForLoan) {
                            if (originalItemsForLoan[id].name.toLowerCase().includes(text.toLowerCase())) {
                                searchResults.push(originalItemsForLoan[id]);
                            }
                        }
                        if (itemsForLoan.length != 0) {
                            setItemsForLoan(searchResults);
                            setRefreshFlatList(!refreshFlatList);
                        } else {
                            setItemsForLoan([{"id":"-1", "name":"No Items Found"}]);
                        }
                        setRefreshFlatList(!refreshFlatList);
                    } else {
                        setItemsForLoan(originalItemsForLoan);
                        setRefreshFlatList(!refreshFlatList);
                    }
                 }} autoCapitalize='none' autoCompleteType='off' placeholder='Search' style={{marginLeft:5,color:"#000"}} />
            </View>
            {/* <FlatList 
            data = {itemsForLoan}
            renderItem={(item) => (
                    <TouchableOpacity onPress={() => {
                        var originalQty = loanItemsQty;
                        isNaN(originalQty[item.item.id]) ? '' : originalQty[item.item.id] += 1;
                        setLoanItemsQty(originalQty);
                        setRefreshFlatList(!refreshFlatList);
                    }}>
                        <View style={{borderBottomWidth:1,borderBottomColor:"#d0d0d0",paddingVertical:15,flexDirection:'row'}}>
                            <Text style={{width:'50%',fontSize:15}}>{item.item.name}</Text>
                            <Text style={{fontSize:15}}>{loanItemsQty[item.item.id]}</Text>
                        </View>
                    </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            style={{width:'94%', marginTop:5}}
            extraData={refreshFlatList} 
            /> */}
            <FlatList
            data={itemsForLoan}
            keyExtractor={item => item.id}
            extraData={refreshFlatList}
            style={{width:'94%', marginTop:5}}
            renderItem={({ item }) => (
                <SwipeableRow item={item} />
            )} />
        </View>
    );
}

export default AddItemsScreen;