import React, { Component } from 'react';
import {View,Text,TouchableHighlight,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



class MainScreen extends Component {
    static navigationOptions =({navigation})=> {
        return{
        title:'Main screen',
        headerStyle:{
            backgroundColor:'blue',
            borderBottomColor: "black",
            borderBottomWidth:2
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
        headerRight: (
            <Button
              onPress={navigation.getParam("cerrarSesion")}
              title="Cerrar sesion"
              color="black"
            />
          ),
      }};
    componentDidMount(){
        this.props.navigation.setParams({ cerrarSesion: this.cerrarSesion });
    }  
    cerrarSesion=async()=>{
        console.log(await AsyncStorage.getItem("token"));
        await AsyncStorage.removeItem("token");
        this.props.navigation.navigate("login");
    }
    render() {
        return (
            <View>
                
            </View>
        );
    }
}

export default MainScreen;