import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import CustomButton from '../CustomButton';
const SuccessModal = ({
  visible,
  onClose,
  source,
  status,
  subheading,
  ...props
}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      backdropOpacity={0.8}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={[styles.modal]}>
      {props.close ? (
        <View style={styles.CloseBox}>
          <AntDesign
            name="close"
            size={scale(16)}
            color={Colors.CloseColor}
            onPress={onClose}
          />
        </View>
      ) : null}

      <View style={styles.ModalContainer}>
        <Image
          source={source}
          style={[styles.Image, props.RestyleImage]}
          resizeMode="contain"
        />
        <Text style={[GlobalStyle.Heading, {color: Colors.Black}]}>
          {status}
        </Text>
        <Text style={[GlobalStyle.SubHeading]}>{subheading}</Text>

        <CustomButton
          onPress={props.buttonPress}
          containerRestyle={{
            marginTop: verticalScale(15),
            borderRadius: scale(30),
            backgroundColor: props.bgColor ? props.bgColor : Colors.BlueButton,
          }}
          title={props.buttonTitle}
          textStyle={props.textStyle}
        />

        {props.post ? (
          <>
            {props.student ? null : (
              <>
           
                <CustomButton
                  onPress={props.buttonPressTwo}
                  containerRestyle={{
                    marginTop: verticalScale(15),
                    borderRadius: scale(30),
                    backgroundColor: props.bgColorTwo
                      ? props.bgColorTwo
                      : Colors.BlueButton,
                  }}
                  title={props.buttonTitleTwo}
                  textStyle={props.textStyle}
                />
                <CustomButton
                  onPress={props.buttonPressThree}
                  containerRestyle={{
                    marginTop: verticalScale(15),
                    borderRadius: scale(30),
                    backgroundColor: props.bgColorThree
                      ? props.bgColorThree
                      : Colors.BlueButton,
                  }}
                  title={props.buttonTitleThree}
                  textStyle={props.textStyle}
                />
              </>
            )}
          </>
        ) : null}
      </View>
    </ReactNativeModal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: scale(0),
  },
  CloseBox: {
    backgroundColor: Colors.White,
    borderRadius: 100,
    alignSelf: 'flex-end',
    marginBottom: verticalScale(15),
    padding: moderateScale(8),
    marginRight: moderateScale(15),
  },
  ModalContainer: {
    backgroundColor: Colors.White,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: scale(20),
  },
  Image: {
    alignSelf: 'center',
    marginVertical: verticalScale(20),
  },
});
