import React,{Component} from 'react';
import { StyleSheet, View} from 'react-native';
import LoginForm from './Components/LoginForm';
import storeConfigure from './Store';
import {Provider} from 'react-redux';

let store=storeConfigure();
type Props={}
class App extends Component<Props>{
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F85DE',
  },
});

export default App;
