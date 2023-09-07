import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  verticalScale,
  scale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const MainHeader = props => {
  const navigation = useNavigation();

  return (
    <View style={[styles.Container, props.RestyleHeader]}>
      {props.backIcon ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <FontAwesome5
            name={'chevron-left'}
            color={props.backIconColor ? props.backIconColor : Colors.ThemeBlue}
            size={scale(20)}
          />
        </TouchableOpacity>
      ) : null}
      {props.cancel ? (
        <Text onPress={props.OnCancel} style={styles.save}>
          Cancel
        </Text>
      ) : null}

      <View style={{alignItems: 'center'}}>
        {props.title ? (
          <Text style={[styles.Text, props.RestyleTitle]}>{props.title}</Text>
        ) : null}

        {props.lastseen ? (
          <Text style={[styles.LastSeen, props.RestyleText]}>
            {props.lastseen}
          </Text>
        ) : null}
      </View>

      {props.moreIcon ? (
        <TouchableOpacity onPress={props.PressIcon} style={styles.IconBox}>
          <Feather
            name={'more-vertical'}
            color={props.moreIconColor ? props.moreIconColor : Colors.ThemeBlue}
            size={scale(20)}
          />
        </TouchableOpacity>
      ) : null}

      {props.callIcon ? (
        <View style={{}}>
          <TouchableOpacity onPress={props.closeCall} style={styles.CloseBox}>
            <AntDesign name="close" size={scale(14)} color={Colors.White} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.CallBox}>
            <Feather
              name={'phone'}
              color={props.moreIconColor ? props.moreIconColor : Colors.White}
              size={scale(14)}
            />
          </TouchableOpacity>
        </View>
      ) : null}

      {props.img ? (
        <View style={styles.ImageBox}>
          <Image source={props.img} style = {{height:'100%',width:'100%',borderRadius:scale(21)}} resizeMode="contain" />
        </View>
      ) : null}

      {props.save ? (
        <Text onPress={props.onSave} style={styles.save}>
          Save
        </Text>
      ) : null}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  Text: {
    fontFamily: Font.Poppins700,
    fontSize: scale(21),
    color: Colors.Black,
  },
  LastSeen: {
    fontFamily: Font.Poppins500,
    fontSize: scale(11),
    color: '#7D7D7D',
  },
  save: {
    fontFamily: Font.Poppins600,
    fontSize: scale(14),
    color: Colors.Black,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    borderColor: '#E8E8E8',
    borderWidth: 1,
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    marginTop: StatusBar.currentHeight + scale(15),
    paddingBottom: moderateVerticalScale(10),
  },
  IconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CloseBox: {
    backgroundColor: Colors.ThemeBlue,
    height: scale(30),
    width: scale(30),
    borderRadius: scale(40),
    // alignSelf: 'flex-end',
    // padding: moderateScale(10),
    // marginTop:verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  CallBox: {
    backgroundColor: Colors.BlueButton,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(40),
    // alignSelf: 'flex-end',
    // padding: moderateScale(10),
    marginTop: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  ImageBox :{
    height : verticalScale(56),
    width:scale(56),
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : scale(21),
    overflow:'hidden',
  
  }
});
