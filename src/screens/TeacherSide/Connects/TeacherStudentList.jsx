import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity} from 'react-native';
import React , {useState} from 'react';
import ConnectComponent from '../../../components/Common/ConnectComponent';
import MainHeader from '../../../components/Headers/MainHeader';
import HomeHeader from '../../../components/Headers/HomeHeader';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import ProfileComplete from '../../../components/Progress/ProfileComplete';
import {verticalScale,scale,moderateScale} from 'react-native-size-matters';
import BottomTab from '../../../navigation/BottomTab';
import { Colors } from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Font } from '../../../utils/font';
import { SwipeListView } from 'react-native-swipe-list-view';
import LetterModal from '../../../components/Common/CommonModals/LetterModal';
import { useForm } from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';

connects_data = [
  {
    id: 1,
    name: 'Jessica Morrw',
    username: '@jessii_morrow',
    img: require('../../../assets/image/pfone.png'),
  },
  {
    id: 2,
    name: 'Kaylea Moreno',
    username: '@jessi_xx',
    img: require('../../../assets/image/pftwo.png'),
  },
  {
    id: 3,
    name: 'Kaylea Moreno',
    username: '@jessi_xx',
    img: require('../../../assets/image/pftwo.png'),
  },
];

more_data = [
  {
    id: 1,
    name: 'Count Olaf',
    username: '@jessii_morrow',
    img: require('../../../assets/image/pfone.png'),
  },
  {
    id: 2,
    name: 'Jim Baudelaires ',
    username: '@jessi_xx',
    img: require('../../../assets/image/pftwo.png'),
  },
  {
    id: 3,
    name: 'Lucas Demeaning',
    username: '@jessi_xx',
    img: require('../../../assets/image/pftwo.png'),
  },
];

const TeacherStudentList = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const [open, setOpen] = useState(false);

  const [reasonModal, setReasonModal] = useState(false);

  const closeReasonModal = () => {
    setReasonModal(false);
  };



  const [menu, setMenu] = useState('myconnects');
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <HomeHeader welcome={'Hello, Jimmy'} screename={'Connects'} />

      <View style={GlobalStyle.ph20flex}>
        <View style={{marginTop: 10}}>
          <ProfileComplete progress={0.65} text={true} />
        </View>
        <View style={{marginTop: verticalScale(30)}}>
        <View style={styles.MainView}>
      <View style={styles.Bar}>
        <TouchableOpacity
          onPress={() => setMenu('myconnects')}
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === 'myconnects'
                  ? Colors.ThemeBlue
                  : Colors.SignRegContainer,
            },
          ]}>
          <Text
            style={[
              styles.heading,
              {
                color:
                  menu === 'myconnects' ? Colors.White : Colors.TextDarkGrey,
              },
            ]}>
            Student List
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === 'moreconnects'
                  ? Colors.ThemeBlue
                  : Colors.SignRegContainer,
            },
          ]}
          onPress={() => setMenu('moreconnects')}>
          <Text
            style={[
              styles.heading,
              {
                color:
                  menu === 'moreconnects' ? Colors.White : Colors.TextDarkGrey,
              },
            ]}>
            More Students
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: verticalScale(20)}}>
        <SwipeListView
          data={menu === 'myconnects' ? connects_data : more_data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <ConnectComponent
                data={item}
                menu = {menu}
       
                
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
                  <Feather name="check" size={scale(22)} color={Colors.White} />
                  <Text style={styles.Read}>Remove</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
          swipeDirection={'right'}
          disableRightSwipe={true}
          disableLeftSwipe={true}
          leftOpenValue={0}
          rightOpenValue={scale(-110)}
        />
      </View>

      <LetterModal
        isVisible={reasonModal}
        heading={'Reason'}
        question={'What are the reasons to remove student?'}
        onBackdropPress={closeReasonModal}
        closeModal={closeReasonModal}
        onPressClose={closeReasonModal}
        onPressSubmit={handleSubmit(closeReasonModal)}
      />

    </View>
    
        </View>
      </View>
      <BottomTab person/>
    </SafeAreaView>
  );
};

export default TeacherStudentList;

const styles = StyleSheet.create({
  Bar: {
    backgroundColor: Colors.SignRegContainer,
    flexDirection: 'row',
    borderRadius: scale(8),
    padding: verticalScale(10),
  },
  MenuBox: {
    justifyContent: 'center',
    height: verticalScale(40),
    alignItems: 'center',
    width: '50%',
    borderRadius: scale(8),
  },

  heading: {
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },
  Read: {
    fontFamily: Font.Poppins400,
    fontSize: scale(11),
    color: Colors.White,
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
