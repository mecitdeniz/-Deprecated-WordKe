import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from "prop-types";


const ShopItem = (props)=>{
    
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../assets/bg1.png')} style={{flex:1,justifyContent:"flex-end"}}>
        {renderButton()}
        </ImageBackground>
        </View>
    );
}

const renderButton = () =>{
    return(
        <TouchableOpacity style={{height:50,backgroundColor:"transparent",justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.text}>Kilitli</Text>
            <Text style={styles.text}>100</Text>
        </TouchableOpacity>
    );
}

ShopItem.prototypes = {
    source: PropTypes.string.isRequired
} 

const styles = StyleSheet.create({
    container:{
        width:120,
        height:180,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth:4,
        margin:3
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
    },
    icon:{
        width:100,
        height:100,
        margin:5,
    }
});

export default ShopItem;