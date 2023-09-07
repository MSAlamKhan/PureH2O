import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import UserWhite from '../../assets/svgs/user_white.svg'

const ProfileCompHeader = () => {
  return (
    <View style={{backgroundColor:Colors.ThemeBlue}}>
      <View style={{alignSelf:'center',paddingBottom:moderateScale(25),marginTop:StatusBar.currentHeight || 0}}>
        {/* <Image
          resizeMode="contain"
          source={require('../../assets/image/welcome_logolight.png')}
          style={{height: '100%', width: '100%'}}
        /> */}
        <UserWhite

        style={{alignSelf:'center'}}
        
        // height={verticalScale(80)}
        // width = {scale(100)}
        />
        <Text
          style={{
            color: Colors.WhiteText,
            textAlign: 'center',
            fontSize:scale(18),
            fontFamily: Font.Manrope400,
            
          }}>
          School Manual
        </Text>
        
      </View>
      <View>
      </View>
    </View>
  );
};

export default ProfileCompHeader;

const styles = StyleSheet.create({});
