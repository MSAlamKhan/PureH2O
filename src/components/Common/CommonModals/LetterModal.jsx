import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../Inputs/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../CustomButton';

const LetterModal = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});


  return (
    <View>
      <ReactNativeModal
        onBackdropPress={props.onBackdropPress}
        backdropOpacity={0}
        isVisible={props.isVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        style={[GlobalStyle.MainModal, props.restyleMainModal]}>
        <View style={[styles.ModalContainer, props.ContainerRestyle]}>
          <View style={styles.Heading}>
            <Text style={styles.Text}>{props.heading}</Text>

            <View style={styles.CloseBox}>
              <AntDesign
                onPress={props.onPressClose}
                name="close"
                size={scale(14)}
                color={Colors.CloseColor}
              />
            </View>
          </View>

          <View
            style={[
              GlobalStyle.ModalLine,
              {
                width: '100%',
                height: verticalScale(1),
                backgroundColor: Colors.White,
              },
            ]}
          />

          <View style={styles.ApplicationContent}>
            <Text style={styles.Text}>{props.question}</Text>

            <CustomInput
              multiline={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                height: verticalScale(250),
                borderColor: Colors.White,
                alignItems: 'flex-start',
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              size={scale(24)}
              control={control}
              name="description"
              rules={{
                required: 'Description is required',
              }}
            />
          </View>

          <View style={styles.ButtonView}>
            <CustomButton
              title={'Submit'}
              containerRestyle={{
                backgroundColor: Colors.White,
                borderRadius: scale(30),
              }}
              textStyle={{color: Colors.SignInText}}
              onPress={props.onPressSubmit}
            />
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default LetterModal;

const styles = StyleSheet.create({
  MainModal: {
    justifyContent: 'center',
    margin: 0,
    backgroundColor: Colors.ThemeBlue,
    paddingHorizontal: moderateScale(20),
  },
  ModalContainer: {
    width: '85%',
    borderRadius: scale(14),
    backgroundColor: Colors.ThemeBlue,
    alignSelf: 'center',
    height: '75%',
    paddingVertical: verticalScale(25),
  },

  Heading: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },

  Text: {
    fontFamily: Font.Poppins600,
    fontSize: scale(16),
    color: Colors.White,
  },

  CloseBox: {
    backgroundColor: Colors.CloseBoxBackground,
    borderRadius: 100,
    alignSelf: 'flex-end',
    padding: moderateScale(3),
  },

  ApplicationContent: {
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(15),
  },

  ButtonView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
  },
});
