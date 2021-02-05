import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Text, } from 'react-native'
import { MaterialCommunityIcons, SimpleLineIcons, Feather, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
class hoteldesc extends Component {

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
        fetch('http://localhost:5000/getHotel', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.data })
                console.log(this.state.data);
                console.log(data);
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

            <View style={style.container}>
                <View style={{ flex: 3, }}>
                    <ImageBackground source={require('../assets/hotels1.jpg')} style={style.img}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ flex: 1, alignItems: 'flex-start', margin: 5 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                                    <MaterialCommunityIcons name='keyboard-backspace' size={30} color='white' />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', margin: 10 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                                    <SimpleLineIcons name='menu' size={24} color='white' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={style.mainview}>
                    {
                        this.state.data.map(record => {
                            return (
                                <ScrollView key={record.ID}>
                                    <View style={style.textview}>
                                        <Text style={{ fontWeight: 'bold', color: '#747474' }}>{record.Name}</Text>
                                        <Text style={{ color: '#747474' }}>{record.Address}</Text>
                                    </View>
                                    <View style={style.textview}>
                                        <Text style={{ fontWeight: 'bold', color: '#747474' }}>Details</Text>
                                        <Text style={{ color: '#747474' }}>{record.Description}</Text>
                                    </View>

                                    <View style={style.textview}>
                                        <Text style={{ fontWeight: 'bold', color: '#747474' }}>Amenities:</Text>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            <View style={style.iconview}>
                                                <View style={style.icons}>
                                                    <View style={style.iconsub}>
                                                        <Feather name="wifi" size={32} color="#18c0ff" />
                                                        <Text style={{ size: 5, color: '##747474' }}>Wifi</Text>
                                                    </View>
                                                    <View style={style.iconsub}>
                                                        <Ionicons name="fitness" size={32} color="#18c0ff" />
                                                        <Text style={{ size: 5, color: '##747474' }}>Gym</Text>
                                                    </View>
                                                    <View style={style.iconsub}>
                                                        <MaterialIcons name="free-breakfast" size={32} color="#18c0ff" />
                                                        <Text style={{ size: 5, color: '##747474' }}>Breakfast</Text>
                                                    </View>
                                                    <View style={style.iconsub}>
                                                        <MaterialIcons name="local-bar" size={32} color="#18c0ff" />
                                                        <Text style={{ size: 5, color: '##747474' }}>Lounge</Text>
                                                    </View>
                                                    <View style={style.iconsub}>
                                                        <Entypo name="game-controller" size={32} color="#18c0ff" />
                                                        <Text style={{ size: 5, color: '##747474' }}>Arcade</Text>
                                                    </View>
                                                    <View style={style.iconsub}>
                                                        <Entypo name="flower" size={32} color="#18c0ff" />
                                                        <Text sstyle={{ size: 5, color: '##525151' }}>Garden</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </ScrollView>

                                    </View>
                                    <View style={style.textview2}>
                                        <View style={{ width: '20%', marginLeft: 10, alignItems: 'center', marginBottom: 5, marginTop: 5 }}>
                                            <Text style={{ fontWeight: 'bold', color: '#525151' }}>Price</Text>
                                            <Text style={{ color: '#747474' }}>1000$</Text>
                                        </View>
                                        <View style={{ width: '50%', marginLeft: 10, marginTop: 5, marginBottom: 5, alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 'bold', color: '#525151' }}>Reviews</Text>
                                            <View style={{ flexDirection: 'row' }}>

                                                {this.assignPositiveRatings(record.Reviews)}
                                                {this.assignNegativeRatings(5 - record.Reviews)}

                                            </View>
                                        </View>
                                    </View>
                                    <LinearGradient
                                        style={style.book}
                                        colors={["#18e9ff", "#18c0ff", "#46beff"]}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <TouchableOpacity style={style.book} onPress={() => this.props.navigation.navigate("Third")}>
                                            Book now!
                        </TouchableOpacity>

                                    </LinearGradient>
                                </ScrollView>
                            );
                        })
                    }
                </View>

            </View>
        );
    }
}
export default hoteldesc;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
    },
    img: {
        flex: 3,
        width: '100%',
        // height:'50%',
        ImageBackground: 'red',
    },
    mainview: {
        flex: 4,
    },
    textview: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
    },

    textview2: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        flexDirection: 'row',
    },

    iconview: {
        width: '100%',
        flex: 1
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

    },

    iconsub: {
        width: 'auto',
        margin: 5,
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 7,

    },
    book: {
        alignSelf: 'center',
        margin: 15,
        borderRadius: 30,
        paddingHorizontal: 20,
        color: 'white',
    },
});