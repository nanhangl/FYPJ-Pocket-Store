import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity }  from 'react-native';
import { Input, Button } from 'react-native-elements';
import apiReq from '../api'

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const signIn = async () => {
        apiReq('signIn', {email, password}).then(res => {
            if (res.status == "ok") {
                if (res.role == "user") {
                    navigation.navigate('UserHome', {"resetNav": true});
                } else {
                    navigation.navigate('ManagerHome', {"resetNav": true});
                }
            } else {
                setErrMsg("You entered an invalid email or password.");
            }
        })
    }

    return (
        <View style={{backgroundColor:'#fff',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <Image source={require('../assets/inventory_mgmt.png')} style={{width:'80%',height:'40%',resizeMode:'contain'}}/>
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
            <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false}/>
            <TouchableOpacity style={{width:'95%',paddingVertical:10,alignItems:'center',backgroundColor:'#007aff'}} onPress={signIn}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Login</Text></TouchableOpacity>
            <Text style={{color:"#DA525E",marginTop:10}}>{errMsg}</Text>
        </View>
    );
}

export default SignInScreen;