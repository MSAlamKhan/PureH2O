import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TransactionCard from './Cards/TransactionCard';
import {useNavigation} from '@react-navigation/native';

const TransactionComponent = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainBox}>
      {props.alltransaction ? null : (
        <View style={styles.TitleView}>
          <Text style={styles.Recent}>Recent Ads Transaction</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('schoolalltransaction')}>
            <Text style={styles.SeeAll}>See all</Text>
          </TouchableOpacity>
        </View>
      )}

      {props.alltransaction ? (
        <View style={styles.TitleView}>
          <TouchableOpacity
            onPress={props.onPressDate}
            style={[
              styles.SelectBox,
              {
                backgroundColor:
                  props.menu == 'byDate' ? Colors.TransPlace : Colors.White,
              },
            ]}>
            <Text
              style={[
                styles.SelText,
                {
                  color:
                    props.menu == 'byDate' ? Colors.White : Colors.TransPlace,
                },
              ]}>
              Date
            </Text>

            <MaterialIcons
              name={'keyboard-arrow-down'}
              color={props.menu == 'byDate' ? Colors.BalanceBox : Colors.TransPlace}
              size={scale(18)}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={props.onPressCamp}
            style={[
              styles.SelectBox,
              {
                backgroundColor:
                  props.menu == 'byCampaign' ? Colors.TransPlace : Colors.White,
              },
            ]}>
            <Text
              style={[
                styles.SelText,
                {
                  color:
                    props.menu == 'byCampaign'
                      ? Colors.White
                      : Colors.TransPlace,
                },
              ]}>
              Campaign
            </Text>

            <MaterialIcons
              name={'keyboard-arrow-down'}
              color={props.menu == 'byCampaign' ? Colors.BalanceBox : Colors.TransPlace}
              size={scale(18)}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={props.onPressAds}
            style={[
              styles.SelectBox,
              {
                backgroundColor:
                  props.menu == 'byAd' ? Colors.TransPlace : Colors.White,
              },
            ]}>
            <Text
              style={[
                styles.SelText,
                {
                  color:
                    props.menu == 'byAd' ? Colors.White : Colors.TransPlace,
                },
              ]}>
              Ads ID
            </Text>

            <MaterialIcons
              name={'keyboard-arrow-down'}
              color={props.menu == 'byAd' ? Colors.BalanceBox : Colors.TransPlace}
              size={scale(18)}
            />
          </TouchableOpacity>
        </View>
      ) : null}

      {props.children}
    </View>
  );
};

export default TransactionComponent;

const styles = StyleSheet.create({
  MainBox: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    paddingHorizontal: moderateScale(20),
    flex: 1,
    paddingTop: moderateScale(15),
  },

  TitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:verticalScale(10)
  },
  Recent: {
    fontFamily: Font.Poppins700,
    color: Colors.Black,
    fontSize: scale(16),
  },
  SeeAll: {
    fontFamily: Font.Poppins600,
    color: Colors.TextDarkGrey,
    fontSize: scale(16),
  },

  SelectBox: {
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: scale(12),
    paddingVertical: scale(5),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.White,
    // marginHorizontal:verticalScale(5)
  },
  SelText: {
    fontFamily: Font.Poppins600,
    color: Colors.Black,
    fontSize: scale(14),
  },
});
