import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector, useDispatch } from 'react-redux';

import { play } from '../store/actions';

const WinAlert = (props)=>{
    const dispatch = useDispatch();

    return(
        <AwesomeAlert
        show={1}
        showProgress={false}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
        useNativeDriver={true}
        alertContainerStyle={{flex:1}}
        overlayStyle={{flex:1,backgroundColor:"transparent"}}
        contentContainerStyle={{backgroundColor:"transparent"}}
        customView={
        <ImageBackground source={require('../assets/menu.png')} style={styles.container}>
            <Image source={require('../assets/win.png')}
            style={styles.header}/>
            <View style={styles.row}>
                <Text style={styles.text}>10</Text>
                <Image source={require('../assets/diamond.png')} style={styles.icon}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>100</Text>
                <Image source={require('../assets/coin.png')} style={styles.icon}/>
            </View>
            <TouchableOpacity
            onPress={()=>{ dispatch(play()) }}
            style={[styles.button,{backgroundColor:"#FFDFBB"}]}>
                <Text style={styles.title}>Devam et!</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>İkiye katla!</Text>
            </TouchableOpacity>
            
        </ImageBackground>
        }/>
    );
}


const styles = StyleSheet.create({
    container:{
        width:350,
        height:350,
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        width:250,
        height:100,
        marginBottom:5
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        width:30,
        height:30
    },
    text:{
        color:"#D29F57",
        fontSize:25,
        fontWeight:"bold",
    },
    title:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },
    button:{
        width:200,
        height:45,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#205700",
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default WinAlert;