import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../Inputs/CustomInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EmployeeCard from '../Cards/EmployeeCard';

const NewChatModal = props => {
  console.log('isVisible', props.isVisible)
  // const onSubmitModal = data => {
  //   console.log('data', data);
  //   props.onPressClose();
  // };

  more_data = [
    {
      id: 1,
      name: 'Count Olaf',
      username: '@jessii_morrow',
      img: require('../../../assets/image/happy.png'),
      type : 'student'
    },
    {
      id: 2,
      name: 'Jim Baudelaires ',
      username: '@jessi_xx',
      img: require('../../../assets/image/happy2.png'),
      type : 'student'
    },
    {
      id: 3,
      name: 'Lucas Demeaning',
      username: '@jessi_xx',
      img: require('../../../assets/image/thomas.png'),
      type : 'student'
    },
    {
      id: 4,
      name: 'Lucas Demeaning',
      username: '@jessi_xx',
      img: require('../../../assets/image/dp4.png'),
      type : 'student'
    },
    {
      id: 5,
      name: 'Lucas Demeaning',
      username: '@jessi_xx',
      img: require('../../../assets/image/dp4.png'),
      type : 'student'
    },
  ];

  const [select, setSelect] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  return (
    <View>
      <ReactNativeModal
        onBackdropPress={props.onBackdropPress}
        // avoidKeyboard ={true}
        scrollOffset={1}
        backdropOpacity={0}
        isVisible={props.isVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        style={[GlobalStyle.MainModal, props.restyleMainModal]}>
        <View style={[styles.ModalContainer, props.ContainerRestyle]}>
          <View style={styles.Heading}>
            <Text style={styles.Text}>Search People</Text>

            <View style={styles.CloseBox}>
              <AntDesign
                onPress={props.onPressClose}
                name="close"
                size={scale(14)}
                color={Colors.White}
              />
            </View>
          </View>

          <View
            style={[
              GlobalStyle.ModalLine,
              {
                width: '100%',
                height: verticalScale(1),
                backgroundColor: '#E9E9E9',
              },
            ]}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ApplicationContent}>
              <CustomInput
                search={true}
                placeholder={'Find People to chat with'}
                boxStyle={{
                  paddingHorizontal: moderateScale(0),
                  backgroundColor: Colors.White,
                  borderRadius: scale(12),
                  height: verticalScale(48),
                  borderColor: Colors.White,
                  alignItems: 'flex-start',
                }}
                restyle={{paddingHorizontal: moderateScale(20)}}
                fontSize={scale(14)}
                size={scale(24)}
                control={control}
                name="search"
              />

              {more_data.map((more_data, index) => {
                return (
                  <View key={index}>
                    <EmployeeCard
                      option={'Chat'}
                      newChat={props.newChatClose}
                      selected={'Selected'}
                      connectMore={true}
                      data={more_data}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default NewChatModal;

const styles = StyleSheet.create({
  MainModal: {
    justifyContent: 'center',
    margin: 0,
    backgroundColor: Colors.ThemeBlue,
    paddingHorizontal: moderateScale(20),
  },
  ModalContainer: {
    width: '90%',
    borderRadius: scale(14),
    backgroundColor: Colors.HomeBackground,
    alignSelf: 'center',
    height: '85%',
    paddingVertical: verticalScale(25),
  },

  InputBoxStyle: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: Colors.White,
    borderRadius: scale(8),
    borderColor: '#E9E9E9',
    borderWidth: 1,
    alignItems: 'flex-start',
    marginTop: verticalScale(10),
  },
  restyleUpperText: {
    fontFamily: Font.Poppins500,
  },

  UploadImgBox: {
    borderRadius: scale(8),
    padding: verticalScale(20),
    backgroundColor: '#C1CEFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(15),
  },
  UploadText: {
    color: Colors.ThemeBlue,
    fontFamily: Font.Poppins600,
    fontSize: scale(16),
  },
  RoleText: {
    fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(14),
    letterSpacing: -0.5,
    marginLeft: scale(3),
  },
  Indicate: {
    fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(16),
  },
  Heading: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },

  Text: {
    fontFamily: Font.Poppins600,
    fontSize: scale(16),
    color: Colors.Black,
  },

  CloseBox: {
    backgroundColor: Colors.CloseBoxBackground,
    borderRadius: 100,
    alignSelf: 'flex-end',
    padding: moderateScale(3),
  },

  ApplicationContent: {
    marginTop: verticalScale(0),
    paddingHorizontal: moderateScale(15),
  },

  ButtonView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
    marginTop: verticalScale(15),
  },
});
