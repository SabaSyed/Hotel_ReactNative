import React, { Component } from "react";
import { render } from "react-dom";
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

          <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>
          
          <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>

           <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>

          <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>

          <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>

          <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>

          <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
            </View>
          </View>

           <View style={Styles.subcontainer}>
            <Image
              style={Styles.img}
              source={require("../assets/hotel.jpg")}
            ></Image>
            <View style={Styles.txt1}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

            </View>
            <View style={Styles.txt2}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("Hoteldesc")}
          >Hi</TouchableOpacity>
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
    backgroundColor: "#ededed",
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
    height: "10%",
    flexDirection: "row",
    margin: 10,
  },
  txt1: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:6,
  },
  txt2: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    borderRadius: 3,
    height: "100%",
    width: "10",
  },
});
