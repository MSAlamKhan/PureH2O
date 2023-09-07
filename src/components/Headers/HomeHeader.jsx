import {Image, StatusBar, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import Chat from '../../assets/svgs/chats.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const HomeHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.Header, props.RestyleHeader]}>
      {props.hideBar ? null : (
        <Entypo
          name={'menu'}
          size={scale(28)}
          color={Colors.Black}
          onPress={() => navigation.navigate('sidebarscreen')}
        />
      )}

      <View style={{marginRight: moderateScale(25)}}>
        <View>
          <View>
            <Text style={styles.Welcome}>{props.welcome}</Text>
          </View>
          <View style={{marginTop: verticalScale(5)}}>
            <Text style={[styles.ScreenName, props.RestyleScreenName]}>
              {props.screename}
            </Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.hideMsg ? null : (
          <TouchableOpacity onPress={()=>navigation.navigate('messagescreen')} style={styles.MessageBox}>
            <Chat />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={()=>navigation.navigate('profilescreen')} style={styles.ProfileBox}>
          <Image
            source={require('../../assets/image/headerimg.png')}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  Header: {
    height: verticalScale(80),
    backgroundColor: Colors.HomeBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight + scale(10),
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  Welcome: {
    fontFamily: Font.Poppins500,
    color: Colors.HomeWelcome,
    fontSize: scale(16),
  },
  ScreenName: {
    fontFamily: Font.Poppins800,
    color: Colors.Black,
    fontSize: scale(20),
  },

  MessageBox: {
    height: scale(40),
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    backgroundColor: Colors.MessageBox,
  },

  ProfileBox: {
    height: scale(56),
    width: scale(56),
    borderRadius: scale(21),
    marginLeft: moderateScale(15),
    backgroundColor: Colors.GreyBox,
  },
});
