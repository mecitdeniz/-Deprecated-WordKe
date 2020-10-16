import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

const CoinBar = (props)=>{

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>{props.coins}</Text>
                <Image source={require('../assets/coin.png')} style={styles.icon}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.diamonds}</Text>
                <Image source={require('../assets/diamond.png')} style={styles.icon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:100,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
    textContainer:{
      flexDirection:"row",
      alignItems:"center",
      height:40,
      marginRight:5
    },
    icon:{
        width:40,
        height:40
    }
});

export default CoinBar;