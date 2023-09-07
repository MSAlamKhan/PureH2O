import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../components/Headers/MainHeader';
import {Colors} from '../../utils/Colors';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {
  moderateScale,
  scale,
  verticalScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import BottomTab from '../../navigation/BottomTab';

import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import ExperianceCard from '../../components/Cards/ExperianceCard';
import OptionsModal from '../../components/Common/CommonModals/OptionsModal';
import SuccessModal from '../../components/Modal/SuccessModal';
import {useSelector} from 'react-redux';
import ActivityComponent from '../../components/Student/ActivityComponent';
import ExpandPost from '../../components/Common/CommonModals/ExpandPostModal';
import ExpandPostModal from '../../components/Common/CommonModals/ExpandPostModal';
import ProfileBioComponent from '../../components/Common/ProfileBioComponent';
import SchoolBioComponent from '../../components/School/SchoolBioComponent';
import EmployeeCard from '../../components/Common/Cards/EmployeeCard';
import AddRoleModal from '../../components/Common/CommonModals/AddRoleModal';
import {useForm} from 'react-hook-form';
import {FAB, Tooltip} from '@rneui/themed';
import {SwipeListView} from 'react-native-swipe-list-view';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import LetterModal from '../../components/Common/CommonModals/LetterModal';

const ViewOtherProfile = ({route}) => {
  const {type} = route.params;

  console.log('type', type);

  menudata = [
    {id: 1, name: 'All Post', type: 'post'},
    // {id: 2, name: 'Staff/Teachers', type: 'staff'},
    // {id: 3, name: 'Students', type: 'student'},
  ];

  recruiter_data = [
    {
      id: 1,
      name: 'Violet Baudalasdais',
      username: '@jessii_morrow',
      img: require('../../assets/image/pfone.png'),
    },
    {
      id: 2,
      name: 'Klaus Baudelaire',
      username: '@jessi_xx',
      img: require('../../assets/image/dp_3.png'),
    },
    {
      id: 3,
      name: 'Sunny Baudelaire',
      username: '@jessi_xx',
      img: require('../../assets/image/teacher.png'),
    },
  ];

  staff_data = [
    {
      id: 1,
      name: 'Violet Baudalaire',
      username: '@jessii_morrow',
      img: require('../../assets/image/pfone.png'),
    },
    {
      id: 2,
      name: 'Klaus Baudelaire',
      username: '@jessi_xx',
      img: require('../../assets/image/dp_3.png'),
    },
    {
      id: 3,
      name: 'Sunny Baudelaire',
      username: '@jessi_xx',
      img: require('../../assets/image/teacher.png'),
    },
  ];

  const [mainMenu, setMainMenu] = useState('post');

  // const role_id = useSelector(state => state.role_id);
  const [expandPost, setExpandPost] = useState(false);

  const Experiance = [
    {
      id: 1,
      year: '2018 - now',
      work: 'Principle of ui Designer',
      place: 'Kongkalikong Studios',
    },
    {
      id: 2,
      year: '2015 - 2018',
      work: 'Leading Graphic designer',
      place: 'Sync inc',
    },
    {
      id: 3,
      year: '2012 - 2015',
      work: 'Graphic designer',
      place: 'Wakanda forever',
    },
  ];

  const Images = [
    {id: 1, Picture: require('../../assets/image/SchoolOne.png')},
    {id: 2, Picture: require('../../assets/image/SchoolTwo.png')},
    {id: 3, Picture: require('../../assets/image/SchoolThree.png')},
    {id: 4, Picture: require('../../assets/image/SchoolOne.png')},
    {id: 5, Picture: require('../../assets/image/SchoolTwo.png')},
    {id: 6, Picture: require('../../assets/image/SchoolThree.png')},
  ];

  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={true}
        backIconColor={Colors.ThemeBlue}
        title={'Profile'}
        moreIcon={true}
        moreIconColor={'transparent'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {type == 'student' ? (
          <ProfileBioComponent
            display_pic={require('../../assets/image/dp4.png')}
            name={'Klaus Baudelaire'}
            title={'Class 8 student'}
          />
        ) : type == 'teacher' ? (
          <ProfileBioComponent
            display_pic={require('../../assets/image/happy.png')}
            name={'Klaus Baudelaire'}
            title={'Math Teacher'}
          />
        ) : (
          <SchoolBioComponent
            cover_pic={require('../../assets/image/thomas.png')}
            display_pic={require('../../assets/image/schoolpfp.png')}
            name={'Everest Grammar High School'}
          />
        )}

        <View style={GlobalStyle.ph20}>
          <View>
            {type == 'student' || type == 'teacher' ? (
              <>
                <Text style={styles.Heading}>Experience</Text>
                {Experiance.map((data, index) => (
                  <ExperianceCard key={index} data={data} />
                ))}
              </>
            ) : null}
          </View>

          {/* All posts  */}
          <View style={styles.MainMenu}>
            {menudata.map((menuItem, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setMainMenu(menuItem.type)}
                style={[
                  styles.Menu,
                  {
                    backgroundColor:
                      menuItem.type === mainMenu ? Colors.Black : Colors.White,
                  },
                ]}>
                <Text
                  style={[
                    styles.MenuText,
                    {
                      color:
                        menuItem.type === mainMenu
                          ? Colors.White
                          : Colors.PostDescText,
                    },
                  ]}>
                  {menuItem.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {mainMenu == 'post' ? (
            <View style={styles.UploadImageView}>
              {Images.map(item => {
                return (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setExpandPost(true)}
                      style={[styles.UploadImageBox]}>
                      <Image
                        source={item.Picture}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: scale(10),
                        }}
                      />
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          ) : null}
        </View>

        <View style={GlobalStyle.Height} />
      </ScrollView>

      {/* All Modals  */}

      <ExpandPostModal
        isVisible={expandPost}
        onBackdropPress={() => setExpandPost(false)}
      />

      <BottomTab profile />
    </SafeAreaView>
  );
};

export default ViewOtherProfile;

const styles = StyleSheet.create({
  ViewAll: {
    color: '#C1C7CE',
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    textAlign: 'right',
    marginTop: verticalScale(10),
  },

  MainMenu: {
    flexDirection: 'row',
    // paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(40),
    justifyContent: 'space-between',
  },

  Menu: {
    backgroundColor: Colors.White,
    borderRadius: scale(16),
    paddingHorizontal: moderateScale(25),
    paddingVertical: verticalScale(8),
    marginHorizontal: moderateScale(5),
  },

  MenuText: {
    fontFamily: Font.Poppins700,
    color: Colors.Black,
    fontSize: scale(14),
  },
  UploadImageView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: moderateScale(5),
    marginTop: verticalScale(20),
  },
  UploadImageBox: {
    borderRadius: scale(20),
    height: Dimensions.get('screen').height * 0.12,
    width: Dimensions.get('screen').width * 0.28,
    marginTop: verticalScale(10),
    paddingHorizontal: moderateScale(5),
  },

  IconBox: {
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
