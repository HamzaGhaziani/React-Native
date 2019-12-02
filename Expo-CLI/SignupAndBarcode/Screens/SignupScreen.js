import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from 'firebase';



export default class SignupScreen extends React.Component{

    constructor(props){
        super(props)

        this.state = ({
            email: '',
            password : '',
        })
    }

    signUpUser = (email,password) => {
        try{
            firebase.auth().createUserWithEmailAndPassword(email,password).then(() => this.props.navigation.navigate('dashboard'))
        }
        catch(error){
            console.log(error.toString())

        }

    }
    
    static navigationOptions = {
        headerTitle: 'SIGNUP PAGE',
        headerTintColor:'#2f95D6',
        justifyContent:'center',
        headerLeft: null,
    }
    render(){
    return (
        <Container style={styles.container}>
            <Text>SIGNUP PAGE:</Text>
            <Form>
                <Item floatingLabel>
                    <Label> Email: </Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(email) => this.setState({email})}
                    />
                </Item>
                <Item floatingLabel>
                    <Label> Password: </Label>
                    <Input
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                </Item>
                <Button style={styles.button}
                    full
                    rounded
                    success
                    onPress={() => this.signUpUser(this.state.email,this.state.password)}
                >
                    <Text style={styles.buttontext}> Submit </Text>
                </Button>
                <Button style={styles.button}
                    full
                    rounded
                    primary
                    onPress={() => this.props.navigation.navigate('login')}
                >
                    <Text style={styles.buttontext}> Already a User </Text>
                </Button>
            </Form>
        </Container>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        marginTop: 10,
    },
    buttontext: {
        color: 'white',
    }

});
