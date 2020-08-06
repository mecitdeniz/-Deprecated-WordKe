import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
  ToastAndroid,
  StatusBar,
  SafeAreaView
} from 'react-native';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
//import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
class GameScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = { showAlert: false };
    };
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);  
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
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
    render() {
      const {showAlert} = this.state;
      const tileImage = '../assets/t8.png';
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden/>
          <ImageBackground source={require('../assets/w10.jpg')} style={{flex:1}}>
            <View style={{height:100,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>100</Text>
                  <Image source={require('../assets/coin.png')} style={{width:40,height:40}}/>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>100</Text>
                  <Image source={require('../assets/diamond.png')} style={{width:40,height:40}}/>
              </View>
            </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <View style={styles.gameTable}>
                <View style={styles.tileContainer}>
                  <ImageBackground source={require(tileImage)} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                </View>
                <View style={styles.tileContainer}>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                </View>
                <View style={styles.tileContainer}>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                </View>
                <View style={styles.tileContainer}>
                  <ImageBackground source={require('../assets/t8.png')} style={styles.tile}>
                    <Text style={styles.text}>A</Text>
                  </ImageBackground>
                </View>
              </View>
            </View>
            <View style={{height:100,justifyContent:"center",alignItems:"center"}}>
              <TouchableOpacity onPress={()=>this.props.navigation.replace("Main")}>
                <Text>Go Back</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </SafeAreaView>
      );
    };
}
const styles = StyleSheet.create({
  container:{
    flex:1
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
  tile:{
    width:80,
    height:80,
    borderWidth:0,
    justifyContent:"center",
    alignItems:"center"
  },
  tileContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  gameTable:{
    width:270,
    height:350,
    margin:20,
    justifyContent:"space-around"
  }
});

export default GameScreen;