import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/Colors';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../Inputs/CustomInput';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import CustomButton from '../../CustomButton';
import Error from '../../Errors/Error';
import {useForm, Controller} from 'react-hook-form';

const NewExperienceField = () => {
  const [select, setSelect] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  // const onSubmit = () => {
  //   navigation.navigate('signin');
  // };

  const [characterCount, setCharacterCount] = useState(0);

  return (
    <View style={{}}>
      <CustomInput
        boxStyle={{
          marginTop: verticalScale(10),
          borderColor: Colors.White,
        }}
        uppertrue
        upperText={'Title'}
        fontSize={scale(16)}
        size={scale(24)}
        control={control}
        name="title"
        // rules={{
        //   required: 'Title is required',
        // }}
        maxLength={20}
      />
      {/* {errors.title && <Error text={errors.title.message} />} */}
      <CustomInput
        boxStyle={{
          marginTop: verticalScale(10),
          borderColor: Colors.White,
        }}
        uppertrue={true}
        upperText={'Institute name*'}
        fontSize={scale(16)}
        size={scale(24)}
        control={control}
        name="institutename"
        rules={{
          required: 'Institute is required',
        }}
      />
      {errors.institutename && <Error text={errors.institutename.message} />}

      <CustomInput
        boxStyle={{
          marginTop: verticalScale(10),
          borderColor: Colors.White,
        }}
        uppertrue={true}
        upperText={'Location type'}
        fontSize={scale(16)}
        size={scale(24)}
        control={control}
        name="locationtype"
        // rules={{
        //   required: 'Email is required',
        // }}
      />
      {/* {errors.locationtype && (
              <Error text={errors.locationtype.message} />
            )} */}

      <Pressable
        onPress={() => setSelect(!select)}
        style={[
          {
            paddingHorizontal: moderateScale(10),
            marginVertical: verticalScale(15),
          },
          GlobalStyle.Row,
        ]}>
        <MaterialCommunityIcons
          name={select ? 'checkbox-outline' : 'checkbox-blank-outline'}
          color={Colors.ThemeBlue}
          size={scale(20)}
        />
        <Text style={styles.RoleText}>I am currently working in this role</Text>
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{width: '45%'}}>
          <CustomInput
            restyle={{paddingHorizontal: moderateScale(0)}}
            boxStyle={{
              marginTop: verticalScale(10),
              borderColor: Colors.White,
            }}
            uppertrue={true}
            upperText={'Start Date'}
            maxLength={2}
            fontSize={scale(16)}
            size={scale(24)}
            control={control}
            keyboardType={'numeric'}
            name="startmonth"
            // rules={{
            //   required: '*required',
            // }}
            placeholder="Month"

            // maxLength={20}
          />
          {/* {errors.startmonth && (
                  <Error text={errors.startmonth.message} />
                )} */}
        </View>

        <View style={{width: '45%', justifyContent: 'flex-end'}}>
          <CustomInput
            restyle={{paddingHorizontal: moderateScale(0)}}
            boxStyle={{
              marginTop: verticalScale(10),
              borderColor: Colors.White,
            }}
            fontSize={scale(16)}
            size={scale(24)}
            maxLength={4}
            control={control}
            keyboardType={'numeric'}
            name="startyear"
            // rules={{
            //   required: '*required',
            // }}
            placeholder="Year"
          />
          {/* {errors.startyear && <Error text={errors.startyear.message} />} */}
        </View>
      </View>

      {select ? null : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{width: '45%'}}>
            <CustomInput
              restyle={{paddingHorizontal: moderateScale(0)}}
              boxStyle={{
                marginTop: verticalScale(10),
                borderColor: Colors.White,
              }}
              uppertrue
              upperText={'End Date'}
              keyboardType={'numeric'}
              fontSize={scale(16)}
              size={scale(24)}
              control={control}
              name="endmonth"
              // rules={{
              //   required: '*required',
              // }}
              placeholder="Month"
            />
            {/* {errors.endmonth && <Error text={errors.endmonth.message} />} */}
          </View>

          <View style={{width: '45%', justifyContent: 'flex-end'}}>
            <CustomInput
              restyle={{paddingHorizontal: moderateScale(0)}}
              boxStyle={{
                marginTop: verticalScale(10),
                borderColor: Colors.White,
              }}
              fontSize={scale(16)}
              size={scale(24)}
              control={control}
              name="endyear"
              // rules={{
              //   required: '*required',
              // }}
              placeholder="Year"
            />
            {/* {errors.endyear && <Error text={errors.endyear.message} />} */}
          </View>
        </View>
      )}

      <View style={{marginVertical: verticalScale(20)}}>
        <View>
          <Text
            style={{
              color: Colors.Black,
              fontFamily: Font.Poppins500,
              fontSize: scale(16),
            }}>
            *Description
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: verticalScale(10),
          }}>
          <View style={[styles.smallbox]}>
            {/* <View style={{flex: 1}}> */}
            <Controller
              control={control}
              rules={
                {
                  // required: true,
                }
              }
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  // onChangeText={handleInputChange}
                  // value={text}
                  multiline
                  placeholderTextColor={Colors.placeholderTextColor}
                  style={styles.InputStyles}
                  scrollEnabled={true}
                  maxLength={300}
                  onChangeText={text => {
                    onChange(text);
                    setCharacterCount(text.length);
                  }}
                />
              )}
              // name="description"
              name="description"
            />
            {/* </View> */}

            <View style={styles.CountContainer}>
              <Text style={styles.CountText}>
                {characterCount}/300 Characters
              </Text>
            </View>
          </View>
        </View>
        {errors.description && <Error text={'Please describe yourself'} />}
      </View>

      {/* <View
              style={[
                GlobalStyle.Row,
                {
                  marginBottom: verticalScale(20),
                  justifyContent: 'space-between',
                  paddingHorizontal: moderateScale(10),
                },
              ]}>
              <Text
                style={{
                  fontFamily: Font.Poppins500,
                  fontSize: scale(18),
                  color: '#313131',
                }}>
                Skills
              </Text>
              <Entypo
                name={'plus'}
                color={Colors.ThemeBlue}
                size={scale(22)}
                onPress={() => setExpandPlus(!expandPlus)}
              />
            </View> */}
    </View>
  );
};

