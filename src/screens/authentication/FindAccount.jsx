import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import UserWhite from '../../assets/svgs/user_white.svg';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import CustomInput from '../../components/Inputs/CustomInput';
import {useForm} from 'react-hook-form';
import Error from '../../components/Errors/Error';
import CustomButton from '../../components/CustomButton';
import {searchByEmail} from '../../redux/actions/AuthAction';
import ErrorModal from '../../components/Modal/ErrorModal';
import {useDispatch} from 'react-redux';

const FindAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get('window').height;
  const [error, setError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const onSubmit = data => {
    dispatch(searchByEmail(data, navigation, setError, 'v'));
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
        <View
          style={{
            paddingHorizontal: moderateScale(10),
            marginTop: verticalScale(15),
          }}>
          <Text style={GlobalStyle.Heading}>Find Account</Text>
          <Text style={GlobalStyle.SubHeading}>
            Give a valid Email to get OTP to reset Your Password
          </Text>
        </View>
      </View>
      <View style={styles.OtpBox}>
        <View style={{height: windowHeight * 0.1}} />
        <CustomInput
          fontSize={scale(16)}
          MaterialIcons={true}
          MaterialIcons_Name="email"
          iconcolor={Colors.placeholderTextColor}
          size={scale(24)}
          control={control}
          restyle={{flex: 1, marginLeft: moderateScale(5)}}
          keyboardType="email-address"
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Email is not valid',
            },
          }}
          placeholder="Email Address"
        />
        {errors.email && <Error text={errors.email.message} />}
        <View style={[GlobalStyle.Row, {justifyContent: 'flex-end'}]}>
          <CustomButton
            onPress={() => navigation.navigate('signin')}
            title="Cancel"
            containerRestyle={[
              GlobalStyle.CustomButtonRestyle,
              styles.containerStyle,
            ]}
            textStyle={{color: Colors.ThemeBlue, fontSize: scale(14)}}
          />
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title="Search"
            containerRestyle={[
              GlobalStyle.CustomButtonRestyle,
              styles.containerStyle,
            ]}
            textStyle={{color: Colors.ThemeBlue, fontSize: scale(13)}}
          />
        </View>
      </View>

      <ErrorModal
        visible={error}
        onBackdropPress={() => setError(false)}
        message={'Email not Exist'}
      />
    </SafeAreaView>
  );
};

export default FindAccount;

const styles = StyleSheet.create({
  OtpBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 1,
    backgroundColor: Colors.OTPContainer,
    marginTop: verticalScale(15),
    paddingHorizontal: moderateScale(20),
  },
  containerStyle: {
    backgroundColor: Colors.White,
    borderColor: Colors.ThemeBlue,
    width: '30%',
    height: verticalScale(40),
    marginLeft: scale(10),
  },
});
