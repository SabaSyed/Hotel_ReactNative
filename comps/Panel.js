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
            <View style={Styles.headertextcontainer}>
              <Text style={Styles.headerText}>Hotel reservation</Text>
            </View>

            <View style={Styles.headerSearchContainer}>
              <Searchbar
                style={Styles.headerSearchBar}
                placeholder="Search"
                onChangeText={(query) => {
                  this.setState({ firstQuery: query });
                }}
              />
            </View>

          </LinearGradient>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
  },
  headerTopContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headertextcontainer: {
    width: '100%',
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },

  headerText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },

  headerSearchContainer: {
    flex: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Filters;
