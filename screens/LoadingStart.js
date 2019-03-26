import React, { Component } from 'react';
import {StyleSheet,Image,View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class LoadingStart extends Component {
    constructor(props){
        super(props);
        this.obtenerToken();
    }
    obtenerToken = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'App' : 'login');
      };
    render() {
        return (
            <View style={styles.container}>
                <Image   
                    source={require('../Images/loading4.gif')}  
                    style={{width: 200, height: 200 }}
                />
            </View>           
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
    },
  });

export default LoadingStart;