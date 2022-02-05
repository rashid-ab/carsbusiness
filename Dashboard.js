import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, View,StyleSheet,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Loader from './Loader';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// ...
export default class MyWebComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { Loadingvisible: true };
  }
  
  showSpinner() {
    console.log('Show Spinner');
    this.setState({ Loadingvisible: true });
}

hideSpinner() {
    console.log('Hide Spinner');
    this.setState({ Loadingvisible: false });
}
  
  render() {
      console.log(this.props.route.params.url)
    return (
      <View style={{ flex: 1 ,backgroundColor:'#f2f3f5'}}>
        <StatusBar barStyle="light-content" backgroundColor="#0875C4"/>
        
        <WebView
          scalesPageToFit
          onLoadStart={() => (this.showSpinner())}
          onLoad={() => (this.hideSpinner())}
          style={{ flex: 1 }}
          source={{ uri: this.props.route.params.url }}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute", top: height / 2, left: width / 2 }}
            size="large"
          />
        )}
        <Loader visible={this.state.Loadingvisible} />
      </View>
    );
}
}