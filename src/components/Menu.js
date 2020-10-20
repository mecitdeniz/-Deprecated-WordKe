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
import { play, setLevel } from '../store/actions';


const Menu = (props)=>{
    const { navigation} = props;
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/menu.png')} style={styles.background}>
                <TouchableOpacity style={styles.icon} onPress={()=>{
                    dispatch(setLevel())
                    dispatch(play())
                    navigation.navigate("Game")}}>
                    <Image source={require('../assets/play.png')} style={styles.icon}/>
                </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.icon} onPress={()=>{
                        navigation.navigate("Shop")}}>
                        <Image source={require('../assets/shop.png')} style={styles.icon}/>
                    </TouchableOpacity><TouchableOpacity style={styles.icon} onPress={()=>{
                        navigation.navigate("Shop")}}>
                        <Image source={require('../assets/about.png')} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                
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
        height:100,
        margin:5,
    }
});

export default Menu;