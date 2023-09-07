import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import React from 'react';
import { Font } from '../../../utils/font';
import { Colors } from '../../../utils/Colors';

const AdmissionInfoCard = (props) => {
  return (
    <View style={styles.AdmissionView}>
      <TouchableOpacity onPress={props.onPressApplied} style={styles.Applied}>
        <Text style={styles.Number}>{props.applied}</Text>
        <Text style={styles.Text}>Students Applied</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={props.onPressInterview} style={styles.Interview}>
        <Text style={styles.Number}>{props.interview}</Text>
        <Text style={styles.Text}>Interviews</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdmissionInfoCard;

const styles = StyleSheet.create({
    AdmissionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
        flex: 1,
      },
    
      Applied: {
        borderRadius: scale(14),
        width: '48%',
        backgroundColor: '#3F9AE0',
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(15),
        justifyContent:'center',
        alignItems:'center'
      },
    
      Interview: {
        borderRadius: scale(14),
        width: '48%',
        backgroundColor: '#F94687',
        justifyContent: 'center',
        paddingVertical: verticalScale(15),
        justifyContent:'center',
        alignItems:'center'
      },
      Number: {
        fontFamily: Font.Poppins700,
        fontSize: scale(24),
        color: Colors.White,
        // textAlign : 'center'
      },
      Text: {
        fontFamily: Font.Poppins500,
        fontSize: scale(15),
        color: Colors.White,
        opacity : 0.6
      },
});
