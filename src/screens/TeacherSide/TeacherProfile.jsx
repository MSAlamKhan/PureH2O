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
import DeleteConvoModal from '../../components/Common/CommonModals/DeleteConvoModal';
  const TeacherProfile = ({navigation}) => {
    menudata = [
      {id: 1, name: 'All Post', type: 'post'},
      {id: 2, name: 'Activity', type: 'activity'},
     
    ];
  
  
    const [mainMenu, setMainMenu] = useState('post');
  
    const [deletePost, setDeletePost] = useState(false)
  
    // const role_id = useSelector(state => state.role_id);
    const [edit, setEdit] = useState(false);
    const [showEdits, setShowEdits] = useState(false);
    const [save, setSave] = useState(false);
  
    const [expandPost, setExpandPost] = useState(false);
  
  
    
    const [subMenu, setSubMenu] = useState('attempt');
  
    const Activity = [
      {id: 1, date: '12-June-2023', question: 'Who invented...'},
      {id: 2, date: '30-August-2023', question: 'Who invented...'},
    ];
  
    const Data = [
      'Problem Solving',
      'Communicative',
      'Responsible',
      'Active',
      'PhotoShop',
      'Drawing',
      'Action',
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
  
    const OpenGallery = () => {
      ImagePicker.openPicker({
        multiple: true,
      }).then(images => {
        console.log(images);
      });
    };
  
    return (
      <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
        <MainHeader
          backIcon={edit ? false : true} //should be false if edit modal is open
          moreIcon={edit ? false : true} //should be false if edit modal is open
          moreIconColor={Colors.ThemeBlue}
          backIconColor={Colors.ThemeBlue}
          save={edit ? true : false}
          cancel={edit ? true : false}
          title={edit ? 'Edit Profile' : 'Profile'}
          // EditChange={edit ? false : true}
          // MoreChange={edit ? false : true}
          PressIcon={() => setShowEdits(true)}
          OnCancel={() => setEdit(false)}
          onSave={() => setSave(true)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileBioComponent
            display_pic={require('../../assets/image/teacher.png')}
            name={'Klaus Baudelaire'}
            title={'Chemistry Teacher'}
            edit={edit}
          />
  
          <View style={GlobalStyle.ph20}>
            <View style={{marginVertical: verticalScale(20)}}>
              <View
                style={[
                  GlobalStyle.Row,
                  {
                    justifyContent: 'space-between',
                    marginTop: verticalScale(10),
                  },
                ]}>
                <Text style={styles.Heading}>Skills</Text>
                {edit ? (
                  <Entypo name="plus" size={scale(25)} color={Colors.ThemeBlue} />
                ) : null}
              </View>
  
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                  marginTop: verticalScale(10),
                }}>
                {Data.map((data, index) => (
                  <View key={index} style={styles.SkillsContainer}>
                    <Text style={styles.SkillsAddedText}>{data}</Text>
                  </View>
                ))}
              </View>
            </View>
  
            <Text style={styles.Heading}>Experience</Text>
  
            {Experiance.map((data, index) => (
              <ExperianceCard key={index} data={data} />
            ))}
          </View>
  
       
          <View style={styles.MainMenu}>
         
            {menudata.map((menuItem, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setMainMenu(menuItem.type)}
                style={[
                  styles.Menu,
                  {
                    backgroundColor: menuItem.type === mainMenu ? Colors.Black : Colors.White,
                  },
                ]}>
                <Text
                  style={[
                    styles.MenuText,
                    {
                      color: menuItem.type === mainMenu ? Colors.White : Colors.PostDescText,
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
                      onPress={()=>setExpandPost(true)}
                      onLongPress={()=>setDeletePost(true)}
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
  
          {mainMenu == 'activity' ? (
            <View style={styles.ActivityMain}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.ActivityHeading}>Activity</Text>
  
                <TouchableOpacity style={{justifyContent: 'center'}}>
                  <Text style={styles.ViewMore}>View More Question</Text>
                </TouchableOpacity>
              </View>
  
              <View style={styles.ActivityMenu}>
                <TouchableOpacity
                  onPress={() => setSubMenu('attempt')}
                  style={[
                    styles.Attempt,
                    {
                      backgroundColor:
                        subMenu == 'attempt' ? Colors.PostDescText : Colors.White,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.AttemptText,
                      {
                        color:
                          subMenu == 'attempt'
                            ? Colors.WhiteText
                            : Colors.PostDescText,
                      },
                    ]}>
                    Number Question Attempt
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSubMenu('win')}
                  style={[
                    styles.Attempt,
                    {
                      backgroundColor:
                        subMenu == 'win' ? Colors.PostDescText : Colors.White,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.AttemptText,
                      {
                        color:
                          subMenu == 'win'
                            ? Colors.WhiteText
                            : Colors.PostDescText,
                      },
                    ]}>
                    Event Wins
                  </Text>
                </TouchableOpacity>
              </View>
  
              <View style={styles.OptionView}>
                <Text style={styles.OptionText}>Event Date</Text>
  
                <Text style={styles.OptionText}>Question</Text>
  
                <Text style={styles.OptionText}>Visit Post</Text>
              </View>
  
              {Activity.map(item => {
                return (
                  <ActivityComponent 
                  onPressPost = {()=>navigation.navigate('individualquiz')}
                    date={item.date}
                    question={item.question}
                    subMenu={subMenu}
                  />
                );
              })}
            </View>
          ) : null}
  
          <View style={GlobalStyle.Height} />
        </ScrollView>

        <DeleteConvoModal
      isVisible = {deletePost}
      onBackdropPress = {()=>setDeletePost(false)}
      onDelete = {()=>setDeletePost(false)}
      text = {'Delete this post?'}
      />
  
        <OptionsModal
        OptionOne={'Edit Profile'}
        onlyOne = {true}
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
        restyleBox={{padding: scale(15),borderRadius: scale(6)}}
      />
  
        <SuccessModal
          close={true}
          visible={save}
          buttonPress={() =>{ setSave(false); setEdit(false) }  }
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
  
  export default TeacherProfile;
  
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
      color: Colors.Black,
      fontFamily: Font.Poppins700,
      fontSize: scale(18),
    },
  
    SkillsContainer: {
      backgroundColor: Colors.AddSkillBox,
      borderRadius: scale(8),
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: scale(5),
      paddingVertical: moderateVerticalScale(10),
      marginTop: verticalScale(10),
      paddingHorizontal: moderateScale(25),
    },
  
    SkillsAddedText: {
      // flex: 1,
      fontFamily: Font.Poppins500,
      fontSize: scale(16),
      color: Colors.ThemeBlue,
    },
  
    MoreBox: {
      backgroundColor: Colors.White,
      padding: moderateScale(10),
      marginVertical: verticalScale(2),
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    MoreText: {
      fontFamily: Font.Poppins700,
      fontSize: scale(12),
      color: Colors.Black,
    },
    ModalBox: {position: 'absolute', right: scale(20), top: verticalScale(40)},
    LightHeading: {
      color: '#313131',
      fontSize: scale(16),
      fontFamily: Font.Poppins600,
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
      marginHorizontal: moderateScale(10),
    },
  
    MenuText: {
      fontFamily: Font.Poppins700,
      color: Colors.Black,
      fontSize: scale(14),
    },
  
    ActivityMain: {
      paddingHorizontal: moderateScale(20),
      marginTop: verticalScale(20),
    },
  
    ActivityHeading: {
      fontSize: scale(18),
      fontFamily: Font.Poppins700,
      color: Colors.Black,
    },
    ViewMore: {
      fontSize: scale(14),
      fontFamily: Font.Poppins700,
      color: Colors.Black,
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
  });
  