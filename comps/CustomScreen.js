import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class CustomScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            id: ''
        }
    }

    handleChangeText = text => this.setState({ text: text })

    sendSignal = () => {

        fetch('http://localhost:5000/doStuff', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name: this.state.text })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ id: data.data })
            })
            .catch(err => console.log(err));

    }

    assignPositiveRatings = (limit) => {
        let ratingStars = [];

        for (let i = 0; i < limit; i++) ratingStars.push(<Text key={i} style={{ color: 'orange' }}>&#9733;</Text>);

        return ratingStars;
    }

    assignNegativeRatings = (limit) => {
        let ratingStars = [];

        for (let i = 0; i < limit; i++) ratingStars.push(<Text key={i} style={{ color: 'grey' }}>&#9733;</Text>);

        return ratingStars;
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    value={this.state.text}
                    onChangeText={text => this.handleChangeText(text)}
                />
                <Text>ID: {this.state.id}</Text>
                <Button
                    title='Do Stuff'
                    onPress={this.sendSignal}
                ></Button>
                <View style={{ flexDirection: 'row' }}>
                    {this.assignPositiveRatings(3)}
                    {this.assignNegativeRatings(2)}
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CustomScreen
