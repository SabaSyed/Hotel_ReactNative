import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


class Bookform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }

    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2050, 6, 3);
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';


        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Hoteldesc")}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={Styles.HeaderText}>Hotel Booking</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Hoteldesc")}>
                        <Ionicons name="ios-reorder-three-sharp" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={Styles.body}>
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        todayBackgroundColor="#f2e6ff"
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={this.onDateChange}
                    />
                </View>

                <View style={Styles.bottmBody}>
                    <View style={{ marginLeft: 20, marginTop: 80, }}>

                        <Text style={{ fontWeight: 'bold', margin: 5 }}>From:</Text>
                        <Text> {startDate}</Text>

                        <Text style={{ fontWeight: 'bold', margin: 5 }}>To:</Text>
                        <Text> {endDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', margin: 5 }}>No. of Guests: </Text>
                        <TextInput
                            style={{ backgroundColor: '#f2e6ff', borderRadius: 5, width: 50, marginLeft: 20, padding: 5, margin: 5 }}
                            keyboardType='numeric'
                            // onChangeText={(text) => this.onChanged(text)}
                            // value={this.state.myNumber}
                            maxLength={10} />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', margin: 5 }}>Rooms: </Text>
                        <TextInput
                            style={{ backgroundColor: '#f2e6ff', borderRadius: 5, width: 50, marginLeft: 20, padding: 5, margin: 5 }}
                            keyboardType='numeric'
                            // onChangeText={(text) => this.onChanged(text)}
                            // value={this.state.myNumber}
                            maxLength={10} />
                    </View>
                    <LinearGradient
                        style={Styles.bookgradient}
                        colors={["#18e9ff", "#18c0ff", "#46beff"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity style={Styles.book} onPress={() => this.props.navigation.navigate("Form2")}>
                            Next
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
            </View>
        );
    }
}
export default Bookform;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        paddingTop: 20,
        backgroundColor: '#1bedfb',
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 2,
        paddingLeft: 2,
        width: '100%',
        alignItems: 'flex-start',
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
    },
    HeaderText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    body: {
        flex: 0.5,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
    },
    bottmBody: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bookgradient: {
        alignSelf: 'center',
        margin: 15,
        // marginTop: 50,
        borderRadius: 30,
        paddingHorizontal: 20,

    },
    book: {
        alignSelf: 'center',
        margin: 15,
        borderRadius: 30,
        paddingHorizontal: 20,
        color: 'white',
    },
});
