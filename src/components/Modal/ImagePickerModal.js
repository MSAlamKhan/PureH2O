import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Font} from '../../utils/font';

const ImagePickerModal = ({OnPressCamera, OnPressPhoto, visible, onClose}) => {
  return (
    <View>
      <ReactNativeModal
        backdropOpacity={0.3}
        onBackdropPress={onClose}
        isVisible={visible}
        style={{
          width: '100%',
          margin: 0,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={onClose} style={styles.CrossBOx}>
            <Entypo name="cross" size={scale(25)} color={Colors.White} />
          </TouchableOpacity>

          <View style={styles.SecCon}>
            <TouchableOpacity onPress={OnPressPhoto} style={styles.ModalBtn}>
              <MaterialIcons
                name="photo"
                size={scale(32)}
                color={Colors.Main}
              />
              <Text style={styles.Text1}>Upload picture</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnPressCamera} style={styles.ModalBtn}>
              <Entypo name="camera" size={scale(30)} color={Colors.Main} />
              <Text style={styles.Text1}>Take a picture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({
  SecCon: {
    paddingVertical: moderateScale(15),
    width: '100%',
    backgroundColor: Colors.ThemeBlue,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    flexDirection: 'row',
  },
  Text1: {
    fontSize: scale(11),
    fontFamily: Font.Gilroy700,
    color: Colors.placeholderTextColor,
  },
  ModalBtn: {
    flex: 1,
    margin: verticalScale(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  CrossBOx: {
    backgroundColor: Colors.Main,
    width: scale(25),
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: verticalScale(-10),
    zIndex: 9,
    aspectRatio: 1 / 1,
  },
});
