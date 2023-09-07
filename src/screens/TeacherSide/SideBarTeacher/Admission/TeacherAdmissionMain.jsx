import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ConnectComponent from '../../../../components/Common/ConnectComponent';
import MainHeader from '../../../../components/Headers/MainHeader';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import ProfileComplete from '../../../../components/Progress/ProfileComplete';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AdmissionCard from '../../../../components/Common/Cards/AdmissionCard';
import AdmissionInfoCard from '../../../../components/Common/Cards/AdmissionInfoCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../utils/Colors';
import {Font} from '../../../../utils/font';
import AcceptDenyModal from '../../../../components/Common/CommonModals/AcceptDenyModal';

applieddata = [
  {
    id: 1,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pfone.png'),
    applied: '29 June 2020',
  },
  {
    id: 2,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pftwo.png'),
    applied: '29 June 2020',
  },
  {
    id: 3,
    school: 'ABC School',
    address: 'DHA Phase 6, Karachi',
    img: require('../../../../assets/image/pftwo.png'),
    applied: '29 June 2020',
  },
];

const TeacherAdmissionMain = ({navigation}) => {
  const [acceptModal, setAcceptModal] = useState(false);

  const [denyModal, setDenyModal] = useState(false);
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={true}
        title={'Admissions'}
        moreIcon={true}
        moreIconColor={'transparent'}
      />
      <ScrollView>
        <View style={GlobalStyle.ph20flex}>
          <View style={{marginTop: 10}}>
            <ProfileComplete progress={0.65} text={true} />
          </View>
          {/* <AdmissionInfoCard applied={'36'} interview={'5'} /> */}
          <View style={{marginTop: verticalScale(30)}}>
            <View style={GlobalStyle.RowBetween}>
              <Text style={styles.Student}> Recent</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('teacheralladmission')}
                style={styles.MoreView}>
                <Text style={styles.MoreText}>More</Text>
                <View style={styles.Box}>
                  <MaterialIcons
                    name={'keyboard-arrow-right'}
                    color={Colors.Black}
                    size={scale(16)}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {applieddata.map(item => {
              return (
                <AdmissionCard
                  img={item.img}
                  address={item.address}
                  applied={item.applied}
                  school={item.school}
                  acceptdeny={true}
                  onPressAccept={() => setAcceptModal(true)}
                  onPressDeny={() => setDenyModal(true)}
                />
              );
            })}
          </View>
        </View>

        <AcceptDenyModal
        heading = {'Accept'}
          isVisible={acceptModal}
          onBackdropPress={() => setAcceptModal(false)}
          onPressClose={() => setAcceptModal(false)}
          accept = {true}
          onPressSubmit = {() => setAcceptModal(false)}
        />

        <AcceptDenyModal
            heading = {'Deny'}
          isVisible={denyModal}
          onBackdropPress={() => setDenyModal(false)}
          onPressClose={() => setDenyModal(false)}
          onPressSubmit = {() => setDenyModal(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeacherAdmissionMain;

const styles = StyleSheet.create({
  Student: {
    fontFamily: Font.Poppins700,
    fontSize: scale(18),
    color: '#7E7F83',
  },
  MoreView: {
    borderRadius: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: scale(5),
    backgroundColor: Colors.White,
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(5),
  },
  MoreText: {
    fontFamily: Font.Poppins700,
    fontSize: scale(12),
    color: '#303030',
  },
  Box: {
    borderRadius: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#303030',
    marginLeft: moderateScale(5),
  },
});
