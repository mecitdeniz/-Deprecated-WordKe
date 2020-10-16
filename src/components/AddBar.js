import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';


const AddBar = (props)=>{
    const { isConfigured } = props;
    return(
        <View style={styles.container}>
        {renderBanner(isConfigured)}
        </View>
    );
}

const renderBanner = (isConfigured)=>{
    if(isConfigured){
        return(
            <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER}/>
        );
    }else{
        return(<View></View>);
    }
    
}

const styles = StyleSheet.create({
    container:{
        height:100,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default AddBar;