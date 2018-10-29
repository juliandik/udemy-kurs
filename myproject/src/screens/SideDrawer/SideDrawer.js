import React, {Component} from 'react';
import { Platform, View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {
    render () {
        return (
            <View style={[
                styles.container, 
                {width: Dimensions.get("window").width * 0.8}
                ]}
                >
                <Text>SideDrawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 22 : 44,
        backgroundColor: "white",
        flex: 1,
    }
})

export default SideDrawer;