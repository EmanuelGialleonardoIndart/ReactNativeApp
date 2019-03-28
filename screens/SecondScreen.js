import React, { Component } from 'react';
import {View,Button,Text} from 'react-native';
import NavigationDrawerStructure from '../Components/DrawerMenu';
import AsyncStorage from '@react-native-community/async-storage';

class SecondScreen extends Component {
    static navigationOptions =({navigation})=> {
        return{
        title:'Second screen',
        headerStyle:{
            backgroundColor:'black',
            borderBottomColor: "#0D2454",
            borderBottomWidth:2
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,  
        headerRight: (
            <Button
              onPress={navigation.getParam("cerrarSesion")}
              title="Cerrar sesion"
              color="#38B1AE"
            />
          ),
      }};
    componentDidMount(){
        this.props.navigation.setParams({ cerrarSesion: this.cerrarSesion });
    }   
    cerrarSesion=async()=>{
        await AsyncStorage.removeItem("token");
        this.props.navigation.navigate("login");
    }
    render() {
        return (
            <View style={{backgroundColor:'#38B1AE',width:'100%',height:'100%',justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color:"white",fontSize:20}}>Welcome to second screen! :v</Text>
            </View>
        );
    }
}

export default SecondScreen;