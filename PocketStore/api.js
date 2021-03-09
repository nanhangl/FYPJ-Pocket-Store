const apiUrl = "https://dpbnqyowib.execute-api.ap-southeast-1.amazonaws.com/v1";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function apiReq(type, payload) {
    return new Promise((resolve, reject) => {
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
                    resolve(responseData);
                })
            }
        }
    })
}

export default apiReq;