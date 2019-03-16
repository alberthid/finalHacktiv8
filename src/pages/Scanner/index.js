import React, {Component} from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Scanner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>This page use for scan QR!</Text>
            </View>
        );
    }
}

export default Scanner;