import React, { Component } from "react";
import { render } from "react-dom";
import { Ionicons,Entypo } from '@expo/vector-icons';

import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Panel from "./Panel";

class home extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Panel />
        <View style={Styles.main}>

          <Text style={{marginLeft:13, fontWeight:600,color:'#888888',}}>Recommended</Text>
          <View style={Styles.subcontainer}>
              <Image
                style={Styles.img}
                source={require("../assets/hotels1.jpg")}
              ></Image>
            
            <View style={Styles.textcontainer}>
              <Text style={Styles.text1}>Hotel no. 1</Text>
              <View style={{flexDirection:'row'}}>
                <Entypo name="location-pin" size={15} color="black" />
                <Text style={Styles.text1}>Address 1 2 3 4 5</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Ionicons name="star" size={15} color="yellow" />
                <Ionicons name="star" size={15} color="yellow" />
                <Ionicons name="star" size={15} color="yellow" />
                <Ionicons name="star" size={15} color="yellow" />
                <Ionicons name="star" size={15} color="grey" />
                <Text style={Styles.text1} >Reviews</Text>
                
              </View>
              </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Book</TouchableOpacity>
            </View>
          </View>
                
        </View>
       
      </View>
    );
  }
}
export default home;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
  },
  main: {
    flex: 4,
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 30,
  },
  subcontainer: {
    // flex: 1,
    backgroundColor:'white',
    height: "15%",
    flexDirection: "row",
    margin: 10,
  },
  textcontainer: {
    width: "60%",
    // alignItems:'flex-end',
    justifyContent:'flex-end',
    marginLeft:6,
    
    marginBottom:5,
  },
  text1:{
    color:'#5a5a5a',
    fontWeight:600,
  },
  txt2: {
    width: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    color:'#29c4bc',
    fontWeight:700,
    marginBottom:5,
    marginRight:10,
  },

  img: {
    height: "100%",
    width: "20%",
    borderTopLeftRadius:7,
    borderBottomLeftRadius:7,
  },
});
