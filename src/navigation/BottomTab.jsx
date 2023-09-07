import {StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../utils/Colors';

import HomeSvg from '../assets/svgs/home.svg';
import HomeActive from '../assets/svgs/home_active.svg';

import SearchSvg from '../assets/svgs/search.svg';

import PersonSvg from '../assets/svgs/persons.svg';
import PersonActive from '../assets/svgs/persons_active.svg';

import ProfileSvg from '../assets/svgs/bar_profile.svg';
import ProfileActive from '../assets/svgs/profile_active.svg';
import SuccessModal from '../components/Modal/SuccessModal';
import { IS_SIGN_IN } from '../redux/reducer/Holder';
import { useSelector } from 'react-redux';

const BottomTab = props => {

  const SignIN = useSelector(state => state.isSignin);


  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.Main}>
      <View style={[styles.FirstRow, {borderTopRightRadius: scale(40)}]}>
        <Pressable
          android_ripple={styles.android_ripple}
          onPress={() => navigation.navigate('homescreen')}
          style={styles.Boxes}>
          {props.home ? <HomeActive /> : <HomeSvg />}
          {props.home ? <View style={styles.Line} /> : null}
        </Pressable>
        <Pressable
          android_ripple={styles.android_ripple}
          onPress={() => navigation.navigate('searchscreen')}
          style={styles.Boxes}>
          {props.search ? <SearchSvg /> : <SearchSvg />}
          {props.search ? <View style={styles.Line} /> : null}
        </Pressable>
      </View>

      <Pressable onPress={openModal} style={styles.IconMainBox}>
        <View style={styles.PlusBox}>
          <Icon name="plus" size={scale(25)} color={Colors.White} />
        </View>
      </Pressable>

      <View style={[styles.FirstRow, {borderTopLeftRadius: scale(40)}]}>
        <Pressable
          android_ripple={styles.android_ripple}
          onPress={() => navigation.navigate('connectscreen')}
          style={styles.Boxes}>
          {props.person ? <PersonActive /> : <PersonSvg />}
          {props.person ? <View style={styles.Line} /> : null}
        </Pressable>

        <Pressable
          android_ripple={styles.android_ripple}
          onPress={() => navigation.navigate('profilescreen')}
          style={styles.Boxes}>
          {props.profile ? <ProfileActive /> : <ProfileSvg />}
          {props.profile ? <View style={styles.Line} /> : null}
        </Pressable>
      </View>

      <SuccessModal

      student = {SignIN == 'student@gmail.com' ? true : false  }
        close={true}
        post={true}
        visible={modalVisible}
        onClose={closeModal}
        status={SignIN == 'student@gmail.com' ? null : 'Select Option'}
        subheading={SignIN == 'student@gmail.com' ? 'Make a post now!' : 'Which type of post you need to make?'}
        source={require('../assets/image/save.png')}
        buttonTitle={SignIN == 'student@gmail.com' ? 'Post Now' : 'Admission Post'}
        buttonTitleTwo={'Event Post'}
        buttonTitleThree={'Quiz Event'}
        buttonPress={() => navigation.navigate('admissionpost')}
        buttonPressTwo={() => navigation.navigate('eventpost')}
        buttonPressThree={() => navigation.navigate('quizpost')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    flexDirection: 'row',
    height: verticalScale(65),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  FirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    backgroundColor: Colors.White,
  },

  Boxes: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlusBox: {
    backgroundColor: Colors.ThemeBlue,
    borderRadius: scale(100),
    bottom: scale(10),
    width: scale(60),
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconMainBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    top: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  Line: {
    backgroundColor: Colors.ThemeOrange,
    height: verticalScale(5),
    position: 'absolute',
    top: 0,
    borderRadius: 100,
  },
  android_ripple: {
    color: Colors.ThemeBlue,
    borderless: true,
    foreground: false,
  },
});
export default BottomTab;
