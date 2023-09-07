import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import ProfileCompHeader from '../../components/Headers/ProfileCompHeader';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import UserWhite from '../../assets/svgs/user_white.svg';
import CustomButton from '../../components/CustomButton';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ErrorModal from '../../components/Modal/ErrorModal';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS} from '../../redux/reducer/Holder';

const params = [
  {
    id: 1,
    skill_name: 'Art',
    img: require('../../assets/image/art.png'),
    selected: false,
  },
  {
    id: 2,
    skill_name: 'Business',
    img: require('../../assets/image/bag.png'),
    selected: false,
  },
  {
    id: 3,
    skill_name: 'Culinary',
    img: require('../../assets/image/art.png'),
    selected: false,
  },
  {
    id: 4,
    skill_name: 'Coding',
    img: require('../../assets/image/comp.png'),
    selected: false,
  },
  {
    id: 5,
    skill_name: 'Design',
    img: require('../../assets/image/design.png'),
    selected: false,
  },
  {
    id: 6,
    skill_name: 'Gaming',
    img: require('../../assets/image/gaming.png'),
    selected: false,
  },
  {
    id: 7,
    skill_name: 'Marketing',
    img: require('../../assets/image/dance.png'),
    selected: false,
  },
  {
    id: 8,
    skill_name: 'Music',
    img: require('../../assets/image/music.png'),
    selected: false,
  },
  {
    id: 9,
    skill_name: 'Sport',
    img: require('../../assets/image/sports.png'),
    selected: false,
  },
];
const YourSkills = ({navigation}) => {
  const dispatch = useDispatch();
  const RoleId = useSelector(state => state.holderReducer.role_id);

  const [data, setData] = useState(params);
  const [isNull, setIsNull] = useState(false);
  const [selectedr, setSelected] = useState([]);
  console.log('RoleId', RoleId);

  const handleChange = value => {
    const newitem = data.map(val => {
      if (val.id === value.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setData(newitem);
    const findData = newitem.find(item => item.id == value.id);
    const checkData = selectedr.find(item => item.id == findData.id);
    console.log('checkData', checkData);
    if (checkData) {
      const filterData = selectedr.filter(elm => elm.id != checkData.id);
      setSelected(filterData);
    } else {
      setSelected([...selectedr, findData]);
    }
  };

  const handelBtn = val => {
    if (val.id == null) {
      setIsNull(true);
      setTimeout(() => {
        setIsNull(false);
      }, 2000);
    } else {
      navigation.navigate('experience');
    }
  };
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => handleChange(item)}
        style={[
          styles.SkillContainer,
          {
            borderColor: item.selected ? Colors.Yellow : Colors.White,
            borderWidth: item.selected ? 2 : 0,
          },
        ]}>
        {item.selected ? (
          <View style={styles.Tick}>
            <AntDesign
              name={'checkcircle'}
              color={Colors.Yellow}
              size={scale(20)}
              style={{backgroundColor: 'white', borderRadius: 100}}
            />
          </View>
        ) : null}
        <View style={{height: verticalScale(21), width: scale(24)}}>
          <Image
            resizeMode="contain"
            source={item.img}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </TouchableOpacity>
      <View style={{alignSelf: 'center', marginTop: verticalScale(5)}}>
        <Text
          style={{
            color: Colors.SkillsColor,
            fontFamily: Font.Poppins400,
            fontSize: scale(14),
          }}>
          {item.skill_name}
        </Text>
      </View>
    </View>
  );
  const onSubmit = async () => {
    const userData = await AsyncStorage.getItem('user_details');
    const cnvrtData = JSON.parse(userData);
    console.log('RoleId.ROLE_ID', RoleId.ROLE_ID);
    if (RoleId.ROLE_ID == 'student') {
      dispatch({type: USER_DETAILS, payload: cnvrtData});
    } else {
      navigation.navigate('experience');
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.ThemeBlue, flex: 1}}>
      <ProfileCompHeader />

      <View style={{flex: 1}}>
        <View style={styles.GreyBox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
              marginTop: verticalScale(25),
            }}>
            <View style={{flex: 1}} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Font.Manrope700,
                  color: Colors.AddBioText,
                  fontSize: scale(24),
                }}>
                Your Skills
              </Text>
              <Text
                style={{
                  fontFamily: Font.Manrope600,
                  color: Colors.SkillsColor,
                  fontSize: scale(15),
                }}>
                Choose your favourite Skills
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onSubmit()}
              style={{
                alignItems: 'flex-end',
                // justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: scale(14),
                  fontFamily: Font.Poppins800,
                  color: Colors.TextBlue,
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: verticalScale(15)}}>
            <View style={{flex: 1}}>
              <Progress.Bar
                borderRadius={scale(10)}
                padding={1}
                style={{marginTop: verticalScale(5)}}
                progress={0.5}
                animated={true}
                width={null}
                color={Colors.ThemeBlue}
                // borderColor={Colors.Grey}
                borderColor={Colors.ThemeBlue}
                borderWidth={3}
                unfilledColor={Colors.White}
                height={verticalScale(10)}
                //   onProgressChange={onProgressChange}
              />
            </View>

            <View
              style={{
                borderRadius: scale(20),
                height: verticalScale(22),
                width: scale(22),
                borderWidth: 2,
                borderColor: Colors.PercentBorder,
                marginLeft: moderateScale(10),
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.White,
              }}>
              <Text
                style={{
                  fontFamily: Font.Poppins400,
                  color: Colors.PercentText,
                  fontSize: scale(8),
                  textAlignVertical: 'center',
                }}>
                50%
              </Text>
            </View>
          </View>

          <FlatList
            numColumns={3}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListFooterComponent={() => {
              return (
                <View style={{marginTop: verticalScale(30)}}>
                  <CustomButton
                    onPress={() => onSubmit()}
                    // onPress={() => handelBtn()}
                    title={'Next'}
                    containerRestyle={{borderRadius: scale(30), width: '100%'}}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
      <ErrorModal visible={isNull} message="Please select Skill To continue" />
    </SafeAreaView>
  );
};

export default YourSkills;

const styles = StyleSheet.create({
  Tick: {
    borderRadius: scale(30),
    borderWidth: 2,
    borderColor: Colors.White,
    position: 'absolute',
    top: '-12%',
    right: '-10%',
  },
  GreyBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 5,
    backgroundColor: Colors.GreyBox,
    paddingHorizontal: moderateScale(15),
    // height:'100%'
  },
  SkillContainer: {
    height: scale(60),
    width: scale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(40),
    backgroundColor: Colors.SkillsBox,
    marginHorizontal: moderateScale(25),
    marginTop: verticalScale(30),
    borderColor: Colors.Yellow,
  },
});
