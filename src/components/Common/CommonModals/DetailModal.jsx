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

const DetailModal = props => {
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
            <Text style={styles.Text}>Application Details</Text>

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
            <Text style={[styles.Text,{fontSize: scale(14)}]}>Applied on: May 3rd</Text>

            <View style={styles.DetailView}>
              <Text style={styles.DescText}>
                I, the student of class 7th want to apply in your School. I have
                a good academic record and i have previously studied in Falcon
                School. I want to switch to your school because it is a well
                known school where I can grow and enhance my skills.
                I want to switch to your school because it is a well
                known school where I can grow and enhance my skills.
              </Text>
            </View>

          </View>

          {/* <View style={styles.ButtonView}>
            <CustomButton
              title={'Submit'}
              containerRestyle={{
                backgroundColor: Colors.White,
                borderRadius: scale(30),
              }}
              textStyle={{color: Colors.SignInText}}
              onPress={props.onPressSubmit}
            />
          </View> */}
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default DetailModal;

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

  DetailView: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(15),
    backgroundColor: Colors.White,
    borderRadius: scale(30),
    borderColor: Colors.White,
    alignItems:'center',
    justifyContent: 'center',
    marginVertical:verticalScale(20)
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

  DescText: {
    fontFamily: Font.Poppins600,
    fontSize: scale(15),
    color: Colors.Black,
    letterSpacing: 0.2
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

//   ButtonView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: moderateScale(20),
//   },
});
