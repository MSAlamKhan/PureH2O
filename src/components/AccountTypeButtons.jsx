import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../utils/Colors';
import {Font} from '../utils/font';

const AccountTypeButtons = props => {
  return (
    <View
      style={[
        {
          width: '100%',
          backgroundColor: Colors.SignRegContainer,
          borderRadius: scale(8),
          flexDirection: 'row',
          height: verticalScale(60),
          padding: scale(8),
          justifyContent: 'space-between',
        },
        props.MainBox,
      ]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(6),
            width: '48%',
          },
          props.SigninContainer,
        ]}>
        <Text style={[props.SignInText, styles.Text]}>Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.onPressTwo}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(6),
            width: '48%',
          },
          props.RegisterContainer,
        ]}>
        <Text style={[props.RegisterText, styles.Text]}>Shop Owner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountTypeButtons;

const styles = StyleSheet.create({
  Text: {
    fontFamily: Font.Poppins800,
    fontSize: scale(14),
  },
});
