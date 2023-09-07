import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';

const TransactionCard = ({data}) => {
  return (
    <View style={styles.Main}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ColorBox}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: scale(45)}}
            resizeMode="contain"
            source={data.img}
          />
        </View>
        <View style={styles.NameDetailView}>
          <Text style={styles.Place}>{data.place}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Time}>{data.date}</Text>
            <View style={styles.Dot} />
            <Text style={styles.Time}>{data.time}</Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.Amount}>{data.amount}</Text>
        <Text style={styles.Through}>{data.through}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  Main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    marginVertical: verticalScale(15),
    paddingVertical: moderateScale(5),
  },
  ColorBox: {
    height: scale(45),
    width: scale(45),
    borderRadius: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BlankPic,
  },

  NameDetailView: {
    marginLeft: moderateScale(8),
    justifyContent: 'center',
  },
  Time: {
    color: Colors.TextDarkGrey,
    fontSize: scale(13),
    fontFamily: Font.Poppins500,
  },
  Dot: {
    borderColor: Colors.TextDarkGrey,
    borderWidth: 1.5,
    alignSelf: 'center',
    borderRadius: scale(20),
    marginHorizontal: moderateScale(5),
    top: 1,
  },
  Place: {
    color: Colors.TransPlace,
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },
  Amount: {
    color: Colors.TransPlace,
    fontSize: scale(14),
    fontFamily: Font.Poppins700,
  },
  Through: {
    color: Colors.TransThrough,
    fontSize: scale(14),
    fontFamily: Font.Poppins500,
  },
});
