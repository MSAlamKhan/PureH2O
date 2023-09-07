import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { GlobalStyle } from '../../Constants/GlobalStyle';
import { Colors } from '../../utils/Colors';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { Font } from '../../utils/font';
import SiginRegisterButton from '../../components/SiginRegisterButton';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/Inputs/CustomInput';
import CustomButton from '../../components/CustomButton';
import UserWhite from '../../assets/svgs/user_white.svg';
import Error from '../../components/Errors/Error';
import PasswordInput from '../../components/Inputs/PasswordInput';
import Loading from '../../components/Modal/Loading';
import ErrorModal from '../../components/Modal/ErrorModal';
import { VerifyEmailBReg, registerUser } from '../../redux/actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';
import AccountTypeButtons from '../../components/AccountTypeButtons';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const socialData = useSelector(state => state.holderReducer.social_data);
  const [errorModal, setErrorModal] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [AccountType, setAccountType] = useState("customer");
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstname: socialData?.firstName,
      lastname: socialData?.lastName,
      email: socialData?.email,
    },
  });

  const onSubmit = data => {
    if (socialData?.uID) {
      navigation.navigate('decide', {
        data: data,
        type: 'social',
        socialData: socialData,
      });
      // registerUser(data, item, device, navigation);
    } else {
      if (data.password == data.confirm_password) {
        // navigation.navigate('otp', {
        //   type: 'Signup',
        //   data: data,
        // });
        dispatch(
          VerifyEmailBReg(
            data,
            setIsEmailExist,
            setLoading,
            navigation,
            'Signup',
          ),
        );
      } else {
        setErrorModal(true);
        setTimeout(() => {
          setErrorModal(false);
        }, 2000);
      }
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            GlobalStyle.ph20,
            {
              marginTop: StatusBar.currentHeight + scale(10),
              paddingTop: moderateScale(5),
            },
          ]}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <View style={{
              height: scale(50),
              width: scale(50)
            }}>
              <Image
                style={{ height: "100%", width: "100%", }}
                source={require("../../assets/image/PureH2O-AppIcon.png")}
              />

            </View>
          </View>

          <View>
            <Text style={styles.Heading}>PureH2O</Text>

            <Text
              style={{
                color: Colors.White,
                fontFamily: Font.Poppins700,
                fontSize: scale(12),
                marginTop: verticalScale(12),
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{' '}
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: verticalScale(20) }}>
            {/* <SiginRegisterButton
              onPress={() => navigation.navigate('signin')}
              MainBox={{ backgroundColor: Colors.White }}
              SignInText={{ color: Colors.TextDarkGrey }}
              RegisterContainer={{
                backgroundColor: Colors.ThemeBlue,
                shadowColor: '#000',

                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 1.2,
              }}
              RegisterText={{
                color: Colors.White,
              }}
            /> */}
            <AccountTypeButtons
              onPress={() => setAccountType("customer")}
              onPressTwo={() => setAccountType("shop")}
              MainBox={{ backgroundColor: Colors.White }}
              SignInText={{ color:AccountType == "customer" ? Colors.White : Colors.TextDarkGrey }}
              SigninContainer={{
                backgroundColor: AccountType == "customer" ? Colors.ThemeBlue : Colors.White,
                shadowColor: '#000',

                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 1.2,
              }}
              RegisterContainer={{
                backgroundColor: AccountType == "shop" ? Colors.ThemeBlue : Colors.White,
                shadowColor: '#000',

                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 1.2,
              }}
              RegisterText={{
                color: AccountType == "shop" ? Colors.White : Colors.TextDarkGrey ,
              }}
            />
          </View>

          <View>
         {
          AccountType == "shop" &&
          <>
         <CustomInput
              fontSize={scale(16)}
              IonIcons={true}
              IonIcons_Name="person-outline"
              iconcolor={Colors.placeholderTextColor}
              restyle={{ paddingHorizontal: moderateScale(10) }}
              size={scale(20)}
              control={control}
              // keyboardType=''
              name="shopName"
              rules={{
                required: 'Shop Name is required',
              }}
              placeholder="Shop Name"
            />
            {errors.shopName && <Error text={errors.shopName.message} />}
         </>}
            
            <CustomInput
              fontSize={scale(16)}
              IonIcons={true}
              IonIcons_Name="person-outline"
              restyle={{ paddingHorizontal: moderateScale(10) }}
              iconcolor={Colors.placeholderTextColor}
              size={scale(20)}
              control={control}
              // keyboardType=''
              name="userName"
              rules={{
                required: 'User Name is required',
              }}
              placeholder="User Name"
            />
            {errors.userName && <Error text={errors.userName.message} />}

            <CustomInput
              fontSize={scale(16)}
              MaterialIcons={true}
              MaterialIcons_Name="email"
              iconcolor={Colors.placeholderTextColor}
              size={scale(20)}
              restyle={{ paddingHorizontal: moderateScale(10) }}
              control={control}
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
            <CustomInput
              fontSize={scale(16)}
              MaterialIcons={true}
              MaterialIcons_Name="house"
              iconcolor={Colors.placeholderTextColor}
              size={scale(20)}
              restyle={{ paddingHorizontal: moderateScale(10) }}
              control={control}
              keyboardType="default"
              name="address"
              rules={{
                required: 'Address is required',
                pattern: {
                  message: AccountType == 'customer' ? 'House Address is not valid' : "Shop Address is not valid",
                },
              }}
              placeholder= {AccountType =='customer' ? "House Address" : "Shop Address"}
            />
            {errors.address && <Error text={errors.address.message} />}

            <CustomInput
              fontSize={scale(16)}
              Feather={true}
              Feather_Name="phone"
              iconcolor={Colors.placeholderTextColor}
              size={scale(20)}
              restyle={{ paddingHorizontal: moderateScale(10) }}
              control={control}
              name="phonenumber"
              maxLength={16}
              rules={{
                required: 'Phone number is required',
                message: 'Please enter your phone number',
                maxLength: {
                  value: 15,
                  message: 'Please enter a valid phone number',
                },
              }}
              placeholder={'Phone Number'}
              keyboardType={'numeric'}
              text={'Phone Number'}
            />
            {errors.phonenumber && <Error text={errors.phonenumber.message} />}
            {socialData?.uID ? null : (
              <>
                <PasswordInput
                  fontSize={scale(16)}
                  iconcolor={Colors.placeholderTextColor}
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
                  placeholder="Create Password"
                  maxLength={20}
                />
                {errors.password && <Error text={errors.password.message} />}

                <PasswordInput
                  fontSize={scale(16)}
                  iconcolor={Colors.placeholderTextColor}
                  control={control}
                  name="confirm_password"
                  rules={{
                    required: 'Confirm Password is required',
                    minLength: {
                      value: 8,
                      message: 'Must be 8 characters long',
                    },
                    maxLength: {
                      value: 16,
                      message: '*Password is too long',
                    },
                  }}
                  placeholder="Confirm  Password"
                  maxLength={20}
                />
                {errors.confirm_password && (
                  <Error text={errors.confirm_password.message} />
                )}
              </>
            )}
          </View>

          <View style={{ marginVertical: verticalScale(25) }}>
            <CustomButton
              onPress={handleSubmit(onSubmit)}
              // onPress={() =>
              //   navigation.navigate('otp', {
              //     type: 'Signup',
              //     data: 'email',
              //   })
              // }
              containerRestyle={styles.BtnContainerStyle}
              title={'Sign up'}
              textStyle={styles.BtnTextStyle}
            />
          </View>
        </View>
      </ScrollView>
      <ErrorModal visible={errorModal} message={'Password is not matched'} />
      <ErrorModal
        visible={isEmailExist}
        message={'This email already exists'}
      />
      <Loading isVisible={loading} />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  Heading: {
    color: Colors.White,
    fontFamily: Font.Poppins800,
    fontSize: scale(20),
  },
  BtnTextStyle: {
    color: Colors.SignInText,
    fontFamily: Font.Gilroy600,
    fontSize: scale(18),
    textAlign: 'center',
  },
  BtnContainerStyle: {
    backgroundColor: Colors.White,
    borderRadius: scale(30),
  },
});
