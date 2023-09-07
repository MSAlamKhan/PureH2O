import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';
import HomeHeader from '../../components/Headers/HomeHeader';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import ProfileComplete from '../../components/Progress/ProfileComplete';
import BottomTab from '../../navigation/BottomTab';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import SectionCard from '../../components/Cards/SectionCard';
import {Font} from '../../utils/font';
import AdmissionInfoCard from '../../components/Common/Cards/AdmissionInfoCard';

const TeacherHome = ({navigation}) => {

  const handleInterview = () => {
    // navigation.navigate('schoolalladmission')}
    navigation.navigate('teacheralladmission');
  };

  const handleApplied = () => {
    // navigation.navigate('schoolalladmission')}
    navigation.navigate('teacheralladmission');
  };
  const SectionItem = [
    {
      post_type: 'Normal',
      Name: 'Prisha Mclaughlin',
      Time: '52 minute ago',
      source: require('../../assets/image/section1.png'),
      LongText:
        'One good thing about music, when it hits you, you feel no pain. ❤️',
      Number: '14',
      avatar: require('../../assets/image/dp2.png'),
      type: 'student'
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
            onPressInterview={ handleInterview}
            applied={'36'}
            interview={'5'}
          />
          <View style={{marginTop: verticalScale(20)}}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={SectionItem}
              renderItem={({item}) => {
                return <SectionCard data={item}  moreOption = {true}
                />;
              }}
            />
          </View>
        </View>
        <View style={{height: verticalScale(85)}} />
      </ScrollView>
      <BottomTab home />
    </SafeAreaView>
  );
};

export default TeacherHome;

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
