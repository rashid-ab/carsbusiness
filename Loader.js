import React from 'react';
import {Image,Text,View} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import * as Animatable from 'react-native-animatable';
export default class Loader extends React.Component {
    // icon = () => {
    //     return(
    //         <Image source={require('../../assets/icon.png')} style={{width:200,height:200}}/>
    //     )
    // }
    render() {
        return (
            <OrientationLoadingOverlay
                visible={this.props.visible}
                >
                <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" style={{ textAlign: 'center',alignItems:'center',width:100,height:100 }}>
                    <Image source={require('./assets/loader.png')} />
                    <Text style={{color:'#0070c0',fontSize:18,fontWeight:'bold'}}>Loading...</Text>
                </Animatable.View>
            </OrientationLoadingOverlay>
            
        );
        }
}
