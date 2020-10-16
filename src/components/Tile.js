import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
} from 'react-native';

const Tile = (props)=>{
    const { character } = props;
    return(
        <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
            <Text style={styles.text}>{character}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    tile:{
        width:80,
        height:80,
        borderWidth:0,
        justifyContent:"center",
        alignItems:"center"
      },text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
});

export default Tile;