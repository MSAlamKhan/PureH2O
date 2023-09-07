import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import {registerUser} from '../../redux/actions/AuthAction';

const AccountCreated = ({navigation, route}) => {
  const {type, data, item, socialData} = route.params;
  console.log('item', item, data);

  const device = Platform.OS;
  console.log('device', device);

  const registerAcc = () => {
    registerUser(data, item, device, navigation, type, socialData);
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.ThemeBlue, flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: verticalScale(380),
              width: scale(370),
              alignSelf: 'center',
              marginTop: verticalScale(20),
            }}>
            <Image
              source={require('../../assets/image/account_created.png')}
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>

        <View style={styles.GreyBox}>
          <View style={{marginTop: verticalScale(20), alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Font.Manrope700,
                color: Colors.AccountCreatedTitle,
                fontSize: scale(28),
              }}>
              Lets Create Your Account!
            </Text>
          </View>

          <View style={{marginTop: verticalScale(15), alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Font.Manrope400,
                color: Colors.AccountCreatedText,
                fontSize: scale(15),
              }}>
              Lumio account has been created, you can now donate to thousands of
              campaign or fundraising, do you want to explore some?
            </Text>
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <CustomButton
              containerRestyle={{borderRadius: scale(30)}}
              // onPress={() => navigation.navigate('addbio')}
              onPress={() => registerAcc()}
              title={'Continue'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountCreated;

const styles = StyleSheet.create({
  GreyBox: {
    flex: 0.9,
    paddingHorizontal: moderateScale(25),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: Colors.OTPContainer,
  },
});
