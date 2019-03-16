import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

class Login extends Component {
    state = {    
        email: "",    
        password: ""  
    };
    
    constructor(props) {    
        super(props);
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginPress = this.handleLoginPress.bind(this);  
    }

    handleChangeEmail(text) {    
        this.setState({      
            email: text    
        });  
    }  
    
    handleChangePassword(text) {    
        this.setState({      
            password: text    
        });  
    }  

    handleLoginPress() {    
        alert(      
            `Your email: ${this.state.email}. And your password: ${
                this.state.password      
            }`    
        );  
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.handleChangeEmail}
                    placeholder={"user@email.com"}          
                    style={styles.textInput}        
                /> 
                <TextInput
                    onChangeText={this.handleChangePassword}
                    secureTextEntry={true}          
                    placeholder={"type password"}          
                    style={styles.textInput}        
                />
                <Button title={"Login"} onPress={this.handleLoginPress} />
            </View>
        );
    }
}

export default Login;