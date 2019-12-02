import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';
 
export default class DashboardScreen extends React.Component{

  constructor(props){
    super(props)

    this.state = ({
        email: '',
        password : '',
    })
}
static navigationOptions = ({navigation}) => ({
  headerTitle: 'DASHBOARD',
  headerTintColor:'#2f95D6',
  justifyContent:'center',
  headerLeft: null,
  headerRight: <Button 
  style={{margin:10 , padding: 10}}
  onPress={ navigation.getParam('logout')}
  >
  <Text style={styles.buttontext}>Logout</Text>
</Button>,
});

logoutUser = () =>{
    try{
      firebase.auth().signOut().then(()=> this.props.navigation.navigate('login'))
      }
    catch(error){
        console.log(error.toString())

    }
} 

componentDidMount(){
  this.props.navigation.setParams({logout: this.logoutUser})
}

  render(){
  return (
    <View style={styles.container}>
      <Button style={styles.button}
        full
        rounded
        primary
        onPress={() => this.props.navigation.navigate('barcode')}
      >
        <Text style={styles.buttontext}> BarCode Scanner </Text>
      </Button>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
  buttontext: {
    color: 'white',
  }
});