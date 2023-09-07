import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Font} from '../../utils/font';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
import Swiper from 'react-native-swiper';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FIRST_SPLASH} from '../../redux/reducer/Holder';

const Onboarding = ({navigation}) => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch({type: FIRST_SPLASH, payload: 'vv'});
    await AsyncStorage.setItem('first_splash', 'true');
  };
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <View
        style={[
          GlobalStyle.ph20flex,
          {
            marginTop: StatusBar.currentHeight || 0,
            paddingTop: moderateScale(15),
          },
        ]}>
        <View style={{flex: 1}}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            activeDotColor={Colors.White}
            dotColor={Colors.DotColor}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/illustration.png')}
                resizeMode="contain"
                // style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/illustration.png')}
                // style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>

            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/illustration.png')}
                resizeMode="contain"
                // style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/illustration.png')}
                resizeMode="contain"
                // style={{height: '100%', width: '100%'}}
              />
            </View>
          </Swiper>
        </View>

        <View style={{flex: 0.5}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Font.Poppins800,
                fontSize: scale(22),
                color: Colors.White,
              }}>
              Get your School here, immediately.
            </Text>
          </View>

          <View style={{marginTop: verticalScale(5)}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Font.Gilroy400,
                fontSize: scale(13),
                color: Colors.TextGrey,
              }}>
              We will help you setup plan your financial things computerize. And
              its free!
            </Text>
          </View>

          <View
            style={{
              paddingBottom: moderateScale(25),
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <CustomButton
              // onPress={() => navigation.navigate('onboardingtwo')}
              onPress={() => onSubmit()}
              containerRestyle={{
                width: '100%',
                backgroundColor: Colors.ButtonBlue,
              }}
              textStyle={{color: Colors.White}}
              title={'Continue'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  slide1: {
    // backgroundColor: '#9DD6EB',
    paddingHorizontal: moderateScale(20),
    // justifyContent:'center'
    alignItems: 'center',
  },
});
