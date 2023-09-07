import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';

const OptionsModal = props => {
  return (
    <ReactNativeModal
      onBackdropPress={props.onBackdropPress}
      backdropOpacity={0}
      isVisible={props.isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      style={[styles.MainModal, props.restyleMainModal]}>
      <View style={[styles.ModalContainer, props.ModalRestyle]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={props.onPress}
          style={[styles.MoreBox, props.restyleBox]}>
          <Text style={styles.MoreText}>{props.OptionOne}</Text>
        </TouchableOpacity>

        {props.onlyOne ? null : props.onlyTwo ? (
          <TouchableOpacity
            onPress={props.onPressTwo}
            activeOpacity={0.6}
            style={styles.MoreBox}>
            <Text style={styles.MoreText}>{props.OptionTwo}</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              onPress={props.onPressTwo}
              activeOpacity={0.6}
              style={styles.MoreBox}>
              <Text style={styles.MoreText}>{props.OptionTwo}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onPressThree}
              activeOpacity={0.6}
              style={styles.MoreBox}>
              <Text style={[styles.MoreText, props.RestyleThree]}>
                {props.OptionThree}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ReactNativeModal>
  );
};

export default OptionsModal;

const styles = StyleSheet.create({
  MoreBox: {
    backgroundColor: Colors.White,
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  MoreText: {
    fontFamily: Font.Poppins700,
    fontSize: scale(12),
    color: Colors.Black,
  },

  ModalContainer: {
    // justifyContent:'center'
  },
});
