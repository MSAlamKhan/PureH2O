import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import HomeHeader from '../../../components/Headers/HomeHeader';
import {Colors} from '../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import AdsComponent from '../../../components/Common/Cards/AdsComponent';
import GraphAds from '../../../components/School/Cards/GraphAds';
import BalanceCard from '../../../components/School/Cards/BalanceCard';

const AdsAccount = ({navigation}) => {
  const ads_data = [
    {
      id: 1,
      status: 'Completed',
      create_date: 'Mar 16 created by Bilal Raza',
      img: require('../../../assets/image/adm_small.png'),
      ad_type: 'Message Conversation Boost',
      reach: '1202',
      spent: '$ 0.88',
      total: '$ 14.00',
    },
    {
      id: 2,
      status: 'Running',
      create_date: 'Mar 16 created by Tiger Katiawala',
      img: require('../../../assets/image/adm_small.png'),
      ad_type: 'Message Conversation Boost',
      reach: '1202',
      spent: '$ 0.88',
      total: '$ 14.00',
    },

    {
      id: 3,
      status: 'Running',
      create_date: 'Mar 16 created by Alica Manhunt',
      img: require('../../../assets/image/adm_small.png'),
      ad_type: 'Message Conversation Boost',
      reach: '1202',
      spent: '$ 0.88',
      total: '$ 14.00',
    },
  ];
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar barStyle={'light-content'} />
      <HomeHeader
        RestyleHeader={{backgroundColor: Colors.ThemeBlue}}
        welcome={'Hello, Jimmy'}
        screename={'Ads Account'}
        RestyleScreenName={{color: Colors.WhiteText}}
        hideMsg={true}
        hideBar={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.ph20flex}>
          <BalanceCard
            restyleMain={{height: verticalScale(120)}}
            NavigateAds={() => navigation.navigate('schooladcampaign')}
            hideBal={true}
          />
          <View style={styles.AdsView}>
            <Text style={styles.AdsHeading}>Recent ads</Text>
            {ads_data.map((ads_item, index) => {
              return (
                <AdsComponent
                  RestyleText={{color: Colors.White}}
                  key={index}
                  data={ads_item}
                />
              );
            })}
          </View>
        </View>
        <View style={{marginTop: verticalScale(20)}}>
          <GraphAds />
        </View>

        <View style={GlobalStyle.Height} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdsAccount;

const styles = StyleSheet.create({
  AdsView: {
    marginTop: verticalScale(20),
    flex: 1,
  },
  AdsHeading: {
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
    color: Colors.White,
    marginVertical: verticalScale(10),
  },
});
