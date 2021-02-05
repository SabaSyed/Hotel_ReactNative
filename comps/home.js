
import { Ionicons, Entypo } from '@expo/vector-icons';
import React, { Component } from "react";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

class home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Hname: '',
      address: '',
      review: '',
      data: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/getAll', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.data })
        console.log(this.state.data);
      })
      .catch(err => console.log(err));

  }



  assignPositiveRatings = (review) => {
    let ratingStars = [];

    for (let i = 0; i < review; i++) ratingStars.push(<Text key={i} style={{ color: 'orange' }}>&#9733;</Text>);

    return ratingStars;
  }

  assignNegativeRatings = (review) => {
    let ratingStars = [];

    for (let i = 0; i < review; i++) ratingStars.push(<Text key={i} style={{ color: 'grey' }}>&#9733;</Text>);

    return ratingStars;
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        {/* <Panel /> */}
        <View style={Styles.headerContainerpanel}>
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
        <View style={{ flex: 3 }}></View>


        <View style={Styles.main}>

          <Text style={{ marginLeft: 13, fontWeight: 600, color: '#888888', }}>Recommended</Text>
          {
            this.state.data.map(record => {
              return (
                <View key={record.ID} style={Styles.subcontainer}>
                  <Image
                    style={Styles.img}
                    source={require("../assets/hotels1.jpg")}
                  ></Image>

                  <View style={Styles.textcontainer}>
                    <Text style={Styles.text1}>{record.Name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo name="location-pin" size={15} color="black" />
                      <Text style={Styles.text1}>{record.Address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                      {this.assignPositiveRatings(record.Reviews)}
                      {this.assignNegativeRatings(5 - record.Reviews)}
                      <Text style={Styles.text1} >Reviews</Text>

                    </View>
                  </View>
                  <View style={Styles.txt2view}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Hoteldesc", { id: record.ID })}>

                      <Text style={Styles.txt2}>
                        Check!
              </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          }


        </View>

      </SafeAreaView >
    );
  }
}
export default home;
const Styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "#f4f4f4",
    // backgroundColor: 'black'
  },

  headerContainerpanel: {
    // flex: 1,
    width: "100%",
  },

  headerTopContainer: {
    // flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 200
  },

  main: {
    // flex: 4,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    marginTop: 30,
  },
  subcontainer: {
    width: "100%",
    backgroundColor: 'white',
    height: "15%",
    flexDirection: "row",
    margin: 5
  },
  textcontainer: {
    width: "60%",
    justifyContent: 'flex-end',
    marginLeft: 6,
    marginBottom: 5,
  },
  text1: {
    color: '#5a5a5a',
    fontWeight: 600,
  },
  txt2view: {
    width: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 5,
    marginRight: 10,
  },
  txt2: {
    color: '#29c4bc',
    fontWeight: 700,
  },

  img: {
    height: "100%",
    width: "20%",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },


  headertextcontainer: {
    width: '100%',
    // flex: 4,
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
    // flex: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
