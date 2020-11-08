import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { setWallpaper } from '../utils/game';
import { setTile } from '../utils/game';


const setBorderColor = (isUnlocked,isSelected)=>{
    return isUnlocked && isSelected ? { borderColor: "green"} : { borderColor: "white"}
}


const ShopItem = (props)=>{
    const { item,tab } = props;
    const { isUnlocked, isSelected } = item; 
        if(tab == 0 )return(
            <ImageBackground source={setTile(item.name)}
            imageStyle={{alignSelf:"center"}}
            resizeMode="center"
            style={[styles.iconL,setBorderColor(isUnlocked,isSelected),{margin:3,borderWidth:3,borderRadius:60,justifyContent:"center",alignItems:"center"}]}>
                {renderButton(isUnlocked,isSelected)}
            </ImageBackground>
        )
        else return(
            <View style={[styles.container,setBorderColor(isUnlocked,isSelected)]}>
                <ImageBackground source={setWallpaper(item.name)} style={{flex:1,justifyContent:"flex-end",paddingBottom:5}}>
                {renderButton(isUnlocked,isSelected)}
                </ImageBackground>
            </View>
        )
}

const renderButton = (isUnlocked,isSelected) =>{
    
    if(isUnlocked && isSelected)  return(
        <View style={styles.button}>
            <Image source={require("../assets/ok.png")} style={styles.iconS}/>
            <Text style={styles.text}>Seçili</Text>
        </View>
    );
    else if(isUnlocked && !isSelected) return(
        <TouchableOpacity style={styles.button}>
            <Image source={require("../assets/close.png")} style={styles.iconS}/>
            <Text style={styles.text}>Seç</Text>
        </TouchableOpacity>
    )
    else return(
        <TouchableOpacity style={styles.button}>
            <Image source={require("../assets/shop.png")} style={styles.iconS}/>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={styles.text}>100</Text>
                <Image source={require("../assets/coin.png")} style={styles.iconXS}/>
            </View>
            <Text style={styles.text}>Satın al</Text>
        </TouchableOpacity>
    )
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
        fontSize:16,
        fontWeight:"600",
        textAlign:"center"
    },
    iconL:{
        width:120,
        height:120,
    },
    button:{
        backgroundColor:"transparent",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.3)",
        alignSelf:"center"
    },
    iconS:{
        width:30,
        height:30
    },
    iconXS:{
        width:15,
        height:15,
    }
});

export default ShopItem;