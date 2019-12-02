import React ,{ useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';
import BarcodeScreen from './Screens/BarcodeScreen';
import * as firebase from 'firebase';


export default function App() {
    useEffect(()=>{
        let config = {
            apiKey: "AIzaSyBOJmp5WuoQ1uM8O5s-g32e0eHuaxZtWOU",
            authDomain: "my-signup-project.firebaseapp.com",
            databaseURL: "https://my-signup-project.firebaseio.com",
            projectId: "my-signup-project",
            storageBucket: "my-signup-project.appspot.com",
            messagingSenderId: "17173528331",
            appId: "1:17173528331:web:e13d53823dc8cc4a032c0e",
            measurementId: "G-R8V55GMJHC"};
        firebase.initializeApp(config);
    });
  
    return (
        <AppContainer />
    );
}

const AppNavigator = createStackNavigator({
    login: {
        screen: LoginScreen
    },
    signup: {
        screen: SignupScreen
    },
    dashboard: {
        screen: DashboardScreen
    },
    barcode: {
        screen: BarcodeScreen
    }

});

const AppContainer = createAppContainer(AppNavigator);

