import React, { Component } from 'react';
import {fetchBtf4Players} from '../actions/btf4Actions';
import {ScrollView,View,StyleSheet,Image} from 'react-native';
import {connect} from "react-redux";
import Platform from './Platform';

class PlayersInfo extends Component {
    state={
        attempt:false
    }
    componentDidMount(){
        this.props.fetchBtf4Players();
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.info.attempt)
        this.setState({
            attempt:nextProps.info.attempt
        })
    }
    render() {
        const{data}=this.props.info;
        return (
            <View>
            {this.state.attempt?
            <View style={styles.container}>
                <Image   
                    source={require('../Images/loading4.gif')}  
                    style={{width: 200, height: 200 }}
                />
            </View>
            :
            <ScrollView style={{backgroundColor:'#0D2454'}}>
            {Object.values(data).map(platform=>(
                <Platform
                    platform={platform}
                    key={platform.label}
                />
            ))
            }
         </ScrollView>}
            
            </View>
        );
    }
}

mapStateToProps=(state)=>{
  return{
    info:state.btf4
  }      
}
const styles = StyleSheet.create({
    container: {
      height:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#0D2454'
    },
  });

export default connect(mapStateToProps,{fetchBtf4Players})(PlayersInfo);