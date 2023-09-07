import {StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePickerModal from '../Modal/ImagePickerModal';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../CustomButton';


const ProfileBioComponent = props => {
  const [SelectImage, setSelectImage] = useState(false);
  const [ProfilePic, setProfilePic] = useState('');
  const OpenGallery =()  => {
   
    ImagePicker.openPicker({
      width: 300,
      height:  300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfilePic(image.path);
      closePicker();
    });
  };

  const OpenCamera = () => {
    ImagePicker.openCamera({
      width:  300,
      height:300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfilePic(image.path);
      closePicker();
     
    });
  };

  const closePicker = () => {
    setSelectImage(false);
  };
  return (
    <View>
      <View style={styles.CoverView}>
        <View style={{flexDirection: 'row', marginTop: verticalScale(30)}}>
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
              ) : (
                <Ionicons
                  name={'person'}
                  color={Colors.ThemeBlue}
                  size={scale(55)}
                />
              )}
          </View>

          <View
            style={{
              marginLeft: moderateScale(15),
              marginTop: verticalScale(10),
              
            }}>
            <View>
              <Text style={styles.Name}>{props.name}</Text>
            </View>

            <View>
              <Text style={styles.Title}>{props.title}</Text>
            </View>

            {/* <View style={{marginTop:verticalScale(20)}}>
           <CustomButton containerRestyle = {{height:verticalScale(35),marginVertical: verticalScale(10)}} title={'Connect'}/>
            </View> */}
          </View>
        </View>
      </View>

      <View style={styles.BioView}>
       
        <View
          style={[
            GlobalStyle.Row,
            {
              justifyContent: 'space-between',
              marginTop: verticalScale(25),
            },
          ]}>
          <Text style={styles.LightHeading}>About Me</Text>
          {props.edit ? (
            <MaterialCommunityIcons
              name="pencil-outline"
              size={scale(25)}
              color={Colors.ThemeBlue}
            />
          ) : null}
        </View>

        <View style={{marginTop: verticalScale(10)}}>
          <Text style={styles.BioText}>
            Hi guys, {`I'm`} Aria Chan and {`I'm`} a student of 7 class. I can
            teach some programming language. Hope I can help you learn coding
            better in future. If you have any questions, you can inbox me.
            Thanks!
          </Text>
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
    </View>
  );
};

export default ProfileBioComponent;

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
  BioText: {
    color: '#656565',
    fontSize: scale(14),
    fontFamily: Font.Poppins500,
  },

  BioView: {
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
});
