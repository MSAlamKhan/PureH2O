import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  Dimensions,
} from 'react-native';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Colors} from '../../utils/Colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import UserWhite from '../../assets/svgs/user_white.svg';
import CustomLotti from '../../components/Modal/CustomLotti';
import Success from '../../components/Modal/Success';
import ErrorModal from '../../components/Modal/ErrorModal';
import Error from '../../components/Errors/Error';
import PasswordInput from '../../components/Inputs/PasswordInput';
import {useForm} from 'react-hook-form';
import {updatePassword} from '../../redux/actions/AuthAction';

const ForgotPass = ({navigation, route}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const {type, data} = route.params;

  console.log('type', type, data);

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  const onChange = item => {
    if (item.password == item.confirmpassword) {
      updatePassword(data, item, navigation, type, setSuccessModal);
    } else {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
      }, 5000);
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar barStyle="light-content" />
      <View>
        <UserWhite
          style={{
            alignSelf: 'center',
            marginTop: StatusBar.currentHeight + scale(20),
          }}
        />
        <View style={{marginTop: verticalScale(15)}}>
          <Text style={GlobalStyle.Heading}>Password Recovery</Text>
          <Text style={GlobalStyle.SubHeading}>
            Enter a new strong password
          </Text>
        </View>
      </View>
      <View style={styles.OtpBox}>
        <PasswordInput
          uppertrue
          upperText={'New Password'}
          fontSize={scale(16)}
          iconcolor={Colors.ThemeBlue}
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Must be 8 characters long',
            },
            maxLength: {
              value: 16,
              message: '*Password too long',
            },
          }}
          placeholder="New Password"
          maxLength={20}
        />

        {errors.password && (
          <Error
            textStyle={{color: Colors.Black}}
            text={errors.password.message}
          />
        )}

        <PasswordInput
          uppertrue
          upperText={'Confirm Password'}
          fontSize={scale(16)}
          iconcolor={Colors.ThemeBlue}
          control={control}
          name="confirmpassword"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Must be 8 characters long',
            },
            maxLength: {
              value: 16,
              message: '*Password too long',
            },
          }}
          placeholder="Confirm Password"
          maxLength={20}
        />

        {errors.confirmpassword && (
          <Error
            textStyle={{color: Colors.Black}}
            text={errors.confirmpassword.message}
          />
        )}

        <CustomButton
          onPress={handleSubmit(onChange)}
          containerRestyle={{
            backgroundColor: Colors.ThemeBlue,
            borderRadius: scale(30),
            marginTop: windowHeight * 0.1,
          }}
          title={'Continue'}
          textStyle={{color: Colors.White}}
        />

        <View style={{height: windowHeight * 0.25}} />
      </View>

      <Success
        isVisible={successModal}
        onClose={() => setSuccessModal(false)}
        message={'Your password has been updated'}
      />
      <ErrorModal
        visible={errorModal}
        onClose={() => setErrorModal(false)}
        message={'Passwords donot match!'}
      />
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  OtpBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 1,
    backgroundColor: Colors.OTPContainer,
    marginTop: verticalScale(15),
    paddingHorizontal: moderateScale(20),
  },

  OtpText: {
    fontFamily: Font.Poppins400,
    fontSize: scale(14),
  },

  Text: {
    color: Colors.Black,
    fontFamily: Font.Gilroy500,
  },
  containerStyle: {
    backgroundColor: Colors.White,
    borderColor: Colors.ThemeBlue,
    width: '30%',
    height: verticalScale(40),
  },
});
