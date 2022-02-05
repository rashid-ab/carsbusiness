import React, { Component } from 'react';
import { ActivityIndicator,TouchableHighlight, StatusBar, View,Dimensions,Image,Text,ImageBackground } from 'react-native';
export default class MyWebComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { Loadingvisible: true };
    }
    
    componentDidMount=()=>{
        setTimeout(()=>{this.props.navigation.replace('Home')}, 3000)
    }
    
    render() {
    return (
      <ImageBackground source={require('./assets/splash.png')} style={{ flex: 1 }}>

      </ImageBackground>
    );
}
}