import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';
import {GlobalStyle} from '../../Constants/GlobalStyle';

const ExperianceCard = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{alignItems: 'center',marginBottom:-15}}>
        <View
          style={[
            styles.dot,
            {
              backgroundColor: data.id == 1 ? Colors.ThemeBlue : 'transparent',
              borderWidth: data.id == 1 ? 0 : scale(3),
            },
          ]}
        />
        <View style={styles.line} />
      </View>

      <View style={[GlobalStyle.ph20,{bottom:1,marginBottom:verticalScale(5)}]}>
        <Text style={styles.Year}>{data.year}</Text>
        <Text style={styles.work}>{data.work}</Text>
        <Text style={styles.place}>{data.place}</Text>
      </View>
    </View>
  );
};

export default ExperianceCard;

const styles = StyleSheet.create({
  Year: {
    color: Colors.ThemeBlue,
    fontSize: scale(14),
    fontFamily: Font.Poppins600,
    marginTop: verticalScale(15),
  },
  work: {
    color: Colors.Black,
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },
  place: {
    color: '#848484',
    fontSize: scale(14),
    fontFamily: Font.Poppins500,
    marginTop: verticalScale(8),
  },
  dot: {
    width: scale(15),
    aspectRatio: 1 / 1,
    borderRadius: 15,
    borderColor: Colors.ThemeBlue,
    marginTop: verticalScale(15),
  },
  line: {
    width: scale(1),
    // height: verticalScale(50),
    backgroundColor: Colors.ThemeBlue,
    flex:1,
  },
});
