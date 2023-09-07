import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { Colors } from '../../utils/Colors';
import { verticalScale } from 'react-native-size-matters';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const ErrorModal = (props) => {
  return (
    <Modal
      visible={props.visible}
      onBackdropPress={props.onBackdropPress}
      onBackButtonPress={props.onBackButtonPress}
      style={GlobalStyle.MainModal}>
      <SafeAreaView style={GlobalStyle.ModalContainer}>
        <LottieView
          autoPlay
          style={{ height: verticalScale(150), alignSelf: 'center' }}
          source={require('../../assets/lotti/error.json')}
        />
        <Text style={[GlobalStyle.ModalText, { color: Colors.Danger }]}>
          {props.message}
        </Text>
      </SafeAreaView>
    </Modal>
  )
}
export default ErrorModal