export default NewExperienceField;

const styles = StyleSheet.create({
  smallbox: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: moderateScale(20),
    backgroundColor: Colors.White,
    borderRadius: scale(30),
    height: verticalScale(160),
    position: 'relative',
  },
  container: {
    justifyContent: 'center',
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

  input: {
    flex: 1,
    paddingHorizontal: moderateScale(10),
    color: Colors.Black,
    fontFamily: Font.Poppins500,
    fontSize: scale(16),
    alignItems: 'center',
    justifyContent: 'center',

    top: scale(1.5),
  },
  SkillsAddedText: {
    // flex: 1,
    fontFamily: Font.Poppins400,
    fontSize: scale(16),
    color: Colors.ThemeBlue,
  },
  addButton: {
    marginTop: 16,
  },
  GreyBox: {
    flex: 1,
    paddingHorizontal: moderateScale(25),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: Colors.GreyBox,
  },

  Indicate: {
    fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(16),
  },

  RoleText: {
    fontFamily: Font.Poppins500,
    color: Colors.Black,
    fontSize: scale(16),
    letterSpacing: -0.5,
    marginLeft: scale(2),
  },

  InputStyles: {
    color: Colors.Black,
    fontFamily: Font.Poppins500,
  },
  CountContainer: {
    position: 'absolute',
    bottom: -2,
    right: scale(10),
    padding: moderateScale(5),
  },
  CountText: {
    fontSize: scale(8),
    fontFamily: Font.Poppins400,
    color: Colors.CharCount,
  },
});
