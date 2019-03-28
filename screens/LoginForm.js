import React, { Component } from "react";
import {login,login_attempt,login_fail} from "../actions/loginActions";
import {connect} from "react-redux";
import {Text,StyleSheet,View,TextInput,ImageBackground,TouchableHighlight,Image,} from "react-native";

class LoginView extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle:{
      backgroundColor:'black',
      borderBottomColor: "black",
      borderBottomWidth:2
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color:'white'
    },
  };
  state = {
    username: "",
    password: "",
    error:false,
    attempt:false,
    message:''
  };
  componentWillReceiveProps(nextProps){
    const{error,attempt,message}=nextProps.info;
    this.setState({
        error:error,
        attempt:attempt,
        message:message
    })
}

 /* probar=async()=>{
    let value=await AsyncStorage.getItem("token")
    console.log(value);
  }*/

  onClickListener = () => {
    this.props.login_attempt();
    const { username, password } = this.state;
    if (username === "" || password === "") {
      this.props.login_fail("you must complete all fields")
      return;
    }
    let credentials={
      username,
      password
    }
    this.props.login(credentials,this.props.navigation);
  };

  render() {
    return (
        <ImageBackground source={require("../Images/fondo.jpg")} style={styles.ImageBackground}>
        <Text style={styles.welcome}>Authentication Api</Text>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener()}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        {this.state.error ? (
          <View style={styles.error}>
            <Text style={styles.errorText}>
               {this.state.message}
            </Text>
          </View>
        ) : null}
        {this.state.attempt?(
          <Image   
          source={require('../Images/loading4.gif')}  
          style={{width: 100, height: 100 }}
          />
        ):null}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  ImageBackground:{
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  error:{
      borderRadius:10,
      backgroundColor:'red',
      width:250,
      height:50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
  },
  errorText:{
      color:'white'
  },
  welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color:'white'
      },  
  inputContainer: {
      borderBottomColor: "#F5FCFF",
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center"
  },
  inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: "#FFFFFF",
      flex: 1
  },
  inputIcon: {
      width: 30,
      height: 30,
      marginLeft: 15,
      justifyContent: "center"
  },
  buttonContainer: {
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: 250,
      borderRadius: 30
  },
  loginButton: {
      backgroundColor: "#00b5ec"
  },
  loginText: {
      fontSize:20,
      color: "white"
  }
});
const mapStateToProps=state=>{
  return{
    info:state.login
  }
}

export default connect(mapStateToProps,{login,login_attempt,login_fail})(LoginView);
