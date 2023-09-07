import React, { useState, useEffect } from 'react';
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
import { GlobalStyle } from '../../Constants/GlobalStyle';
import { Colors } from '../../utils/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Font } from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import UserWhite from '../../assets/svgs/user_white.svg';
import CustomLotti from '../../components/Modal/CustomLotti';
import Success from '../../components/Modal/Success';
import ErrorModal from '../../components/Modal/ErrorModal';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyEmailBReg, searchByEmail } from '../../redux/actions/AuthAction';

const Otp = ({ navigation, route }) => {
  const { data, type } = route.params;
  const dispatch = useDispatch();
  const otp = useSelector(state => state.holderReducer.otp);
  const [time, setTime] = useState(30);
  const [otpResent, setOtpResent] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const WaitOTP = () => {
    setOtpResent(true);
    setTimeout(() => {
      setOtpResent(false);
    }, 2300);
  };

  const windowHeight = Dimensions.get('window').height;
  const CELL_COUNT = 4;

  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const OtpSubmit = () => {
    if (value == otp) {
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        type == 'reset'
          ? navigation.navigate('forgotpass', {
            data: data,
            type: type,
          })
          : navigation.navigate('decide', {
            data: data,
            type: type,
          });
      }, 2000);
    } else {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
      }, 2000);
    }
  };

  const resendOtp = () => {
    if (type == 'Signup') {
      dispatch(
        VerifyEmailBReg(
          data,
          setIsEmailExist,
          setLoading,
          navigation,
          'resend',
        ),
      );
      setTimeout(() => {
        setTime(30);
      }, 1000);
    } else {
      dispatch(searchByEmail(data, navigation, setIsEmailExist, type));
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar barStyle="light-content" />
      <View>
        <View style={{
          height: scale(50),
          width: scale(50),
          alignSelf: 'center',
          marginTop: StatusBar.currentHeight + scale(20),
        }}>
          <Image
            style={{ height: "100%", width: "100%", }}
            source={require("../../assets/image/PureH2O-AppIcon.png")}
          />

        </View>
        <View style={{ marginTop: verticalScale(15) }}>
          <Text style={GlobalStyle.Heading}>OTP Verification</Text>
          <Text style={GlobalStyle.SubHeading}>
            {`We've`} just send you 6 digits code to your email {`\n`}{' '}
            {data.email} {otp}
          </Text>
        </View>
      </View>
      <View style={styles.OtpBox}>
        <View style={{ height: windowHeight * 0.1 }} />
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={
            styles.codeFieldRoot
           }
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              style={{
                backgroundColor: Colors.White,
                borderRadius: scale(30),
              }}>
              <Text
                key={index}
                style={[
                  { color: Colors.Black },
                  styles.cell,
                  isFocused && styles.focusCell,
                  Platform.OS == 'ios'
                    ? { lineHeight: verticalScale(30) }
                    : { textAlignVertical: 'center' },
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <CustomButton
          onPress={OtpSubmit}
          containerRestyle={{
            backgroundColor: Colors.ThemeBlue,
            borderRadius: scale(30),
            marginTop: windowHeight * 0.1,
          }}
          title={'Continue'}
          textStyle={{ color: Colors.White }}
        />
        <>
          <View style={{ height: windowHeight * 0.25 }} />

          {time == 0 ? (
            <TouchableOpacity
              onPress={() => resendOtp()}
              style={[
                styles.containerStyle,
                {
                  width: '70%',
                  marginTop: 0,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: scale(10),
                  marginBottom: verticalScale(10),
                },
              ]}>
              <Text style={styles.Text}>Press to Resend Your OPT</Text>
            </TouchableOpacity>
          ) : (
            <Pressable
              // onPress={WaitOTP}
              style={[
                styles.containerStyle,
                {
                  width: '70%',
                  marginTop: 0,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: scale(10),
                  marginBottom: verticalScale(10),
                },
              ]}>
              <Text style={styles.Text}>You can Reset Your OTP in {time}</Text>
            </Pressable>
          )}
        </>
      </View>
      <CustomLotti
        isVisible={otpResent}
        source={require('../../assets/lotti/otp.json')}
        Title="Your OPT has alrady been send"
      />
      <Success
        isVisible={successModal}
        onClose={() => setSuccessModal(false)}
        message={'Thanks for the OPT'}
      />
      <ErrorModal
        visible={errorModal}
        onClose={() => setErrorModal(false)}
        message={'Your OTP is not correct'}
      />
      <ErrorModal
        visible={isEmailExist}
        message={'This email already exists'}
      />
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  OtpBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 1,
    backgroundColor: Colors.OTPContainer,
    marginTop: verticalScale(15),
    paddingHorizontal: moderateScale(20),
  },

  codeFieldRoot: {
    // backgroundColor:'red',
    // width:"100%",
    marginVertical: scale(10),
  },
  cell: {
    width: scale(38),
    height: scale(45),
    fontSize: scale(20),
    textAlign: 'center',
    color: Colors.OtpText,
    fontFamily: Font.Manrope400,
    borderRadius: scale(30),
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
