import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = props => {
      return(
        <FlatList 
            style={styles.listContainter}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                    placeName={info.item.name} 
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
            />
      );
}; 

const styles = StyleSheet.create({

    listContainter: {  
      width: "100%"
    }
  
});

export default PlaceList;