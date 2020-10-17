import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';


const AddBar = ()=>{
    return(
        <View style={styles.container}>
            <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:100,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    }
});

export default AddBar;