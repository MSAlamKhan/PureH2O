import {StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import MainHeader from '../../../components/Headers/MainHeader';
import {Colors} from '../../../utils/Colors';
import HomeHeader from '../../../components/Headers/HomeHeader';
import BalanceCard from '../../../components/School/Cards/BalanceCard';
import TransactionCard from '../../../components/School/Cards/TransactionCard';
import {scale, verticalScale} from 'react-native-size-matters';
import TransactionComponent from '../../../components/School/TransactionComponent';
import {Font} from '../../../utils/font';



const SchoolAllTransaction = ({navigation}) => {
  //   menudata = [
  //     {id: 1, name: 'Date', type: 'post'},
  //     {id: 2, name: 'Campaign', type: 'staff'},
  //     {id: 3, name: 'Ads ID', type: 'recruiter'},
  //   ];

  const [menu, setMenu] = useState('byDate');
  const [open, setOpen] = useState(false);
  const by_date = [
    {
      id: 1,
      place: 'Avengers Inc',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '-$12.00',
      through: 'Paypal',
      img: require('../../../assets/image/avengers.png'),
    },
    {
      id: 2,
      place: 'Netflix',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '$242.00',
      through: 'Paypal',
      img: require('../../../assets/image/netflix.png'),
    },

    {
      id: 3,
      place: 'Spotify',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '$242.00',
      through: 'Paypal',
      img: require('../../../assets/image/spotify.png'),
    },

    {
      id: 4,
      place: 'Youtube',
      date: 'Mar 25th 2023',
      time: '8:15 AM',
      amount: '$242.00',
      through: 'Paypal',
      img: require('../../../assets/image/netflix.png'),
    },
  ];
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <HomeHeader
        RestyleHeader={{backgroundColor: Colors.ThemeBlue}}
        welcome={'Hello, Jimmy'}
        screename={'Transaction'}
        RestyleScreenName={{color: Colors.WhiteText}}
        hideMsg={true}
        hideBar = {true}
      />

      <View style={GlobalStyle.ph20flex}>
        <BalanceCard NavigateAds = {()=>navigation.navigate('schooladsaccount')} whiteText = {'Summary'} />

       
      </View>

      <View style={{flex: 1.2}}>
        <TransactionComponent
          onPressDate={() => setMenu('byDate')}
          onPressCamp={() => setMenu('byCampaign')}
          onPressAds={() => setMenu('byAd')}
          menu={menu}
          alltransaction={true}>
          <ScrollView showsVerticalScrollIndicator={false}> 
            <Text style={styles.MainDate}>Saturday, 20 May 2023</Text>
            {by_date.map((by_date, index) => {
              return (
                <View key={index} style={styles.TransView}>
                  <TransactionCard data={by_date} />
                </View>
              );
            })}
          </ScrollView>
        </TransactionComponent>
      </View>
    </SafeAreaView>
  );
};

export default SchoolAllTransaction;

const styles = StyleSheet.create({
  MainDate: {
    fontFamily: Font.Poppins700,
    fontSize: scale(18),
    color: Colors.Black,
  },
});
