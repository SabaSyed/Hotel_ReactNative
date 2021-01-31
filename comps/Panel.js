import React, { Component } from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,

} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export class Filters extends Component {
  static navigationOptions = {
    header: false,
  };
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        {
          // HEADER HERE
        }

        <View style={Styles.headerContainer}>
          <LinearGradient
            style={Styles.headerTopContainer}
            colors={["#18e9ff", "#18c0ff", "#46beff"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <View>
              <Text style={Styles.headerText}>APP NAME</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            style={Styles.headerSearchContainer}
            colors={["#18e9ff", "#18c0ff", "#46beff"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <View>
              <Searchbar
                style={Styles.headerSearchBar}
                placeholder="Search"
                onChangeText={(query) => {
                  this.setState({ firstQuery: query });
                }}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            style={Styles.headerCurveContainer}
            colors={["#18e9ff", "#18c0ff", "#46beff"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <View></View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  headerContainer: {
    flex: 3 / 2,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  headerTopContainer: {
    paddingTop: 10,
    flex: 4,
    //backgroundColor: "#18e4ff",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },

  headerSearchContainer: {
    flex: 3 / 2,
    backgroundColor: "#18e4ff",
    width: "100%",
    justifyContent: "center",
    margin: 0,
    alignItems: "center",
    // backgroundColor: "red",
  },
  headerSearchBar: {
    width: '93%',
    margin: 0,
    alignContent: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
  },
  headerCurveContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#18e4ff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  scrollLabelContainer: {
    height: 50,
    width: "100%",
    marginTop: 5,
    justifyContent: "center",
  },
});

export default Filters;
