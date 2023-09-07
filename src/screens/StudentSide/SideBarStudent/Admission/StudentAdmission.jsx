import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ConnectComponent from '../../../../components/Common/ConnectComponent';
import MainHeader from '../../../../components/Headers/MainHeader';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import ProfileComplete from '../../../../components/Progress/ProfileComplete';
import {verticalScale} from 'react-native-size-matters';
import AdmissionComponent from '../../../../components/Common/AdmissionComponent';

applieddata = [
  {
    id: 1,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pfone.png'),
    applied: '29 June 2020'
  },
  {
    id: 2,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pftwo.png'),
    applied: '29 June 2020'
  },
  {
    id: 3,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pftwo.png'),
    applied: '29 June 2020'
  },
];

interviewdata = [
  {
    id: 1,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pfone.png'),
    applied: '29 June 2020'
  },
  
];


const StudentAdmission = () => {
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader backIcon = {true} title={'Admissions'}  moreIcon = {true} moreIconColor = {'transparent'} />
      <ScrollView>
      <View style={GlobalStyle.ph20flex}>
        <View style={{marginTop: verticalScale(30)}}>
          
          <AdmissionComponent
            applieddata={applieddata}
            interviewdata={interviewdata}
            menufirst="Applied (36)"
            menusecond="Interviews (1)"
          />
         
        </View>
      </View>
      <View style={GlobalStyle.Height}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentAdmission;

const styles = StyleSheet.create({});
