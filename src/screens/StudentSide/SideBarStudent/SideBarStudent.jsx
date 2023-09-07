import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import UserSvg from '../../../assets/svgs/user.svg';
import {Font} from '../../../utils/font';
import {Colors} from '../../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PreviewSvg from '../../../assets/svgs/preview.svg';
import SideBarContent from '../../../components/Common/SideBar/SideBarContent';
import {GlobalStyle} from '../../../Constants/GlobalStyle';

const SideBarStudent = ({navigation}) => {
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <View style={styles.TitleView}>
        <View style={styles.TextImageView}>
          <View style={styles.Image}>
            <UserSvg />
          </View>
          <View style={{alignItems: 'center', marginLeft: moderateScale(10)}}>
            <Text style={styles.HeadingText}>School Manual</Text>

          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.CloseBox}>
          <AntDesign name="close" size={scale(14)} color={Colors.CloseColor} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.SkyBlueContainer}>
          <View style={styles.DetailsMain}>
            <View style={styles.Contents}>
              <SideBarContent student={true} />
            </View>

            <View style={styles.GreyImage}>
              {/* <Image
            source={require('../../../assets/image/preview.png')}
            resizeMode='cover'
            
          /> */}
              <PreviewSvg />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideBarStudent;

const styles = StyleSheet.create({
  TitleView: {
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight + scale(10),
    backgroundColor: '#F3F6FF',
  },

  TextImageView: {
    flexDirection: 'row',
    marginLeft: moderateScale(10),
    alignItems: 'center',
  },
  HeadingText: {
    fontFamily: Font.Manrope400,
    fontSize: scale(22),
    color: Colors.TextBlue,
    marginLeft: moderateScale(5),
  },

  CloseBox: {
    backgroundColor: Colors.CloseBoxBackground,
    borderRadius: scale(100),
    padding: moderateScale(8),
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: verticalScale(5),
  },

  Image: {
    height: scale(52),
    width: scale(52),
    backgroundColor: Colors.ThemeBlue,
    borderRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },

  DetailsMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  GreyImage: {
    overflow: 'hidden',
    // left:scale(10),
  },
});
