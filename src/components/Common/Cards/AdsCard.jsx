import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';

const AdsCard = ({data}) => {
  return (
    <View style={styles.MainBox}>
      <Text style={styles.Boosted}>Boosted Post</Text>
      <View style={[GlobalStyle.Row,{flex:1,marginTop:verticalScale(10)}]}>
        <View style={[GlobalStyle.Row,{flex:1}]}>
          <View style={styles.ImgView}>
            <Image
              resizeMode="contain"
              style={{height: '100%', width: '100%', borderRadius: scale(5)}}
              source={data.img}
            />
          </View>

          <Text style={styles.AdType} numberOfLines={3}>{data.ad_type}</Text>
        </View>

        <View style={{flex:1}}>
          {/* <ImageBackground
        source={require('../../../assets/image/ornament.png')}
        style=
        /> */}
          <View style={GlobalStyle.RowBetween}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.BlackText}>{data.reach}</Text>
              <Text style={styles.WhiteText}>Reach</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.BlackText}>{data.spent}</Text>
              <Text style={styles.WhiteText}>Spent of {data.total}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdsCard;

const styles = StyleSheet.create({
  MainBox: {
    borderRadius: scale(12),
    padding: moderateScale(15),
    backgroundColor: Colors.ButtonBlue,
    marginTop:verticalScale(15)
  
  },
  Boosted: {
    color: Colors.Yellow,
    fontFamily: Font.Poppins600,
    fontSize: scale(14),
  },

  ImgView: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: scale(5),
  },
  AdType: {
    color: Colors.White,
    fontSize: scale(9),
    fontFamily: Font.Poppins600,
    maxWidth:'50%',
    marginLeft:moderateScale(5),
    
  },
  BlackText: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize: scale(9),
  },
  WhiteText: {
    color: Colors.White,
    fontFamily: Font.Poppins500,
    fontSize: scale(9),
  },
});
