import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import { GlobalStyle } from '../../Constants/GlobalStyle';
import UserSvg from '../../assets/svgs/user_white.svg';
import { Font } from '../../utils/font';
import { Colors } from '../../utils/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const MainSplash = ({ navigation }) => {
  // setTimeout(() => {
  //   navigation.navigate('onboarding');
  // }, 3000);
  return (
    <View
      style={[
        GlobalStyle.Container,
        { alignItems: 'center', justifyContent: 'center' },
      ]}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {/* <ImageBackground
        style={styles.ImgBackView}
        resizeMode="contain"
        source={require('../../assets/image/plusback.png')}> */}
      {/* <View style={{ height: scale(90), width: scale(290) }}>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../../assets/image/whitelogo.png')}
        />
      </View> */}
      <View style={{height:scale(250),
          width:scale(250)}}>
          <Image
          style={{height:"100%", width:"100%",}}
          source={require("../../assets/image/PureH2O-AppIcon.png")}
          />
            </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default MainSplash;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: Font.Manrope500,
    fontSize: scale(22),
    color: Colors.White,
    letterSpacing: 1.5,
  },

  ImgBackView: {
    marginTop: StatusBar.currentHeight + verticalScale(10),
    marginBottom: verticalScale(10),
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
