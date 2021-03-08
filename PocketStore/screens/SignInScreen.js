import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity }  from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{backgroundColor:'#fff',flexDirection:'column',alignItems:'center',height:'100%'}}>
            <Image source={require('../assets/inventory_mgmt.png')} style={{width:'80%',height:'40%',resizeMode:'contain'}}/>
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
            <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false}/>
            <TouchableOpacity style={{width:'95%',paddingVertical:10,alignItems:'center',backgroundColor:'#007aff'}}><Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Login</Text></TouchableOpacity>
        </View>
    );
}

export default SignInScreen;