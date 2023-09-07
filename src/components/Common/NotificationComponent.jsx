import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Font} from '../../utils/font';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import MaterialICons from 'react-native-vector-icons/MaterialIcons';

const NotificationComponent = ({notification_data,type}) => {

  // const notification = [
  //   {
  //     id: 1,
  //     title: 'Apply Success',
  //     description: 'You successfully applied in new admission in ABC School',
  //     time: '10h ago',
  //     status: 'Mark as read',
  //     imp: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Interview Calls',
  //     description: 'You successfully applied in new admission in ABC School',
  //     time: '10h ago',
  //     status: 'Mark as read',
  //   },
  //   {
  //     id: 3,
  //     title: 'Apply Success',
  //     description: 'You successfully applied in new admission in ABC School',
  //     time: '10h ago',
  //     status: 'Mark as read',
  //     imp: true,
  //   },
  // ];
  return (
    <View style={styles.MainBox}>
      {notification_data.map((data, index) => (
        <View key={index} style={styles.InnerBox}>
          <View style={{flexDirection: 'row'}}>
            {data.imp ? <View style={styles.ImpDot} /> : null}
            <Text
              style={[
                styles.TitleText,
                {
                  fontFamily: data.imp ? Font.Poppins700 : Font.Poppins500,
                  marginLeft: data.imp ? moderateScale(5) : 0,
                },
              ]}>
              {data.title}
            </Text>
          </View>

          <Text
            style={[
              styles.DescText,
              {
                fontFamily: data.imp ? Font.Poppins600 : Font.Poppins500,
              },
            ]}>
            {data.description}
          </Text>

          <View
            style={[GlobalStyle.RowBetween, {marginTop: verticalScale(10)}]}>
            <View style={styles.TimeView}>
              <MaterialICons name={'access-time'} color={Colors.TimeText} />
              <Text style={styles.TimeText}>{data.time}</Text>
            </View>

            <Text style={styles.StatusText}>{data.status}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  MainBox: {
    // backgroundColor: Colors.Main,
    // borderRadius: scale(12),
    // padding: scale(15),
    // marginVertical: 10,
  },

  InnerBox: {
    marginVertical: verticalScale(20),
    backgroundColor: Colors.White,
    borderRadius: scale(15),
    padding: scale(20),
  },

  TitleText: {
    color: Colors.Black,
    fontSize: scale(16),
    fontFamily: Font.Poppins400,
  },
  ImpDot: {
    backgroundColor: Colors.ThemeBlue,
    height: scale(12),
    width: scale(12),
    borderRadius: scale(20),
    alignSelf: 'center',
  },
  DescText: {
    color: '#484848',
    fontSize: scale(14),
    fontFamily: Font.Poppins400,
    marginTop: verticalScale(10),
  },
  TimeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TimeText: {
    color: Colors.TimeText,
    fontSize: scale(14),
    fontFamily: Font.Urbanist500,
    marginLeft : moderateScale(5)
  },

  StatusText: {
    color: Colors.TextBlue,
    fontSize: scale(14),
    fontFamily: Font.Urbanist500,
  },
});
