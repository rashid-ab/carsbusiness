import React, { Component } from 'react';
import { ActivityIndicator,TouchableHighlight, StatusBar, View,Dimensions,Image,Text,ImageBackground } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// import { useFonts, RussoOne_400Regular } from '@expo-google-fonts/russo-one';
export default (props) => {
    // let [fontsLoaded] = useFonts({
    //     RussoOne_400Regular,
    //   });
    
    return (
      <ImageBackground source={require('./assets/splash_edit.png')} style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" backgroundColor="#0875C4"/>
        <View style={{flex:.4,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:40,color:'white',fontFamily: "RussoOne-Regular",}}>CARS</Text><Text style={{fontSize:40,color:'#0070c0',fontFamily: "RussoOne-Regular",}}>BUSINESS</Text>
            </View>
        </View>
        <View style={{flex:.2,alignItems:'center'}}>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white',fontSize:24,marginRight:10}}>{'\u2022'}</Text><Text style={{fontSize:20,color:'white'}}>Invest in Cars Business</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white',fontSize:24,marginRight:10}}>{'\u2022'}</Text><Text style={{fontSize:20,color:'white'}}>Become profit share holder</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white',fontSize:24,marginRight:10}}>{'\u2022'}</Text><Text style={{fontSize:20,color:'white'}}>Enjoy up to 10% monthly profit</Text>
                </View>
            </View>
        </View>
        <View style={{flex:.4}}>
            <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginHorizontal:20}}>
                <TouchableHighlight style={{justifyContent:'center',borderWidth:2,borderColor:'#0070c0',width:150,height:50,alignItems:'center',borderRadius:10}} onPress={()=>props.navigation.navigate('Dashboard',{url:'https://db.carsbusiness.pk/register'})}>
                    <Text style={{color:'white',fontSize:13,fontWeight:'bold',fontFamily: "RussoOne-Regular"}}>Register</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{justifyContent:'center',borderWidth:2,borderColor:'#0070c0',width:150,height:50,alignItems:'center',borderRadius:10}} onPress={()=>props.navigation.navigate('Dashboard',{url:'https://db.carsbusiness.pk/login'})}>
                    <Text style={{color:'white',fontSize:13,fontWeight:'bold',fontFamily: "RussoOne-Regular"}}>Dashboard</Text>
                </TouchableHighlight>
            </View>
            <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginHorizontal:20,marginTop:20}}>
                
                <TouchableHighlight style={{justifyContent:'center',borderWidth:2,borderColor:'#0070c0',width:150,height:50,alignItems:'center',borderRadius:10}} onPress={()=>props.navigation.navigate('Dashboard',{url:'https://db.carsbusiness.pk/page/contact-us'})}>
                    <Text style={{color:'white',fontSize:13,fontWeight:'bold',fontFamily: "RussoOne-Regular"}}>Contact Us</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{justifyContent:'center',borderWidth:2,borderColor:'#0070c0',width:150,height:50,alignItems:'center',borderRadius:10}} onPress={()=>props.navigation.navigate('Dashboard',{url:'https://carsbusiness.pk/'})}>
                    <Text style={{color:'white',fontSize:13,fontWeight:'bold',fontFamily: "RussoOne-Regular"}}>Updates</Text>
                </TouchableHighlight>
            </View>
            {/* <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#0875C4',marginHorizontal:20}}>
                
            </View> */}
            {/* <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#0875C4',marginHorizontal:20}}>
                <TouchableHighlight style={{justifyContent:'center',paddingVertical:20,alignItems:'center',borderRadius:10}}>
                    <Text style={{color:'white',fontSize:18}}>News</Text>
                </TouchableHighlight>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#0875C4',marginHorizontal:20}}>
                <TouchableHighlight style={{justifyContent:'center',paddingVertical:20,alignItems:'center',borderRadius:10}}>
                    <Text style={{color:'white',fontSize:18}}>Contact Us</Text>
                </TouchableHighlight>
            </View> */}
            {/* <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:20,flexDirection:'row'}}>
                <TouchableHighlight style={{justifyContent:'center',paddingVertical:20,alignItems:'center',backgroundColor:'#0875C4',borderRadius:10}}>
                    <Text style={{color:'white',fontSize:18}}>Register</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{justifyContent:'center',paddingVertical:20,alignItems:'center',backgroundColor:'#0875C4',borderRadius:10}}>
                    <Text style={{color:'white',fontSize:18}}>News</Text>
                </TouchableHighlight>
            </View> */}
        </View>
      </ImageBackground>
    );
}