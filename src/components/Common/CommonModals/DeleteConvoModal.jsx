import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DeleteConvoModal = props => {
  // const onSubmitModal = data => {
  //   console.log('data', data);
  //   props.onPressClose();
  // };

  return (
    <View>
      <ReactNativeModal
        onBackdropPress={props.onBackdropPress}
        // avoidKeyboard ={true}
        scrollOffset={1}
        backdropOpacity={0}
        isVisible={props.isVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        style={[GlobalStyle.MainModal, props.restyleMainModal]}>
        <View style={[styles.ModalContainer, props.ContainerRestyle]}>
                <TouchableOpacity onPress={props.onDelete} style={GlobalStyle.Row}>
                    <MaterialCommunityIcons name = {'delete'} size={scale(24)} color ={'#F94687'}/>
                    <Text style={styles.Text}>{props.text ? props.text :'Delete Conversation'}</Text>
                </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default DeleteConvoModal;

const styles = StyleSheet.create({
  MainModal: {
    justifyContent: 'center',
    margin: 0,
    backgroundColor: Colors.ThemeBlue,
    paddingHorizontal: moderateScale(20),
  },
  ModalContainer: {
    width: '70%',
    borderRadius: scale(10),
    backgroundColor: Colors.HomeBackground,
    // alignSelf: 'center',
    // height: '75%',
    paddingVertical: verticalScale(15),
    alignSelf:'center',
    paddingHorizontal: moderateScale(10)
    

  },
  Text:{
    fontFamily: Font.Poppins700,
    fontSize: scale(15),
    color: Colors.Black,
    marginHorizontal: verticalScale(10)
  }
});
