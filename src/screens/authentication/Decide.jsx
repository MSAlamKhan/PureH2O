import React, {useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {useDispatch} from 'react-redux';
import {Colors} from '../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Font} from '../../utils/font';
import Success from '../../components/Modal/Success';
import ErrorModal from '../../components/Modal/ErrorModal';
import {ROLE_ID} from '../../redux/reducer/Holder';

const Decide = ({navigation, route}) => {
  const {type, data, socialData} = route.params;

  const [isNull, setIsNull] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const DATA = [
    {id: 1, ROLE_ID: 'school'},
    {id: 2, ROLE_ID: 'teacher'},
    {id: 3, ROLE_ID: 'student'},
  ];
  const [select, setSelect] = useState('');
  const handelItem = item => {
    console.log('item', item);
    setSelect(item);
  };

  const handelBtn = () => {
    if (select == '') {
      setIsNull(true);
      setTimeout(() => {
        setIsNull(false);
      }, 2000);
    } else {
      // dispatch(register(data, select, setIsTeacher, setIsSchool, navigation,setIsStudent, setLoading,saveimage,socialData));
      navigation.navigate('accountcreated', {
        item: select,
        data: data,
        type: type,
        socialData: socialData,
      });
      dispatch({type: ROLE_ID, payload: select});
    }
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.Box,
          {
            marginHorizontal: item.id == 2 ? scale(5) : 0,
          },
        ]}>
        <Pressable
          onPress={() => handelItem(item)}
          android_ripple={{
            color:
              select.ROLE_ID == item.ROLE_ID ? Colors.ThemeBlue : Colors.Main,
            borderless: true,
            foreground: true,
          }}
          style={[
            styles.Pressable,
            {
              backgroundColor:
                select.ROLE_ID == item.ROLE_ID ? Colors.Main : Colors.ThemeBlue,
              borderColor:
                select.ROLE_ID == item.ROLE_ID ? Colors.Yellow : Colors.Main,
            },
          ]}>
          {item.ROLE_ID == 'student' ? (
            <Feather
              name="user"
              size={scale(50)}
              color={
                select.ROLE_ID == item.ROLE_ID ? Colors.ThemeBlue : Colors.Main
              }
            />
          ) : item.ROLE_ID == 'school' ? (
            <MaterialCommunityIcons
              name="hospital-building"
              size={scale(50)}
              color={
                select.ROLE_ID == item.ROLE_ID ? Colors.ThemeBlue : Colors.Main
              }
            />
          ) : (
            <FontAwesome5
              name="chalkboard-teacher"
              size={scale(50)}
              color={
                select.ROLE_ID == item.ROLE_ID ? Colors.ThemeBlue : Colors.Main
              }
            />
          )}

          <Text
            style={[
              styles.Text,
              {
                color:
                  select.ROLE_ID == item.ROLE_ID
                    ? Colors.ThemeBlue
                    : Colors.Main,
              },
            ]}>
            {item.ROLE_ID.charAt(0).toUpperCase() + item.ROLE_ID.slice(1)}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[GlobalStyle.Container, {justifyContent: 'space-between'}]}>
      <Image
        // style={{marginTop: '15%'}}
        source={require('../../assets/image/account_created.png')}
      />
      <Text style={GlobalStyle.Heading}>Find School Friend in this app</Text>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={DATA}
          horizontal
          keyExtractor={item => item.id}
          renderItem={item => renderItem(item)}
        />
      </View>
      <View style={{marginBottom: '15%'}}>
        <CustomButton
          containerRestyle={[
            GlobalStyle.CustomButtonRestyle,
            {alignSelf: 'center'},
          ]}
          title="Continue"
          onPress={() => handelBtn()}
        />
      </View>

      <ErrorModal visible={isNull} message="Please select One" />
      {/* <Loading isVisible={loading}/> */}
    </SafeAreaView>
  );
};

export default Decide;

const styles = StyleSheet.create({
  Text: {
    fontSize: scale(15),
    fontFamily: Font.Gilroy600,
    maxWidth: '80%',
    textAlign: 'center',
    marginTop: verticalScale(15),
  },
  Pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(100),
    aspectRatio: 1 / 1,
    borderRadius: scale(20),
    overflow: 'hidden',
    borderWidth: scale(2),
  },
  Box: {
    borderRadius: scale(20),
    borderWidth: scale(2),
    height: verticalScale(100),
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
