import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
import {Colors} from '../../utils/Colors';
import HomeHeader from '../../components/Headers/HomeHeader';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import ProfileComplete from '../../components/Progress/ProfileComplete';
import BottomTab from '../../navigation/BottomTab';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import SectionCard from '../../components/Cards/SectionCard';
import {Font} from '../../utils/font';
import AdmissionInfoCard from '../../components/Common/Cards/AdmissionInfoCard';
import AdsComponent from '../../components/Common/Cards/AdsComponent';
import CustomButton from '../../components/CustomButton';
import {useFocusEffect} from '@react-navigation/native';
import {getMyDetails} from '../../redux/actions/AuthAction';
import {useDispatch} from 'react-redux';

const SchoolHome = ({navigation}) => {
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(getMyDetails());
    }, []),
  );

  const handleInterview = () => {
    // navigation.navigate('schoolalladmission')}
    navigation.navigate('schoolalladmission');
  };

  const handleApplied = () => {
    // navigation.navigate('schoolalladmission')}
    navigation.navigate('schoolalladmission');
  };
  const SectionItem = [
    {
      Name: 'Prisha Mclaughlin',
      Time: '52 minute ago',
      source: require('../../assets/image/section1.png'),
      LongText:
        'One good thing about music, when it hits you, you feel no pain. ❤️',
      Number: '14',
      avatar: require('../../assets/image/dp2.png'),
    },
  ];

  const ads_data = [
    {
      id: 1,
      status: 'Completed',
      create_date: 'Mar 16 created by Kamlesh Nenwani',
      img: require('../../assets/image/adm_small.png'),
      ad_type: 'Message Conversation Boost',
      reach: '1202',
      spent: '$ 0.88',
      total: '$ 14.00',
    },
    {
      id: 2,
      status: 'Completed',
      create_date: 'Mar 16 created by Kamlesh Nenwani',
      img: require('../../assets/image/adm_small.png'),
      ad_type: 'Message Conversation Boost',
      reach: '1202',
      spent: '$ 0.88',
      total: '$ 14.00',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.HomeBackground}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <HomeHeader welcome={'Hello, Jimmy'} screename={'Feed'} />
      <ScrollView>
        <View style={GlobalStyle.ph20}>
          <View style={{marginTop: 10}}>
            <ProfileComplete progress={0.65} text={true} />
          </View>
          <AdmissionInfoCard
            onPressApplied={handleApplied}
            onPressInterview={handleInterview}
            applied={'36'}
            interview={'5'}
          />

          <View style={styles.AdsView}>
            <Text style={styles.AdsHeading}>Recents ads</Text>
            {ads_data.map((ads_item, index) => {
              return <AdsComponent data={ads_item} />;
            })}

            <CustomButton
              onPress={() => navigation.navigate('schooladsaccount')}
              textStyle={{color: Colors.SignUpGrey}}
              containerRestyle={{
                backgroundColor: Colors.PublishButton,
                borderRadius: scale(30),
              }}
              title={'See All Ads'}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            {/* <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={SectionItem}
              renderItem={({item}) => {
                return <SectionCard data={item} />;
              }}
            /> */}
          </View>
        </View>
        <View style={{height: verticalScale(85)}} />
      </ScrollView>
      <BottomTab home />
    </SafeAreaView>
  );
};

export default SchoolHome;

const styles = StyleSheet.create({
  AdsView: {
    marginTop: verticalScale(20),
  },
  AdsHeading: {
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
    color: Colors.ThemeBlue,
    marginBottom: verticalScale(30),
  },
});
