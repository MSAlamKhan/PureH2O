import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../Constants/GlobalStyle';
import { scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../utils/Colors';
import UserWhite from '../../assets/svgs/user_white.svg';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk-next';
import { useDispatch } from 'react-redux';
import { googleSignin } from '../../redux/actions/AuthAction';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  const [gUser, setGUser] = useState({});

  useEffect(() => {
    isSignedIn();
  }, []);

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();

      setGUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // console.log 'User has not signed in yet')
      } else {
        console.log('Something went wrong!');
      }
    }
  };
  const continueWEmail = () => { };
  const googleLogin = () => {
    dispatch(googleSignin(navigation));
  };

  return (
    <SafeAreaView style={[GlobalStyle.Container, { backgroundColor: '#0A2463' }]}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {/* <ImageBackground
        style={styles.ImgBackView}
        resizeMode="contain"
        source={require('../../assets/image/plusback.png')}> */}
      <View style={[GlobalStyle.ph20, { flex: 1 }]}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View style={{ top: scale(2) }}>
            {/* <View style={{ height: scale(90), width: scale(290) }}>
                <Image
                  style={{ height: '100%', width: '100%' }}
                  source={require('../../assets/image/whitelogo.png')}
                />

              </View> */}
            <View style={{
              height: scale(150),
              width: scale(150)
            }}>
              <Image
                style={{ height: "100%", width: "100%", }}
                source={require("../../assets/image/PureH2O-AppIcon.png")}
              />

            </View>
            {/* <UserWhite
                style={{alignSelf: 'center'}}

                // height={verticalScale(80)}
                // width = {scale(100)}
              /> */}
          </View>
          <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: Font.Manrope500,
                  fontSize: scale(22),
                  color: Colors.White,
                  letterSpacing: 1.5,
                }}>
                PureH₂O
              </Text>
            </View>
        </View>

        <View style={{ flex: 1.8, justifyContent: 'center' }}>
          <Text style={styles.Heading}>
            Hi, {`\n`}
            Welcome!
          </Text>
        </View>

        <View style={{ flex: 2 }}>
          <CustomButton
            containerRestyle={[
              GlobalStyle.CustomButtonRestyle,
              { alignSelf: 'center' },
            ]}
            textStyle={styles.EmailText}
            title={'Sign Up with Email'}
            email
            iconcolor={Colors.White}
            onPress={() => navigation.navigate('register')}
          />

          {/* <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <CustomButton
                containerRestyle={[
                  GlobalStyle.CustomButtonRestyle,
                  { width: '47%' },
                ]}
                google
                iconcolor={Colors.White}
                onPress={() => googleLogin()}
              />

              <CustomButton
                containerRestyle={[
                  GlobalStyle.CustomButtonRestyle,
                  { width: '47%' },
                ]}
                facebook
                iconcolor={Colors.White}
              // onPress={() => googleLogin()}
              // onPress={() => navigation.navigate('register')}
              />
            </View> */}
          <View style={{ alignSelf: 'center', marginTop: verticalScale(20) }}>
            <Text style={styles.Account}>
              Already have an account?{' '}
              <Text
                style={styles.SignIn}
                onPress={() => navigation.navigate('signin')}>
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  ImgBackView: {
    marginTop: StatusBar.currentHeight + verticalScale(10),
    marginBottom: verticalScale(10),
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Account: {
    textAlign: 'center',
    color: Colors.White,
    fontSize: scale(13),
    fontFamily: Font.Gilroy500,
  },

  SignIn: {
    color: Colors.Yellow,
    fontFamily: Font.Gilroy500,
  },

  EmailText: {
    color: Colors.White,
    fontFamily: Font.Gilroy400,
    fontSize: scale(16),
    marginLeft: scale(12),
    top: 0,
  },
  Heading: {
    fontFamily: Font.Manrope700,
    fontSize: scale(35),
    color: Colors.White,
  },
});
