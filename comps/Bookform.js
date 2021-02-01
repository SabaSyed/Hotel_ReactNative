import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';

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
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={Styles.HeaderText}>Hotel Booking</Text>
          <Ionicons name="ios-reorder-three-sharp" size={24} color="white" />
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
    justifyContent: 'center',
  },
  header: {
    paddingTop: 20,
    backgroundColor: '#1bedfb',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 2,
    paddingLeft: 2,
    width: '100%',
    alignItems: 'center'
  },
  HeaderText: {
    fontsize: 38,
    color: 'white',
    //fontweight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bottmBody: {
    flex:2,
  },
});
