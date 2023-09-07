import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import AdsSvg from '../../../assets/svgs/ads.svg';
import ReportSvg from '../../../assets/svgs/report.svg';
import TransactionSvg from '../../../assets/svgs/transaction.svg';
import TopSvg from '../../../assets/svgs/topup.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const BalanceCard = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.MainBox, props.restyleMain]}>
      {props.hideBal ? null : (
        <View style={styles.BalBox}>
          <View style={styles.BalView}>
            <Text style={styles.TotalText}>Total Balance</Text>

            <Text style={styles.BalText}>$125,432.12</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: moderateScale(8),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('schoolpaymentmethod')}
              style={styles.WhiteBox}>
              <Text style={styles.ViewText}>{props.whiteText}</Text>
              <MaterialIcons
                name={'keyboard-arrow-right'}
                color={Colors.TextDarkGrey}
                size={scale(18)}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={[styles.OptionView, props.restyleOption]}>
        <View style={styles.Center}>
          <TouchableOpacity
            onPress={props.NavigateAds}
            style={styles.InnerCircle}>
            <AdsSvg />
          </TouchableOpacity>

          <Text style={styles.WhiteText}>
            {props.hideBal ? (
              <Text numberOfLines={2}>Campaign</Text>
            ) : (
              <Text>Ads Account</Text>
            )}
          </Text>
        </View>

        <View style={styles.Center}>
          <TouchableOpacity style={styles.InnerCircle}>
            <TopSvg />
          </TouchableOpacity>
          <Text style={styles.WhiteText}>Topup</Text>
        </View>
        <View style={styles.Center}>
          <TouchableOpacity
            onPress={() => navigation.navigate('schoolalltransaction')}
            style={styles.InnerCircle}>
            <TransactionSvg />
          </TouchableOpacity>
          <Text style={styles.WhiteText}>Transaction</Text>
        </View>

        <View style={styles.Center}>
          <TouchableOpacity style={styles.InnerCircle}>
            <ReportSvg />
          </TouchableOpacity>
          <Text style={styles.WhiteText}>Report</Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  MainBox: {
    borderRadius: scale(20),
    height: verticalScale(245),
    overflow: 'hidden',
  },
  BalBox: {
    flex: 2,
    backgroundColor: Colors.BalanceBox,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  BalView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },

  TotalText: {
    fontFamily: Font.Poppins500,
    fontSize: scale(15),
    color: Colors.Black,
  },
  BalText: {
    fontFamily: Font.Poppins800,
    fontSize: scale(30),
    color: Colors.Black,
    // marginTop:verticalScale(10)
  },

  WhiteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scale(28),
    width: scale(100),
    backgroundColor: Colors.White,
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewText: {
    color: Colors.Black,
    fontFamily: Font.Poppins500,
    fontSize: scale(12),
  },
  OptionView: {
    backgroundColor: Colors.WalletOption,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
    flex: 1,
  },

  Center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  InnerCircle: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50),
    borderColor: Colors.InnerCircle,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  WhiteText: {
    marginTop: verticalScale(10),
    fontFamily: Font.Poppins600,
    fontSize: scale(12),
    color: Colors.White,
  },
});
