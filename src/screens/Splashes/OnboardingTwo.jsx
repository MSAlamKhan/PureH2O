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
import {FIRST_SPLASH, SECOND_SPLASH} from '../../redux/reducer/Holder';

const OnboardingTwo = () => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch({type: SECOND_SPLASH, payload: 'vv'});
    await AsyncStorage.setItem('second_splash', 'true');
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.White, flex: 1}}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />

      <View style={GlobalStyle.ph20flex}>
        <View style={{flex: 1}}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            activeDotColor={Colors.DotColor}
            dotColor="#CBD1DE">
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/onboard_search.png')}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/onboard_search.png')}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/onboard_search.png')}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide1}>
              <Image
                source={require('../../assets/image/onboard_search.png')}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </Swiper>
        </View>

        <View style={{flex: 0.7}}>
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: moderateScale(10),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Font.Poppins800,
                fontSize: scale(24),
                color: Colors.Black,
              }}>
              Find School Friends in this app
            </Text>
          </View>

          <View
            style={{
              marginTop: verticalScale(10),
              paddingHorizontal: moderateScale(0),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Font.Gilroy400,
                fontSize: scale(13),
                color: Colors.SplashGrey,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Text>
          </View>

          <View
            style={{
              paddingBottom: moderateScale(25),
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <CustomButton
              // onPress={() => navigation.navigate('welcome')}
              onPress={() => onSubmit()}
              containerRestyle={{
                width: '100%',
                backgroundColor: Colors.ThemeBlue,
              }}
              textStyle={{color: Colors.White}}
              title={'Get Started'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingTwo;

const styles = StyleSheet.create({
  slide1: {
    // backgroundColor: '#9DD6EB',
    paddingHorizontal: moderateScale(20),
    marginTop: verticalScale(35),
  },
});
