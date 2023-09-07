import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import AdsCard from './AdsCard';

const AdsComponent = ({data, ...props}) => {
  return (
    <View style={{marginVertical: verticalScale(20)}}>
      <View style={styles.StatusView}>
        <View style={GlobalStyle.Row}>
          <View style={styles.YellowDot} />
          <Text style={[styles.StatusText, props.RestyleText]}>
            {data.status}
          </Text>
        </View>

        {data.status == 'Completed' ? (
          <TouchableOpacity style={styles.WhiteBox}>
            <Text style={styles.WhiteBoxText}>Boost Again</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.WhiteBox}>
            <Text style={styles.WhiteBoxText}>Pause Ad</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={[styles.CreateDate, props.RestyleText]}>
        {data.create_date}
      </Text>
      <AdsCard data={data} />
    </View>
  );
};

export default AdsComponent;

const styles = StyleSheet.create({
  StatusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  YellowDot: {
    height: scale(4),
    width: scale(4),
    borderRadius: scale(20),
    backgroundColor: Colors.Yellow,
  },
  StatusText: {
    fontFamily: Font.Poppins700,
    color: Colors.ThemeBlue,
    fontSize: scale(14),
    marginLeft: scale(3),
  },
  WhiteBox: {
    backgroundColor: Colors.White,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
  },

  WhiteBoxText: {
    color: Colors.Black,
    fontSize: scale(12),
    fontFamily: Font.Poppins600,
  },
  CreateDate: {
    fontFamily: Font.Poppins600,
    color: Colors.PostDescText,
    fontSize: scale(14),
    marginTop: verticalScale(10),
  },
});
