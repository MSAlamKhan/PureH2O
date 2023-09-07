import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import AdmissionCard from './Cards/AdmissionCard';
import AcceptDenyModal from './CommonModals/AcceptDenyModal';
import Success from '../Modal/Success';

const AdmissionComponent = ({
  applieddata,
  interviewdata,
  menufirst,
  menusecond,
  ...props
}) => {
  const [acceptModal, setAcceptModal] = useState(false);

  const [denyModal, setDenyModal] = useState(false);

  const [successModal, setSuccessModal] = useState(false)

  const [menu, setMenu] = useState('applied');

  const handleSuccess =()=>{
    setTimeout(() => {
      successModal(true);
    }, 2000);
    setSuccessModal(false)
  }
  const renderItem = ({item}) => {
    return (
      <AdmissionCard
        img={item.img}
        address={item.address}
        applied={item.applied}
        school={item.school}
        type={item.type}
        acceptdeny={props.acceptdeny}
        onPressAccept={() => setAcceptModal(true)}
        onPressDeny={() => setDenyModal(true)}
        interviewAccept = {() => setSuccessModal(true)}
       
      />
    );
  };

  return (
    <View style={styles.MainView}>
      <View style={styles.Bar}>
        <TouchableOpacity
          onPress={() => setMenu('applied')}
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === 'applied' ? Colors.AdmissionBox : Colors.AdmissionBar,
            },
          ]}>
          <Text
            style={[
              styles.heading,
              {
                color:
                  menu === 'applied'
                    ? Colors.AppliedColor
                    : Colors.TextDarkGrey,
              },
            ]}>
            {menufirst}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === 'interviews'
                  ? Colors.AdmissionBox
                  : Colors.AdmissionBar,
            },
          ]}
          onPress={() => setMenu('interviews')}>
          <Text
            style={[
              styles.heading,
              {
                color:
                  menu === 'interviews'
                    ? Colors.AppliedColor
                    : Colors.TextDarkGrey,
              },
            ]}>
            {menusecond}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: verticalScale(20)}}>
        <FlatList
          data={menu === 'applied' ? applieddata : interviewdata}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>

      <AcceptDenyModal
        heading={'Accept'}
        isVisible={acceptModal}
        onBackdropPress={() => setAcceptModal(false)}
        onPressClose={() => setAcceptModal(false)}
        accept={true}
        onPressSubmit={() => setAcceptModal(false)}
      />

      <AcceptDenyModal
        heading={'Deny'}
        isVisible={denyModal}
        onBackdropPress={() => setDenyModal(false)}
        onPressClose={() => setDenyModal(false)}
        onPressSubmit={() => setDenyModal(false)}
      />

      <Success
        isVisible={successModal}
        onBackdropPress ={() => setSuccessModal(false)} 
        onBackButtonPress  ={() => setSuccessModal(false)} 
        onClose={() => setSuccessModal(false)}
        message={'You have given Admission to the Student!'}
      />
    </View>
  );
};

export default AdmissionComponent;

const styles = StyleSheet.create({
  CardView: {
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
    backgroundColor: Colors.White,
    borderRadius: scale(14),
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(10),
  },
  AdmissionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: '65%',
  },
  ImgView: {
    height: scale(56),
    width: scale(56),
    borderRadius: scale(21),
  },
  StatusDot: {
    width: scale(12),
    height: scale(12),
    position: 'absolute',
    borderRadius: scale(30),
    bottom: 0,
    right: 2,
    borderWidth: 1,
    borderColor: Colors.White,
    backgroundColor: Colors.StatusDot,
  },

  Connect: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.35,
  },

  Info: {
    marginLeft: moderateScale(12),
    flex: 1,
  },
  NameStyle: {
    fontFamily: Font.Urbanist500,
    fontSize: scale(16),
    color: Colors.TextBlue,
  },
  UserNameStyle: {
    fontFamily: Font.Urbanist500,
    fontSize: scale(14),
    color: Colors.MoreColor,
  },

  Bar: {
    backgroundColor: Colors.AdmissionBar,
    flexDirection: 'row',
    borderRadius: scale(20),
    padding: verticalScale(10),
  },
  MenuBox: {
    justifyContent: 'center',
    height: verticalScale(40),
    alignItems: 'center',
    width: '50%',
    borderRadius: scale(8),
  },

  heading: {
    fontSize: scale(16),
    fontFamily: Font.Poppins700,
  },

  Applied: {
    flexDirection: 'row',
    marginTop: verticalScale(25),
    justifyContent: 'space-between',
  },
  AppliedText: {
    color: Colors.AppliedColor,
    fontFamily: Font.Poppins300,
    fontSize: scale(14),
  },

  DetailText: {
    color: Colors.DetailsColor,
    fontFamily: Font.Poppins500,
    fontSize: scale(14),
  },
});
