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
import {useDispatch, useSelector} from 'react-redux';
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
import DeleteConvoModal from '../../components/Common/CommonModals/DeleteConvoModal';
import {submitEditProfile} from '../../redux/actions/CommonAction';

const SchoolProfile = ({route}) => {
  const dispatch = useDispatch();
  const type = route.params;
  const userDetails = useSelector(state => state.holderReducer.userDetails);
  const [reasonModal, setReasonModal] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [addRoleModal, setAddRoleModal] = useState(false);
  const [SelectImage, setSelectImage] = useState(false);
  const [expandProfile, setExpandProfile] = useState(false);
  const [mainMenu, setMainMenu] = useState('post');
  const [edit, setEdit] = useState(false);
  const [showEdits, setShowEdits] = useState(false);
  const [save, setSave] = useState(false);
  const [expandPost, setExpandPost] = useState(false);

  const [profileImg, setProfileImg] = useState();
  const [coverImg, setCoverImg] = useState();
  const [textAbout, setTextAbout] = useState(userDetails?.data?.about);

  console.log('textAbout', textAbout);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const closeReasonModal = () => {
    setReasonModal(false);
  };
  const onSubmitRoleModal = data => {
    console.log('data', data);
    closeAddRoleModal();
  };
  const menudata = [
    {id: 1, name: 'All Post', type: 'post'},
    {id: 2, name: 'Staff/Teachers', type: 'staff'},
    {id: 3, name: 'Students', type: 'student'},
  ];
  const closeAddRoleModal = () => {
    setAddRoleModal(false);
  };
  const OpenGallery = () => {
    ImagePicker.openPicker({
      multiple: false,
    }).then(images => {
      console.log(images);
    });
  };
  const closePicker = () => {
    setSelectImage(false);
  };
  const showExperience = id => {
    console.log('index', id);
    if (expandProfile == id) {
      setExpandProfile();
    } else {
      setExpandProfile(id);
    }
  };
  const onSubmit = () => {
    dispatch(submitEditProfile(textAbout, profileImg, coverImg, setSave));
  };
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={edit ? false : true} //should be false if edit modal is open
        moreIcon={type == 'other' ? false : edit ? false : true} //should be false if edit modal is open
        moreIconColor={Colors.ThemeBlue}
        backIconColor={Colors.ThemeBlue}
        save={edit ? true : false}
        cancel={edit ? true : false}
        title={edit ? 'Edit Profile' : 'Profile'}
        // EditChange={edit ? false : true}
        // MoreChange={edit ? false : true}
        PressIcon={() => setShowEdits(true)}
        OnCancel={() => setEdit(false)}
        onSave={() => onSubmit()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SchoolBioComponent
          cover_pic={require('../../assets/image/schoolpfp.png')}
          // display_pic={require('../../assets/image/schoolpfp.png')}
          name={userDetails?.data?.school?.school_name}
          edit={edit}
          profile={setProfileImg}
          cover={setCoverImg}
          getabout={setTextAbout}
        />

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
        </ScrollView>

        {mainMenu == 'post' ? (
          <View style={styles.UploadImageView}>
            {Images.map(item => {
              return (
                <>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setExpandPost(true)}
                    onLongPress={() => setDeletePost(true)}
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

        {mainMenu == 'staff' ? (
          <View style={styles.StaffMain}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: verticalScale(15),
                alignItems: 'center',
              }}>
              <Text style={styles.ActivityHeading}>Staff/Teachers</Text>

              <TouchableOpacity
                onPress={() => setAddRoleModal(true)}
                style={styles.AddMore}>
                <Text style={styles.AddMoreText}>ADD MORE</Text>
              </TouchableOpacity>
            </View>

            <View>
              <SwipeListView
                data={staff_data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                  return (
                    <EmployeeCard
                      type={'staff'}
                      data={item}
                      experience={Experiance}
                      onPressExpand={() => showExperience(item.id)}
                      expandProfile={expandProfile}
                    />
                  );
                }}
                renderHiddenItem={() => (
                  <View style={styles.rowBack}>
                    <LinearGradient
                      colors={['#FF6B00', '#CD2828']}
                      style={{borderRadius: scale(10)}}>
                      <TouchableOpacity
                        onPress={() => setReasonModal(true)}
                        style={styles.IconBox}>
                        <Feather
                          name="check"
                          size={scale(22)}
                          color={Colors.White}
                        />
                        <Text style={styles.Read}>Remove</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                )}
                swipeDirection={'right'}
                disableRightSwipe={true}
                // disableLeftSwipe={true}
                leftOpenValue={0}
                rightOpenValue={scale(-110)}
              />
            </View>
          </View>
        ) : null}

        {mainMenu == 'student' ? (
          <View style={styles.StaffMain}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: verticalScale(15),
              }}>
              <Text style={styles.ActivityHeading}>Students List</Text>

              <TouchableOpacity
                onPress={() => setAddRoleModal(true)}
                style={styles.AddMore}>
                <Text style={styles.AddMoreText}>ADD MORE</Text>
              </TouchableOpacity>
            </View>

            {recruiter_data.map((item, index) => {
              return (
                <View key={index}>
                  <EmployeeCard
                    type={'recruiter'}
                    data={item}
                    onPressExpand={() => showExperience(index)}
                  />
                </View>
              );
            })}
          </View>
        ) : null}

        <View style={GlobalStyle.Height} />
      </ScrollView>

      {/* All Modals  */}

      <DeleteConvoModal
        isVisible={deletePost}
        onBackdropPress={() => setDeletePost(false)}
        onDelete={() => setDeletePost(false)}
        text={'Delete this post?'}
      />

      <AddRoleModal
        isVisible={addRoleModal}
        heading={'Add People'}
        onBackdropPress={closeAddRoleModal}
        closeModal={closeAddRoleModal}
        onPressClose={closeAddRoleModal}
        onPressUpload={() => {
          OpenGallery();
          closePicker;
        }}
        onSubmitRoleModal={onSubmitRoleModal}
      />

      <LetterModal
        isVisible={reasonModal}
        heading={'Reason'}
        question={'What are the reasons to remove teacher?'}
        onBackdropPress={closeReasonModal}
        closeModal={closeReasonModal}
        onPressClose={closeReasonModal}
        onPressSubmit={handleSubmit(closeReasonModal)}
      />

      <OptionsModal
        OptionOne={'Edit Profile'}
        onlyOne={true}
        isVisible={showEdits}
        onPress={() => {
          setEdit(true);
          setShowEdits(false);
        }}
        onBackdropPress={() => setShowEdits(false)}
        // OptionTwo={'Edit Profile'}
        // OptionThree={'View Profile School'}
        restyleMainModal={{
          position: 'absolute',
          right: scale(10),
          top: verticalScale(25),
        }}
        restyleBox={{padding: scale(15), borderRadius: scale(6)}}
      />
      <SuccessModal
        close={true}
        visible={save}
        buttonPress={() => {
          setSave(false);
          setEdit(false);
        }}
        onClose={() => setSave(false)}
        status={'Profile Updated'}
        subheading={
          'Your profile has been successfully updated, changes are reflected real time.'
        }
        source={require('../../assets/image/save.png')}
        buttonTitle={'Continue'}
        bgColor="#236CEF"
      />

      <ExpandPostModal
        isVisible={expandPost}
        onBackdropPress={() => setExpandPost(false)}
      />

      <BottomTab profile />
    </SafeAreaView>
  );
};

