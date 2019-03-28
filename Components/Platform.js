import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

class Platform extends Component {
    
    render() {
        const {label,count,peak24}=this.props.platform
        return (
            <View style={styles.box}>
                <Text style={styles.platform}>Platform: {label}</Text>
                    <Text style={styles.rest}>Players now: {count}</Text>
                    <Text style={styles.rest}>Max players today: {peak24}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        borderRadius:15,
        borderBottomColor:"#0D2454",
        borderBottomWidth: 3,
        backgroundColor:'#38B1AE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    platform:{
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color:'white'
        },
    rest:{
        fontSize:20,
        margin:5,
        color:'white'
    }
})

export default Platform;