import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React,{useState} from 'react';
import ConnectComponent from '../../../../components/Common/ConnectComponent';
import MainHeader from '../../../../components/Headers/MainHeader';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import {verticalScale} from 'react-native-size-matters';
import AdmissionComponent from '../../../../components/Common/AdmissionComponent';
import AcceptDenyModal from '../../../../components/Common/CommonModals/AcceptDenyModal';

applieddata = [
  {
    id: 1,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pfone.png'),
    applied: '29 June 2020',
    type: 'applied',
  },
  {
    id: 2,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pftwo.png'),
    applied: '29 June 2020',
    type: 'applied'
  },
  {
    id: 3,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pftwo.png'),
    applied: '29 June 2020',
    type: 'applied'
  },
];

interviewdata = [
  {
    id: 1,
    school: 'Aliyan School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pfone.png'),
    applied: '29 June 2020',
    type: 'interview'
  },
  
];




const SchoolAdmissionAll = () => {



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
            acceptdeny = {true}
         
          />
         
        </View>
      </View>
      <View style={GlobalStyle.Height}/>
      </ScrollView>

     
    </SafeAreaView>
  );
};

export default SchoolAdmissionAll;

const styles = StyleSheet.create({});