export default SchoolProfile;

const styles = StyleSheet.create({
  ImageBox: {
    borderRadius: scale(20),
    height: scale(100),
    width: scale(100),
    backgroundColor: '#E6E6E6',
  },

  Name: {
    fontFamily: Font.Poppins700,
    fontSize: scale(16),
    color: Colors.Black,
  },
  Title: {
    fontFamily: Font.Poppins600,
    fontSize: scale(16),
    color: Colors.Black,
  },

  Heading: {
    marginTop: verticalScale(12),
    color: Colors.Black,
    fontFamily: Font.Poppins700,
    fontSize: scale(18),
  },

  Subject: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize: scale(14),
  },

  LightHeading: {
    color: '#313131',
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },

  AddMore: {
    borderColor: Colors.ThemeBlue,
    borderRadius: scale(20),
    borderWidth: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(5),
  },
  ViewAll: {
    color: '#C1C7CE',
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    textAlign: 'right',
    marginTop: verticalScale(10),
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

  MainMenu: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(30),
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

  StaffMain: {
    paddingHorizontal: moderateScale(20),
    marginTop: verticalScale(20),
    justifyContent: 'center',
  },

  ActivityHeading: {
    fontSize: scale(18),
    fontFamily: Font.Poppins700,
    color: Colors.Black,
    textAlignVertical: 'center',
  },
  AddMoreText: {
    fontSize: scale(12),
    fontFamily: Font.Poppins700,
    color: Colors.ThemeBlue,
  },
  ActivityMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },

  Attempt: {
    backgroundColor: Colors.White,
    padding: scale(10),
    borderRadius: scale(16),
  },

  AttemptText: {
    fontSize: scale(14),
    fontFamily: Font.Poppins600,
    color: Colors.PostDescText,
  },

  OptionView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },

  OptionText: {
    fontSize: scale(15),
    fontFamily: Font.Poppins700,
    color: Colors.Black,
  },
  rowBack: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '7%',
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

const recruiter_data = [
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
const staff_data = [
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
