import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';

const QuizComponent = props => {
//   const [select, setSelect] = useState(false);
//   onPress={() => setSelect(!select)}

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onPress} style={styles.MainBox}>
      <View style={styles.SelectBox}>
        {props.select == props.item ? <View style={styles.InnerSelect} /> : null}
      </View>

      <View style={{marginLeft: moderateScale(10)}}>
        <Text style={styles.Text}>{props.option}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuizComponent;

const styles = StyleSheet.create({
  MainBox: {
    flexDirection: 'row',
    borderRadius: scale(12),
    backgroundColor:'#2874F7',
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(15),
    marginVertical: verticalScale(8),
  },
  SelectBox: {
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: scale(30),
    width: scale(20),
    height: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  InnerSelect: {
    backgroundColor: Colors.White,
    height: scale(12),
    width: scale(12),
    borderRadius: scale(20),
    alignSelf:'center',
  },

  Text: {
    fontFamily: Font.Gilroy400,
    fontSize: scale(14),
    color: Colors.White,
  },
});
