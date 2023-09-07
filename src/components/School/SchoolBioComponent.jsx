import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import ImagePicker from 'react-native-image-crop-picker';
import ImagePickerModal from '../../components/Modal/ImagePickerModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {submitEditProfile} from '../../redux/actions/CommonAction';

const SchoolBioComponent = props => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.holderReducer.userDetails);
  const [SelectImage, setSelectImage] = useState(false);
  const [ProfilePic, setProfilePic] = useState('');
  const [selectCoverImage, setSelectCoverImage] = useState(false);
  const [editAbout, setEditAbout] = useState(false);
  const [CoverPic, setCoverPic] = useState('');
  const [textInput, setTextInput] = useState(userDetails?.data?.about);

  const OpenGallery = type => {
    console.log('type', type);
    ImagePicker.openPicker({
      width: type === 'cover' ? 1200 : 300,
      height: type === 'cover' ? 400 : 300,
      cropping: true,
    }).then(image => {
      console.log(image);
      type === 'cover' ? setCoverPic(image.path) : setProfilePic(image.path);
      type === 'cover' ? props.cover(image.path) : props.profile(image.path);
      closePicker(type);
    });
  };
  const OpenCamera = type => {
    ImagePicker.openCamera({
      width: type === 'cover' ? 1200 : 300,
      height: type === 'cover' ? 400 : 300,
      cropping: true,
    }).then(image => {
      console.log('image', image);
      type === 'cover' ? setCoverPic(image.path) : setProfilePic(image.path);
      type === 'cover' ? props.cover(image.path) : props.profile(image.path);
      closePicker(type);
    });
  };
  const closePicker = type => {
    type === 'cover' ? setSelectCoverImage(false) : setSelectImage(false);
  };
  const onSubmit = () => {
    dispatch(submitEditProfile(textInput, ProfilePic, CoverPic));
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={
          CoverPic
            ? {uri: CoverPic}
            : userDetails?.data?.cover_image
            ? {uri: userDetails?.data?.cover_image}
            : require('../../assets/image/schoolpfp.png')
        }
        // source={props.cover_pic}
        imageStyle={{
          opacity: props.edit ? 0.5 : 1,
          backgroundColor: props.edit ? 'black' : null,
        }}
        resizeMode="cover"
        style={{flex: 1, height: '75%'}}>
        {props.edit ? (
          <TouchableOpacity
            onPress={() => setSelectCoverImage(true)}
            style={styles.EditCover}>
            <MaterialCommunityIcons
              name="pencil"
              size={scale(25)}
              color={Colors.ThemeBlue}
            />
          </TouchableOpacity>
        ) : null}

        <View style={styles.CoverView}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(30),
              justifyContent: 'space-between',
            }}>
            <View style={styles.ImageBox}>
              {props.edit ? (
                <TouchableOpacity
                  onPress={() => setSelectImage(true)}
                  style={styles.EditBox}>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={scale(22)}
                    color={Colors.ThemeBlue}
                    style={styles.EditDp}
                  />
                </TouchableOpacity>
              ) : null}

              {ProfilePic ? (
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: scale(20),
                  }}
                  source={{uri: ProfilePic}}
                />
              ) : userDetails?.data?.profile_image ? (
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: scale(20),
                  }}
                  source={{uri: userDetails?.data?.profile_image}}
                />
              ) : (
                <Ionicons
                  name={'person'}
                  color={Colors.ThemeBlue}
                  size={scale(55)}
                />
              )}
              {/* 
              <Image
                source={props.display_pic}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              /> */}
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.BioView}>
        <View style={{marginTop: verticalScale(10)}}>
          <Text style={styles.Title}>{props.name}</Text>
        </View>

        <View
          style={[
            GlobalStyle.Row,
            {
              justifyContent: 'space-between',
              marginTop: verticalScale(25),
            },
          ]}>
          <Text style={styles.LightHeading}>About School</Text>
          {props.edit ? (
            <TouchableOpacity onPress={() => setEditAbout(!editAbout)}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={scale(25)}
                color={Colors.ThemeBlue}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={{marginTop: verticalScale(10)}}>
          {editAbout ? (
            <TextInput
              value={textInput}
              onChangeText={item => (setTextInput(item), props.getabout(item))}
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
          ) : (
            <Text style={styles.BioText}>{userDetails?.data?.about}</Text>
          )}
        </View>
      </View>
      <ImagePickerModal
        visible={SelectImage}
        OnPressCamera={() => {
          OpenCamera('profile');
          closePicker();
        }}
        OnPressPhoto={() => {
          OpenGallery('profile');
          closePicker;
        }}
        onClose={closePicker}
      />

      <ImagePickerModal
        visible={selectCoverImage}
        OnPressCamera={() => {
          OpenCamera('cover');
          closePicker();
        }}
        OnPressPhoto={() => {
          OpenGallery('cover');
          closePicker;
        }}
        onClose={closePicker}
      />
    </View>
  );
};

export default SchoolBioComponent;

const styles = StyleSheet.create({
  ImageBox: {
    borderRadius: scale(20),
    height: scale(100),
    width: scale(100),
    backgroundColor: '#E4E6E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightHeading: {
    color: '#313131',
    fontSize: scale(16),
    fontFamily: Font.Poppins700,
  },

  EditCover: {
    paddingHorizontal: moderateScale(2),
    marginTop: verticalScale(5),
    position: 'absolute',
    right: 0,
    // borderRadius: scale(10),
    marginRight: moderateScale(10),
    zIndex: 2,
    // paddingVertical: moderateScale(1),
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

  CoverView: {
    paddingHorizontal: moderateScale(20),
  },
  EditBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    bottom: 2,
    right: 5,
  },
  EditDp: {},
  BioText: {
    color: '#656565',
    fontSize: scale(14),
    fontFamily: Font.Poppins500,
  },

  BioView: {
    paddingHorizontal: moderateScale(20),
  },
});
