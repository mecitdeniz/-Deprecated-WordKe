import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setLevel } from '../store/actions';


const Menu = (props)=>{
    const { navigation} = props;
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/menu.png')} style={styles.background}>
                <TouchableOpacity style={styles.icon} onPress={()=>{
                    dispatch(setLevel())
                    navigation.navigate("Game")}}>
                    <Image source={require('../assets/play.png')} style={styles.icon}/>
                </TouchableOpacity>
                <Text style={[styles.text,{color:"black"}]}>Oyna</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
    background:{
        width:350,
        height:350,
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        width:100,
        height:100
    }
});

export default Menu;