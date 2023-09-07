import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';

const OptionToolTip = props => {
  return (
    <View
      style={[{
        height: verticalScale(120),
        borderRadius: scale(12),
        backgroundColor: Colors.White,
        paddingHorizontal: moderateScale(20),
        
      },props.restylePopover]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.MoreBox, props.restyleBox]}>
        <Text style={styles.MoreText}>{props.OptionOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.onPressTwo}  style={styles.MoreBox}>
        <Text style={styles.MoreText}>{props.OptionTwo}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressThree}  style={styles.MoreBox}>
        <Text style={[styles.MoreText, props.RestyleThree]}>
          {props.OptionThree}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionToolTip;

const styles = StyleSheet.create({
  MoreBox: {
    paddingVertical: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  MoreText: {
    fontFamily: Font.Poppins700,
    fontSize: scale(12),
    color: Colors.Black,
  },
});
