import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import Modal, {ReactNativeModal} from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import SectionCard from '../../Cards/SectionCard';

const ExpandPostModal = props => {
  const dummy = [
    {
      Name: 'Prisha Mclaughlin',
      Time: '52 minute ago',
      source: require('../../../assets/image/admission.png'),
      LongText:
        'One good thing about music, when it hits you, you feel no pain. ❤️',
      Number: '14',
      avatar: require('../../../assets/image/dp2.png'),
    },
  ];

  // dummy data

  return (
    <ReactNativeModal
      isVisible={props.isVisible}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={300}
      animationOutTiming={1}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      backdropOpacity={0}
      onBackdropPress={props.onBackdropPress}
      onBackButtonPress={props.onBackButtonPress}
      style={GlobalStyle.MainModal}>
      <SafeAreaView
        style={[
          GlobalStyle.ModalContainer,
          {
            backgroundColor: 'white',
            width: '80%',
            paddingHorizontal: moderateScale(15),
          },
        ]}>
        {dummy.map(item => {
          return <SectionCard
           
            resizeMode="contain" data={item} />;
        })}
      </SafeAreaView>
    </ReactNativeModal>
  );
};
export default ExpandPostModal;
