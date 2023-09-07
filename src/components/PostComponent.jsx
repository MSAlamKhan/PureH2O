import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {Font} from '../utils/font';
import {Colors} from '../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import CustomInput from './Inputs/CustomInput';
import CustomButton from './CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PostComponent = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      description: '',
    },
  });
  return (
    <View>
      <Text style={styles.Title}>{props.title}</Text>

      <View style={styles.ImgView}>
        <Text style={[styles.Select, {marginTop: 0}]}>Select image</Text>

        {props.type == 'event' ? (
          <TouchableOpacity
            onPress={props.onPressMore}
            style={styles.MoreButton}>
            <Text style={styles.MoreText}>ADD MORE</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ImageBox}>
          <View style={styles.EmptyImg}>
            <AntDesign name={'camerao'} size={scale(20)} color={Colors.White} />
          </View>
          {/* <Image source={props.img} /> */}
        </View>

        {props.type == 'event' ? (
          <>
            <View
              style={[styles.ImageBox, {marginHorizontal: moderateScale(8)}]}>
             <View style={styles.EmptyImg}>
            <AntDesign name={'camerao'} size={scale(20)} color={Colors.White} />
          </View>
            </View>
            <View
              style={[styles.ImageBox, {marginHorizontal: moderateScale(8)}]}>
              <View style={styles.EmptyImg}>
                <AntDesign
                  name={'camerao'}
                  size={scale(20)}
                  color={Colors.White}
                />
              </View>
            </View>
          </>
        ) : null}
      </View>

      <View style={styles.CommonView}>
        <Text style={styles.Select}>Post Description</Text>

        <CustomInput
          multiline={true}
          wordcount={true}
          boxStyle={{
            paddingHorizontal: moderateScale(0),
            backgroundColor: Colors.White,
            borderRadius: scale(30),
            height: verticalScale(100),
            borderColor: Colors.White,
            alignItems: 'flex-start',
            marginTop: verticalScale(15),
          }}
          restyle={{paddingHorizontal: moderateScale(20)}}
          fontSize={scale(16)}
          size={scale(24)}
          control={control}
          name="post_description"
          rules={{
            required: 'Description cannot be empty',
          }}
        />
      </View>

      {props.type == 'event' ? (
        <View style={styles.CommonView}>
          <Text style={styles.Select}>Location</Text>
          
         
          <CustomInput
            search={true}
            placeholder={'Location'}
            boxStyle={{
              paddingHorizontal: moderateScale(0),
              backgroundColor: Colors.White,
              borderRadius: scale(12),
              height: verticalScale(48),
              borderColor: Colors.White,
              alignItems: 'flex-start',
              marginTop: verticalScale(15),
            }}
            restyle={{paddingHorizontal: moderateScale(20)}}
            fontSize={scale(14)}
            size={scale(24)}
            control={control}
            name="location"
            // onPressLocation={props.onPressLocation}
          />
        
        </View>
      ) : null}

      {props.type == 'event' ? (
        <View style={styles.CommonView}>
          <Text style={styles.Select}>Select multiple students</Text>
          <CustomInput
            placeholder={'@Student'}
            boxStyle={{
              paddingHorizontal: moderateScale(0),
              backgroundColor: Colors.White,
              borderRadius: scale(12),
              height: verticalScale(48),
              borderColor: Colors.White,
              alignItems: 'flex-start',
              marginTop: verticalScale(15),
            }}
            restyle={{paddingHorizontal: moderateScale(20)}}
            fontSize={scale(14)}
            size={scale(24)}
            control={control}
            name="student"
            onPressLocation={props.onPressLocation}
          />
        </View>
      ) : null}

      {props.type == 'admission' ? (
        <View style={styles.CommonView}>
          <Text style={styles.Select}>Number of openings</Text>
          <CustomInput
            placeholder={'Number of openings'}
            boxStyle={{
              paddingHorizontal: moderateScale(0),
              backgroundColor: Colors.White,
              borderRadius: scale(12),
              height: verticalScale(48),
              borderColor: Colors.White,
              alignItems: 'flex-start',
              marginTop: verticalScale(15),
            }}
            restyle={{paddingHorizontal: moderateScale(20)}}
            fontSize={scale(14)}
            size={scale(24)}
            control={control}
            name="opening"
            onPressLocation={props.onPressLocation}
          />
        </View>
      ) : null}

      <CustomButton
        title={'Publish'}
        textStyle = {{color: '#838FA0'}}
        containerRestyle={{
          backgroundColor: Colors.PublishButton,
          borderRadius: scale(30),
          marginBottom: verticalScale(20),
          marginTop: verticalScale(30),
        }}
        onPress={props.onSubmit}
      />
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  Title: {
    fontFamily: Font.Poppins700,
    color: Colors.Black,
    fontSize: scale(19),
    textAlign: 'center',
    marginTop: verticalScale(10),
  },

  EmptyImg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    padding: scale(5),
    backgroundColor: Colors.ThemeBlue,
  },
  ImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(35),
    alignItems: 'center',
  },
  Select: {
    fontFamily: Font.Poppins600,
    color: Colors.Black,
    fontSize: scale(18),
    marginTop: verticalScale(5),
  },

  MoreButton: {
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: Colors.ThemeBlue,
    padding: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  MoreText: {
    color: Colors.TextBlue,
    fontSize: scale(12),
    fontFamily: Font.Poppins700,
  },

  ImageBox: {
    borderRadius: scale(10),
    height: Dimensions.get('screen').height * 0.12,
    width: Dimensions.get('screen').width * 0.28,
    marginTop: verticalScale(10),
    paddingHorizontal: moderateScale(5),
    backgroundColor: Colors.PostImg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CommonView: {
    marginTop: verticalScale(20),
  },
});
