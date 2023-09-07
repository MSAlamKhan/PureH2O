import {StyleSheet, Text, TouchableOpacity,Image, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {Font} from '../../../utils/font';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import CustomButton from '../../CustomButton';

const PostBoostCard = ({data}) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.TextView}>
        <Text style={styles.BoldText}>{data.publishDate}</Text>
        <Text   numberOfLines={4} style={styles.WhiteText}>
          {data.post}
        </Text>
      </View>

      <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity
          style={[GlobalStyle.WhiteBox, {backgroundColor: Colors.ThemeBlue}]}>
          <Text style={styles.BoldText}>Boost Post </Text>
        </TouchableOpacity>

        <View style = {styles.ImageBox}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: scale(12)}}
            resizeMode="contain"
            source={data.img}
          />
        </View>
      </View>
    </View>
  );
};

export default PostBoostCard;

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scale(12),
    backgroundColor: Colors.FeesBox,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    marginVertical:verticalScale(20)
  },

  TextView: {
    justifyContent: 'center',
    paddingRight:moderateScale(10),
    maxWidth : '65%'
  },
  BoldText: {
    fontFamily: Font.Poppins700,
    fontSize: scale(12),
    color: Colors.White,
  },
  WhiteText: {
    fontFamily: Font.Poppins600,
    fontSize: scale(14),
    color: Colors.White,
    marginVertical: verticalScale(15),
  },

  ImageBox:{
    height:verticalScale(90),
    width: scale(90),
    borderRadius: scale(12),
    overflow:'hidden',
    marginVertical:verticalScale(12)
  }
});
