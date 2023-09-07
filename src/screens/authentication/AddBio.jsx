import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import ProfileCompHeader from '../../components/Headers/ProfileCompHeader';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import * as Progress from 'react-native-progress';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import Error from '../../components/Errors/Error';
import ImagePicker from 'react-native-image-crop-picker';
import ImagePickerModal from '../../components/Modal/ImagePickerModal';
import {useFocusEffect} from '@react-navigation/native';
import CustomInput from '../../components/Inputs/CustomInput';
import {useSelector} from 'react-redux';
import {addBio} from '../../redux/actions/AuthAction';

const AddBio = ({navigation, route}) => {
  const {data} = route.params;
  const [SelectImage, setSelectImage] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [ProfilePic, setProfilePic] = useState({});
  const RoleId = useSelector(state => state.holderReducer.role_id);
  console.log('data', data);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      description: '',
    },
  });

  const OpenGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfilePic({
        uri: image.path,
        type: image.mime,
        fileName: image.mime,
      });
      closePicker();
    });
  };
  const OpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfilePic({
        uri: image.path,
        type: image.mime,
        fileName: image.mime,
      });
      closePicker();
    });
  };
  const closePicker = () => {
    setSelectImage(false);
  };
  const onSubmit = () => {
    if (textInput) {
      addBio(textInput, ProfilePic, navigation, RoleId);
    } else {
      alert('About is required!');
    }
    // if (RoleId.ROLE_ID === 'school') {
    //   navigation.navigate('schoolregister');
    // } else {
    //   addBio(item,ProfilePic,navigation)
    //   navigation.navigate('experience');
    // }
  };
  const handelSkip = () => {
    if (RoleId.ROLE_ID === 'school') {
      navigation.navigate('schoolregister');
    } else if (RoleId.ROLE_ID === 'student') {
      navigation.navigate('yourskills');
    } else {
      navigation.navigate('experience');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.ThemeBlue}}>
      <ProfileCompHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={styles.BoiBox}>
                <Text style={styles.AddBio}>Add BIO</Text>
              </View>
              {textInput?.length > 15 && ProfilePic?.uri ? (
                <View style={styles.SkipBox}></View>
              ) : (
                <TouchableOpacity
                  onPress={() => handelSkip()}
                  style={styles.SkipBox}>
                  <Text style={styles.SkipText}>Skip</Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={{flexDirection: 'row', marginTop: verticalScale(15)}}>
              <View style={{flex: 1}}>
                <Progress.Bar
                  borderRadius={scale(10)}
                  padding={1}
                  style={{marginTop: verticalScale(5)}}
                  progress={
                    textInput?.length > 5 && ProfilePic?.uri
                      ? 0.5
                      : textInput?.length > 5
                      ? 0.25
                      : ProfilePic?.uri
                      ? 0.25
                      : 0.1
                  }
                  animated={true}
                  width={null}
                  color={Colors.ThemeBlue}
                  borderColor={Colors.ThemeBlue}
                  borderWidth={3}
                  unfilledColor={Colors.White}
                  height={verticalScale(10)}
                  // onProgressChange={onProgressChange}
                />
              </View>

              <View style={styles.PerBox}>
                <Text style={styles.PerText}>
                  {textInput?.length > 5 && ProfilePic?.uri
                    ? 50
                    : textInput?.length > 5
                    ? 25
                    : ProfilePic?.uri
                    ? 25
                    : 10}
                  %
                </Text>
              </View>
            </View>

            <View style={styles.LightBox}>
              {ProfilePic?.uri ? (
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 100}}
                  source={{uri: ProfilePic?.uri}}
                />
              ) : (
                <Ionicons
                  name={'person'}
                  color={Colors.ThemeBlue}
                  size={scale(55)}
                />
              )}

              <TouchableOpacity
                onPress={() => setSelectImage(true)}
                style={styles.InnerBox}>
                <Octicons
                  name={'pencil'}
                  color={Colors.White}
                  size={scale(20)}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.Name}>
              {data?.data?.firstname + ' ' + data?.data?.lastname}
            </Text>

            <View
              style={[
                styles.SaveBox,
                {
                  paddingLeft: moderateScale(10),
                  marginBottom: verticalScale(5),
                  marginTop: verticalScale(20),
                },
              ]}>
              <View>
                <Text style={styles.DescibeText}>About</Text>
              </View>
              <Octicons
                name={'pencil'}
                color={Colors.ThemeBlue}
                size={scale(19)}
                style={{top: 1}}
              />
            </View>

            <View
              style={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                height: verticalScale(160),
                borderColor: Colors.White,
                alignItems: 'flex-start',
                marginTop: verticalScale(5),
              }}>
              <TextInput
                value={textInput}
                onChangeText={item => setTextInput(item)}
                placeholderTextColor={Colors.placeholderTextColor}
                style={{
                  flex: 1,
                  // height: '100%',
                  color: Colors.Black,
                  fontFamily: Font.Gilroy500,
                  paddingHorizontal: moderateScale(20),
                  fontSize: scale(16),
                }}
                maxLength={300}
                textAlignVertical="top"
                multiline={true}
                placeholder={'Tell us about yourself in a few words..'}
              />
              <View style={styles.CountContainer}>
                <Text style={styles.CountText}>
                  {textInput.length}/300 Characters
                </Text>
              </View>
            </View>

            {/* <CustomInput
              multiline={true}
              wordcount={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                height: verticalScale(160),
                borderColor: Colors.White,
                alignItems: 'flex-start',
                marginTop: verticalScale(5),
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              size={scale(24)}
              placeholder={'Tell us about yourself in a few words..'}
              control={control}
              name="description"
              rules={{
                required: 'Description is required',
              }}
            /> */}
            {errors.description && <Error text={errors.description.message} />}

            <View style={{marginVertical: verticalScale(25)}}>
              <CustomButton
                onPress={() => onSubmit()}
                title={'Next'}
                containerRestyle={{borderRadius: scale(30)}}
              />
            </View>
          </View>
        </View>
        <ImagePickerModal
          visible={SelectImage}
          OnPressCamera={() => {
            OpenCamera();
            closePicker();
          }}
          OnPressPhoto={() => {
            OpenGallery();
            closePicker;
          }}
          onClose={closePicker}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddBio;

