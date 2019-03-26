import React from 'react';
import { StyleSheet, View} from 'react-native';
import LoginForm from './screens/LoginForm';
import storeConfigure from './Store';
import MainScreen from './screens/MainScreen';
import LoadingStart from './screens/LoadingStart';
import { createStackNavigator, createAppContainer ,createSwitchNavigator} from "react-navigation";
import {Provider} from 'react-redux';



let loginStack=createStackNavigator({ loginScreen:LoginForm});
let appStack=createStackNavigator({mainScreen:MainScreen});
let Navigation=createAppContainer(createSwitchNavigator(
  {
   AuthLoadingScreen:LoadingStart,
   App:appStack,
   login:loginStack
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  }
  ));

let store=storeConfigure();
class App extends React.Component{
  render() {
    return (
      <Provider store={store}>        
          <Navigation/>        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
