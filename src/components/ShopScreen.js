import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
//import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

class ShopScreen extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
    
    }

    configureAdmob = () =>{
        admob().setRequestConfiguration({
            // Update all future requests suitable for parental guidance
            maxAdContentRating: MaxAdContentRating.PG,
            // Indicates that you want your content treated as child-directed for purposes of COPPA.
            tagForChildDirectedTreatment: true,
            // Indicates that you want the ad request to be handled in a
            // manner suitable for users under the age of consent.
            tagForUnderAgeOfConsent: true,
        }).then(() => {
            //<BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER}/>
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden/>
                <Text>Shop</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default ShopScreen;