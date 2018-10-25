import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet  } from "react-native";

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={this.loginHandler}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    loginButton: {
        width: 100,
        backgroundColor: "#608FFF",
        height: 30,
        flexDirection: "row",
        alignItems:"center",
        borderRadius: 15,    
    },
    loginText: {
        alignItems:"center",
        textAlign: "center",
        color: "white",
        width: "100%",
        fontWeight: "bold",
    },
})

export default AuthScreen;