import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import SiginRegisterButton from '../../components/SiginRegisterButton';
import CustomInput from '../../components/Inputs/CustomInput';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Errors/Error';
import User from '../../assets/svgs/user.svg';
import {useDispatch} from 'react-redux';
import {IS_SIGN_IN} from '../../redux/reducer/Holder';
import NetInfo from '@react-native-community/netinfo';
import PasswordInput from '../../components/Inputs/PasswordInput';
import {loginApi} from '../../redux/actions/AuthAction';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const device = Platform.OS;
  const [isConnected, setIsConnected] = useState('');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const onSubmit = data => {
    dispatch(loginApi(data, device));
  };
  const onForget = () => {
    navigation.navigate('findaccount', {
      type: 'reset',
      // data: data,
    });
  };

  return (
    <SafeAreaView style={GlobalStyle.LightContainer}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[
          GlobalStyle.ph20,
          {
            marginTop: StatusBar.currentHeight || 0,
            paddingTop: moderateScale(5),
          },
        ]}>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
            <View style={{height:scale(50),
          width:scale(50)}}>
          <Image
          style={{height:"100%", width:"100%",}}
          source={require("../../assets/image/PureH2O-AppIcon.png")}
          />

            </View>
        </View>

        <View>
          <Text
            style={{
              color: Colors.Black,
              fontFamily: Font.Poppins800,
              fontSize: scale(20),
            }}>
            PureH2O
          </Text>

          <Text
            style={{
              color: Colors.TextAlmostGrey,
              fontFamily: Font.Poppins700,
              fontSize: scale(12),
              marginTop: verticalScale(12),
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: verticalScale(20)}}>
          {/* <SiginRegisterButton
            onPressTwo={() => navigation.navigate('register')}
            SignInText={{color: Colors.TextBlue}}
            SigninContainer={{
              backgroundColor: Colors.White,
              shadowColor: '#000',

              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 1.2,
            }}
            RegisterText={{
              color: Colors.TextDarkGrey,
            }}
          /> */}
          <Text
           style={{
            color: Colors.TextBlue,
            fontFamily: Font.Poppins700,
            fontSize:scale(20),
            marginTop: verticalScale(12),
          }}
          >Sign In</Text>
        </View>
        <View>
          <CustomInput
            fontSize={scale(16)}
            MaterialIcons={true}
            restyle={{paddingHorizontal: moderateScale(10)}}
            MaterialIcons_Name="email"
            size={scale(20)}
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
          {errors.email && (
            <Error
              textStyle={{color: Colors.Black}}
              text={errors.email.message}
            />
          )}

          <PasswordInput
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
            placeholder="Create Password"
            maxLength={20}
          />

          {errors.password && (
            <Error
              textStyle={{color: Colors.Black}}
              text={errors.password.message}
            />
          )}
        </View>

        <View style={{marginTop: verticalScale(25)}}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            containerRestyle={{backgroundColor: Colors.InputContainer}}
            textStyle={{color: Colors.White}}
            title={'SIGN IN'}
          />

          <View
            style={{
              flexDirection: 'row',

              marginTop: verticalScale(15),
              justifyContent:'space-around'
              // width: '100%',
              // alignSelf: 'center',
            }}>
            <Text
              style={{
                color: Colors.ForgotPassText,
                fontFamily: Font.Gilroy400,
                fontSize: scale(14),
              }}>
              Forgot your password?
            </Text>
            <TouchableOpacity
              onPress={onForget}
              >
              <Text
                style={{
                  color: Colors.TextBlue,
                  textDecorationLine: 'underline',
                  fontFamily: Font.Gilroy700,
                  fontSize: scale(14),
                }}>
                Reset here
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: verticalScale(35)}}>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                color: Colors.Black,
                fontFamily: Font.Poppins500,
                fontSize: scale(14),
              }}>
              Or sign in with
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: verticalScale(25),
            }}>
            <CustomButton
              containerRestyle={{
                backgroundColor: Colors.White,
                width: '48%',
                borderWidth: 1,
                borderColor: Colors.ThemeBlue,
                borderRadius: scale(30),
                height: verticalScale(40),
              }}
              google={true}
            />

            <CustomButton
              containerRestyle={{
                backgroundColor: Colors.White,
                width: '48%',
                borderWidth: 1,
                borderColor: Colors.ThemeBlue,
                borderRadius: scale(30),
                height: verticalScale(40),
              }}
              facebook={true}
            />
          </View>

          <View
            style={{
              marginTop: verticalScale(30),
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: Colors.TextBlue,
                fontSize: scale(13),
                fontFamily: Font.Gilroy600,
              }}>
              Create new account{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text
                style={{
                  color: Colors.Yellow,
                  fontSize: scale(13),
                  fontFamily: Font.Gilroy600,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
