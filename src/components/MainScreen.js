import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import AwesomeAlert from 'react-native-awesome-alerts';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            showAlert: false,
            isConfigured: false
        };
        const { coins } = this.props
    }

    componentDidMount(){
        this.configureAdmob();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        this.showAlert();  
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
            this.setState({isConfigured:true});
        });
    }

    showAlert = () => {
        this.setState({
          showAlert: true
        });
    };
    
    hideAlert = () => {
        this.setState({
          showAlert: false
        });
    };

    renderBanner(){
        const { isConfigured } = this.state;
        if(isConfigured){
            return(
                <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER}/>
            );
        }else{
            return(<View></View>);
        }
        
    }
    render(){
        const { coins } = this.props
        const {showAlert} = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar hidden/>
                <ImageBackground source={require('../assets/w1.png')} style={{flex:1}}>
                    <View style={{height:100,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                        <View style={styles.textContainer}>
        <Text style={styles.text}>{coins}</Text>
                            <Image source={require('../assets/coin.png')} style={{width:40,height:40}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>100</Text>
                            <Image source={require('../assets/diamond.png')} style={{width:40,height:40}}/>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <AwesomeAlert
                            show={showAlert}
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
                                <ImageBackground source={require('../assets/menu.png')} style={{width:350,height:350,justifyContent:"center",alignItems:"center"}}>
                                    <TouchableOpacity style={{width:100,height:100}} onPress={()=>{
                                        this.hideAlert()
                                        this.props.navigation.replace("Game")
                                        }}>
                                        <Image source={require('../assets/play.png')} style={{width:100,height:100}}/>
                                    </TouchableOpacity>
                                    <Text style={[styles.text,{color:"black"}]}>Oyna</Text>
                                </ImageBackground>
                            }
                            />
                    </View>
                    <View style={{height:100,justifyContent:"center",alignItems:"center"}}>
                        {this.renderBanner()}
                    </View>
                </ImageBackground>
            </SafeAreaView>  
        );
    }
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
  }
});

export default MainScreen;