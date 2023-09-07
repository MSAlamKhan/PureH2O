import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const MessageDisplay = ({message_data}) => {
  console.log('your_message', message_data);
  return (
    <View style={styles.MainView}>
      {message_data.type == 'other' ? (
        <View style= {{marginVertical: verticalScale(10)}}>
          <View
            style={GlobalStyle.Row}>
            <View style={styles.ImageBox}>
              <Image
                source={message_data.dp}
                style={{height: '100%', width: '100%', borderRadius: scale(8)}}
                resizeMode="contain"
              />
            </View>

            <View style={styles.OtherBox}>
              <Text style={styles.Message}>{message_data.msg}</Text>
            </View>
          </View>
          <Text style={styles.OtherTime}>{message_data.time}</Text>
        </View>
      ) : null}

      {message_data.type == 'you' ? (
        <>
          <View style={styles.Container}>
            <View style={styles.YourBox}>
              <Text style={[styles.Message, {color: Colors.White}]}>
                {message_data.msg}
              </Text>
            </View>
            <Text style={styles.Time}>{message_data.time}</Text>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default MessageDisplay;

const styles = StyleSheet.create({
  MainView: {

  },
  ImgTime: {
    alignItems: 'center',
  },
  ImageBox: {
    borderRadius: scale(8),
    height: scale(40),
    width: scale(40),
    alignItems: 'center',
    backgroundColor: Colors.GreyBox,
    alignSelf: 'flex-end',
  },
  OtherTime: {
    color: Colors.MessageTime,
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    marginTop:verticalScale(5)
  },
  Time: {
    marginTop: verticalScale(5),
    color: Colors.MessageTime,
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    alignSelf: 'flex-end',
  },

  OtherBox: {
    backgroundColor: Colors.OtherBox,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(18),
    borderRadius: scale(20),
    borderBottomLeftRadius: 0,
    marginLeft: moderateScale(8),
  },

  Container: {
    alignItems: 'flex-end',
    marginVertical: verticalScale(10),
  },

  Message: {
    color: Colors.OtherMsg,
    fontSize: scale(16),
    fontFamily: Font.Poppins500,
    textAlign: 'left',
  },
  YourBox: {
    backgroundColor: Colors.YourBox,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(18),
    borderRadius: scale(20),
    marginLeft: moderateScale(8),
  },
});
