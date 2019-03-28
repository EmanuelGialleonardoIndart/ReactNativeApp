import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={require('../Images/appdrawer.png')}
              style={{ width: 35, height: 35, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

export default NavigationDrawerStructure;