const styles = StyleSheet.create({
  GreyBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 1,
    backgroundColor: Colors.GreyBox,
    paddingHorizontal: moderateScale(15),
  },

  LightBox: {
    height: scale(130),
    width: scale(130),
    borderWidth: scale(5),
    borderColor: Colors.White,
    borderRadius: scale(100),
    backgroundColor: Colors.PercentBorder,
    alignSelf: 'center',
    marginTop: verticalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  InnerBox: {
    height: scale(50),
    width: scale(50),
    borderWidth: scale(5),
    borderColor: Colors.White,
    borderRadius: scale(100),
    backgroundColor: Colors.ThemeBlue,
    position: 'absolute',
    bottom: '-20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PerBox: {
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
  },
  SaveText: {
    fontFamily: Font.Gilroy600,
    color: Colors.CancelSave,
    fontSize: scale(16),
  },
  SaveBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(25),
    marginTop: verticalScale(10),
  },
  DescibeText: {
    color: Colors.Black,
    fontFamily: Font.Poppins500,
    fontSize: scale(16),
  },
  SkipText: {
    fontSize: scale(14),
    fontFamily: Font.Poppins800,
    color: Colors.TextBlue,
  },
  SkipBox: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  AddBio: {
    fontFamily: Font.Manrope600,
    color: Colors.AddBioText,
    fontSize: scale(24),
  },
  BoiBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PerText: {
    color: Colors.Black,
    fontFamily: Font.Gilroy500,
    fontSize: scale(8),
  },
  InputStyles: {
    color: Colors.Black,
    fontFamily: Font.Poppins500,
  },
  smallbox: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    backgroundColor: Colors.White,
    borderRadius: scale(30),
    height: verticalScale(160),
  },
  CountContainer: {
    position: 'absolute',
    bottom: -2,
    right: scale(10),
    // backgroundColor: 'black',
    padding: moderateScale(5),
  },
  CountText: {
    fontSize: scale(8),
    fontFamily: Font.Poppins400,
    color: Colors.CharCount,
  },
  Name: {
    fontFamily: Font.Manrope600,
    fontSize: scale(30),
    color: Colors.AccountCreatedTitle,
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
});
