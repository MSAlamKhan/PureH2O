import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressBackground from '../../assets/svgs/progressback.svg';
import {useNavigation} from '@react-navigation/native';

const ProfileComplete = props => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('profilescreen')}  style={styles.ProgressBox}>
      <Progress.Circle
        progress={props.progress}
        animated={true}
        // showsText = {true}
        // textStyle = {{color : Colors.Purple}}
        // style={{marginTop: verticalScale(5)}}
        size={60}
        borderWidth={0}
        showsText={props.text}
        textStyle={{
          fontFamily: Font.Poppins800,
          fontSize: scale(15),
          color: Colors.Purple,
          justifyContent: 'center',
        }}
        // width={null}
        // borderColor={Colors.Grey}
        // borderWidth={3}
        // unfilledColor={Colors.White}
        // height={verticalScale(10)}
        //   onProgressChange={onProgressChange}
        // fill = {'transparent'}
        fill="#00000000"
        color={Colors.Purple}
        unfilledColor={'#E3DAEE'}
      />

      <View style={{paddingHorizontal: moderateScale(20)}}>
        <Text style={styles.TextOne}>Complete your</Text>
        <Text style={styles.TextTwo}>profile</Text>
      </View>

      <TouchableOpacity
        
        style={{
          paddingHorizontal: moderateScale(10),
          flex: 1,
          alignItems: 'flex-end',
        }}>
        <MaterialIcons
          name={'keyboard-arrow-right'}
          size={scale(22)}
          color={'#BC98E9'}
          //   style={{
          //     zIndex: 99,
          //     position:'absolute',
          //     top:
          //     scale(40),
          //     right:0
          //   }}
        />
      </TouchableOpacity>

      <Image
        style={{
          position: 'absolute',
          right: 0,
          zIndex: 99,
          bottom: -15,
        }}
        source={require('../../assets/image/progress_background.png')}
      />
    </TouchableOpacity>
  );
};

export default ProfileComplete;

const styles = StyleSheet.create({
  ProgressBox: {
    borderRadius: scale(14),
    flexDirection: 'row',
    backgroundColor: Colors.CircleProgress,
    height: verticalScale(95),
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    overflow: 'hidden',
  },
  TextOne: {
    fontFamily: Font.Poppins800,
    fontSize: scale(16),
    color: Colors.Purple,
  },

  TextTwo: {
    fontFamily: Font.Poppins800,
    fontSize: scale(16),
    color: Colors.Purple,
  },
});
