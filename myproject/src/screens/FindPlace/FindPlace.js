import React, { Component } from "react";
import {View, Text } from "react-native";
import {connect} from 'react-redux';

import PlaceList from "../../component/PlaceList/PlaceList"

class FindPlaceScreen extends Component {
    itemSelectedHander = key => {
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: this.props.places.find(palce => {
                return place.key === key;
            }).name
        });
    }
    
    render () {
        return (
            <View>
         
                    <PlaceList places={this.props.places} onItemSelected/>
               
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);