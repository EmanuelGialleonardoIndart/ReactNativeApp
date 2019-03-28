import React from 'react';
import { StyleSheet, View} from 'react-native';
import LoginForm from './screens/LoginForm';
import storeConfigure from './Store';
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import LoadingStart from './screens/LoadingStart';
import { createStackNavigator, createAppContainer ,createSwitchNavigator,createDrawerNavigator} from "react-navigation";
import {Provider} from 'react-redux';



let loginStack=createStackNavigator({ loginScreen:LoginForm});
let MainStack=createStackNavigator({mainScreen:MainScreen});
let SecondStack=createStackNavigator({secondScreen:SecondScreen});
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: MainStack,
    navigationOptions: {
      drawerLabel: 'Main screen',
    },
  },
  Screen2: {
    //Title
    screen: SecondStack,
    navigationOptions: {
      drawerLabel: 'Second screen',
    },
  }
});

let Navigation=createAppContainer(createSwitchNavigator(
  {
   AuthLoadingScreen:LoadingStart,
   drawer:DrawerNavigatorExample,
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
