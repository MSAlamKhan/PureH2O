import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';

const ActivityComponent = props => {
  return (
    <View>
      {props.subMenu == 'attempt' ? (
        <View style={styles.MainView}>
          <Text style={styles.Date}>{props.date}</Text>

          <Text style={styles.Question}>{props.question}</Text>

          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={props.onPressPost}>
            <Text style={styles.Post}>View Post</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {props.subMenu == 'win' ? (
        <View style={styles.MainView}>
          <Text style={styles.Date}>{props.date}</Text>

          <Text style={styles.Question}>{props.question}</Text>

          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={props.onPressPost}>
            <Text style={styles.Post}>View Post</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default ActivityComponent;

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
    alignItems:'center'
  },
  Date: {
    color: Colors.DescText,
    fontFamily: Font.Poppins500,
    fontSize: scale(14),
  },
  Question: {
    color: Colors.Black,
    fontFamily: Font.Poppins500,
    fontSize: scale(14),
  },

  ButtonStyle: {
    padding: scale(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2874F7',
    borderRadius: scale(16),
  },
  Post: {
    color: Colors.White,
    fontFamily: Font.Poppins600,
    fontSize: scale(13),
  },
});
