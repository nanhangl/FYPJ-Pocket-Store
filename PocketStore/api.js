const apiUrl = "https://dpbnqyowib.execute-api.ap-southeast-1.amazonaws.com/v1";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function apiReq(type, payload) {
    return new Promise(async (resolve, reject) => {
        switch(type) {
            case 'signIn': {
                axios.post(apiUrl, {
                    endpoint: '/signIn',
                    email: payload.email,
                    password: payload.password
                })
                .then(function (response) {
                    var responseData = response.data;
                    AsyncStorage.setItem('email', responseData.email || '');
                    AsyncStorage.setItem('role', responseData.role || '');
                    AsyncStorage.setItem('token', responseData.token || '');
                    resolve(responseData);
                })
                break;
            }
            case 'newLoan': {
                const authToken = await AsyncStorage.getItem('token');
                axios.post(apiUrl, {
                    endpoint: '/newLoan',
                    token: authToken,
                    data: payload
                })
                .then(function (response) {
                    var responseData = response.data;
                    resolve(responseData);
                })
                break;
            }
            case 'myLoans': {
                const authToken = await AsyncStorage.getItem('token');
                axios.post(apiUrl, {
                    endpoint: '/myLoans',
                    token: authToken
                })
                .then(function (response) {
                    var responseData = response.data;
                    resolve(responseData);
                })
                break;
            }
        }
    })
}

export default apiReq;