import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native'
import {useTheme} from './context/ThemeContext';
import apiReq from '../api'
import { Toggle } from './context/toggle';

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const {colors, isDark} = useTheme();

    const signIn = async () => {
        apiReq('signIn', {email, password}).then(res => {
            if (res.status == "ok") {
                if (res.role == "user") {
                    navigation.dispatch(
                        CommonActions.reset({
                          index: 1,
                          routes: [
                            { name: 'UserHome' }
                          ],
                        })
                      );
                } else {
                    navigation.dispatch(
                        CommonActions.reset({
                          index: 1,
                          routes: [
                            { name: 'ManagerHome' }
                          ],
                        })
                      );
                }
            } else {
                setErrMsg("You entered an invalid email or password.");
            }
        })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerStyle: {backgroundColor: colors.background,borderBottomColor:"#d0d0d0",borderBottomWidth:0.5},
          headerTintColor: colors.text
        });
    }, [navigation]);

    return (
            <SafeAreaView style={{backgroundColor:colors.background,flexDirection:'column',alignItems:'center',height:'100%'}}>
                <Image source={require('../assets/inventory_mgmt.png')} style={{width:'80%',height:'40%',resizeMode:'contain'}}/>
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} style={{color:colors.text}} />
                <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" secureTextEntry={true} autoCorrect={false} style={{color:colors.text}} />
                <TouchableOpacity style={{width:'95%',paddingVertical:10,alignItems:'center',backgroundColor:'#007aff'}} onPress={signIn}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Login</Text></TouchableOpacity>
                <Text style={{color:"#DA525E",marginTop:10}}>{errMsg}</Text>
                <Toggle />
            </SafeAreaView>
    );
}

export default SignInScreen;