import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: "",
    };
    
    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };
    
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === ""){
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
      }

    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="An Awesome Place"
                    value={this.state.placeName} 
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.textInput}
                    />
                <TouchableOpacity
                    style={styles.placeInput}
                    onPress={this.placeSubmitHandler}
                >
                    <Text style={styles.textStyle}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    inputContainer: {
        width:"100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 5,
        borderBottomEndRadius: 10,
        width: "60%",
    },
    placeInput: {
        width: "30%",
        backgroundColor: "#608FFF",
        height: 30,
        flexDirection: "row",
        alignItems:"center",
        borderRadius: 10,    
    },
    textStyle: {
        alignItems:"center",
        textAlign: "center",
        color: "white",
        width: "100%",
        fontWeight: "bold",
    },
        placeButton: {
        width: "70%",
    },
})

export default PlaceInput;