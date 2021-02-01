import React, { Component } from 'react'
import { View,StyleSheet, ImageBackground,Text,  } from 'react-native'
import { MaterialCommunityIcons,SimpleLineIcons,Feather,Ionicons,MaterialIcons,Entypo  } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
class hoteldesc extends Component  {
    render(){   
        return (
            
            <View style={style.container}>
                <ImageBackground source={require('../assets/hotels1.jpg')} style={style.img}>
                   <View style={{flexDirection:'row', width:'100%'}}>
                        <View style={{ flex: 1, alignItems:'flex-start', margin:5}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                                <MaterialCommunityIcons name='keyboard-backspace' size={30} color='white' />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems:'flex-end', margin:10}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                                <SimpleLineIcons name='menu' size={24} color='white'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                
                <View style={style.mainview}>
                    <ScrollView >
                        <View style={style.textview}>
                            <Text style={{fontWeight:'bold' , color:'#747474'}}>Hotel Name</Text>
                            <Text style={{ color:'#747474'}}>Sub heading</Text>
                        </View>
                        <View style={style.textview}>
                            <Text style={{fontWeight:'bold' , color:'#747474' }}>Details</Text>
                            <Text style={{color:'#747474'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</Text>
                        </View>
                        <View style={style.textview}>
                            <Text style={{ color:'#747474'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</Text>
                            
                        </View>
                        <View style={style.textview}>
                            <Text style={{fontWeight:'bold' , color:'#747474'}}>Amenities:</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={style.iconview}>
                                    <View style={style.icons}>
                                        <View style={style.iconsub}>
                                            <Feather name="wifi" size={32} color="#18c0ff" />
                                            <Text style={{size:5, color:'##747474'}}>Wifi</Text>
                                        </View>
                                        <View style={style.iconsub}>
                                            <Ionicons name="fitness" size={32} color="#18c0ff" />
                                            <Text style={{size:5, color:'##747474'}}>Gym</Text>
                                        </View>
                                        <View style={style.iconsub}>
                                            <MaterialIcons name="free-breakfast" size={32} color="#18c0ff" />
                                            <Text style={{size:5, color:'##747474'}}>Breakfast</Text>
                                        </View>
                                        <View style={style.iconsub}>
                                            <MaterialIcons name="local-bar" size={32} color="#18c0ff" />
                                            <Text style={{size:5, color:'##747474'}}>Lounge</Text>
                                        </View>
                                        <View style={style.iconsub}>
                                            <Entypo name="game-controller" size={32} color="#18c0ff" />
                                            <Text style={{size:5, color:'##747474'}}>Arcade</Text>
                                        </View>
                                        <View style={style.iconsub}>
                                            <Entypo name="flower" size={32} color="#18c0ff" />
                                            <Text sstyle={{size:5, color:'##525151'}}>Garden</Text>
                                        </View>
                                        

                                    </View>
                                </View>
                            </ScrollView>
                            
                        </View>
                        <View style={style.textview2}>
                            <View style={{width:'20%', marginLeft:10, alignItems:'center', marginBottom:5 , marginTop:5}}>
                                <Text style={{fontWeight:'bold' , color:'#525151'}}>Price</Text> 
                                <Text style={{color:'#747474'}}>1000$</Text> 
                            </View> 
                            <View style={{width:'50%', marginLeft:10, marginTop:5, marginBottom:5, alignItems:'center'}}>
                                <Text style={{fontWeight:'bold' , color:'#525151'}}>Reviews</Text> 
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons name="star" size={15} color="yellow" />
                                    <Ionicons name="star" size={15} color="yellow" />
                                    <Ionicons name="star" size={15} color="yellow" />
                                    <Ionicons name="star" size={15} color="yellow" />
                                    <Ionicons name="star" size={15} color="grey" /> 
                                </View>
                            </View> 
                        </View> 
                        <LinearGradient
                        style={style.book}
                        colors={["#18e9ff", "#18c0ff", "#46beff"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity style={style.book}> 
                            Book now!
                        </TouchableOpacity> 
                        
                    </LinearGradient>
                    </ScrollView>
                </View> 

            </View> 
        );
    }
} 
export default hoteldesc;
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'vertical',
        backgroundColor: "#f7f7f7",
    },
    img:{
        flex:3,
        width:'100%',
    },
    mainview:{
        flex:4,
    },
    textview:{
        // backgroundColor:'white',
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        padding:5,
    },

    textview2:{
        // backgroundColor:'white',
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        padding:5,
        flexDirection:'row',

    },

    iconview:{
         width:'100%',
          flex:1
    },
    icons:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'

    },

    iconsub:{
        width:'auto',
        margin:5,
        alignItems:'center',
        marginLeft:7,
        marginRight:7,

    },
    book:{
        alignSelf:'center',
        margin:15,
        borderRadius :30,
        paddingHorizontal:20,
        color:'white',
    },
});