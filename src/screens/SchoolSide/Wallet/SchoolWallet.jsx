import {StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import MainHeader from '../../../components/Headers/MainHeader';
import {Colors} from '../../../utils/Colors';
import HomeHeader from '../../../components/Headers/HomeHeader';
import BalanceCard from '../../../components/School/Cards/BalanceCard';
import TransactionCard from '../../../components/School/Cards/TransactionCard';
import {verticalScale} from 'react-native-size-matters';
import TransactionComponent from '../../../components/School/TransactionComponent';

const SchoolWallet = ({navigation}) => {
  const transaction_data = [
    {
      id: 1,
      place: 'Netflix',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '-$12.00',
      through: 'Paypal',
      img: require('../../../assets/image/netflix.png'),
    },
    {
      id: 2,
      place: 'Walmart',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '$242.00',
      through: 'Paypal',
      img: require('../../../assets/image/spotify.png'),
    },

    {
      id: 3,
      place: 'Walmart',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '$242.00',
      through: 'Paypal',
      img: require('../../../assets/image/wallmart.png'),
    },

    {
      id: 4,
      place: 'Daraz',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '$242.00',
      through: 'Paypal',
      img: require('../../../assets/image/daraz.png'),
    },
  ];
  return (
    <SafeAreaView style={GlobalStyle.Container}>
            <StatusBar  barStyle={'light-content'} />
      <HomeHeader
        RestyleHeader={{backgroundColor: Colors.ThemeBlue}}
        welcome={'Hello, Jimmy'}
        screename={'Wallet'}
        RestyleScreenName={{color: Colors.WhiteText}}
        hideMsg={true}
        hideBar = {true}
      />

      <View style={[GlobalStyle.ph20flex,{marginTop:verticalScale(5)}]}>
        <BalanceCard whiteText={'View Card'} 
        
        NavigateAds = {()=>navigation.navigate('schooladsaccount')}
        />
      </View>

      <View style={{flex: 1}}>
        <TransactionComponent>
          <ScrollView>
            {transaction_data.map((transaction_item, index) => {
              return (
                <View key={index} style={styles.TransView}>
                  <TransactionCard data={transaction_item} />
                </View>
              );
            })}
          </ScrollView>
        </TransactionComponent>
      </View>
    </SafeAreaView>
  );
};

export default SchoolWallet;

const styles = StyleSheet.create({
  TransView: {
    // marginTop:verticalScale(20)
  },
});
