'use strict'
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from 'pages/Home';
import Login from 'pages/Login';
// import SplashScreen from 'pages/SplashScreen'
import Scanner from 'pages/Scanner';

const BottomNavigator = createBottomTabNavigator({
    Home: Home,
    Login: Login,
    QR: Scanner
}, {
    initialRouteName: 'Home' //halaman awal navigasi
});

const AppNavigator = createAppContainer(createStackNavigator({
    BottomNavigator
}, {
    headerMode: 'none' //untuk hide header pada apps
}));

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}