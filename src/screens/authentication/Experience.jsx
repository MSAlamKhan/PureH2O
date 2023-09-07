import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../../utils/Colors';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import ProfileCompHeader from '../../components/Headers/ProfileCompHeader';
import * as Progress from 'react-native-progress';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../components/Inputs/CustomInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Errors/Error';
import {useForm, Controller} from 'react-hook-form';
import NewExperienceField from '../../components/Common/Cards/NewExperienceField';
import NoUseformInput from '../../components/WithOutUseFrom/NoUseformInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {typeExperience} from '../../redux/actions/AuthAction';

const initialExpData = {
  title: '',
  institue_name: '',
  location_type: '',
  cuurently_work: '',
  Start_Data: '',
  End_Data: '',
  Description: '',
  skill_switch: '',
  skills: [],
};
const Experience = ({navigation}) => {
  const dispatch = useDispatch();
  const RoleId = useSelector(state => state.holderReducer.role_id);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [select, setSelect] = useState(false);
  const [expandPlus, setExpandPlus] = useState(false);
  const [experienceData, setExperienceData] = useState([initialExpData]);
  const [isDSelected, setIsDSelected] = useState(false);
  const [Ddate, setDDate] = useState(new Date());
  const [isDSelected2, setIsDSelected2] = useState(false);
  const [inputs, setInputs] = useState([]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const addInput = () => {
    if (currentInput) {
      setInputs([...inputs, currentInput]);
      setCurrentInput('');
    }
  };

  const handleInputChange = text => {
    setCurrentInput(text);
  };

  const handleInputSubmit = () => {
    addInput();
  };
  // const handleInputSubmit = index => {
  //   console.log('text,index', currentInput, index);
  //   const copy = [...experienceData];
  //   copy[index].skills.push(currentInput);
  //   setExperienceData(copy);
  //   // addInput();
  // };
  const onSubmit = () => {
    // navigation.navigate('signin');
    dispatch(typeExperience(experienceData, inputs, RoleId.id, navigation));
    // var formdata = new FormData();
    // formdata.append('role_id', '2');
    // formdata.append('title[0]', 'class 8');
    // formdata.append('institute_name[0]', 'Oxford');
    // formdata.append('location[0]', 'London');
    // formdata.append('start_date[0]', '2023-08-29T05:36:34.000000Z');
    // formdata.append(
    //   'description[0]',
    //   'Recently join Oxford for fullfil my dreams',
    // );
    // formdata.append('end_date[0]', '2023-08-29T05:36:34.000000Z');
    // formdata.append('skills', '[hardworking , teamleader]');

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow',
    // };

    // fetch('https://sassolution.org/School/api/experience/27', requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  };
  const renderItem = ({item}) => (
    <View style={styles.inputContainer}>
      <AntDesign
        name="pluscircleo"
        size={24}
        color="black"
        style={styles.plusIcon}
      />
      <Text style={styles.inputText} numberOfLines={null}>
        {item}
      </Text>
    </View>
  );
  const addMultipleSection = () => {
    const newData = [...experienceData, initialExpData];
    setExperienceData(newData);
  };
  const titleChange = (textx, index, type) => {
    const _inputs = [...experienceData];
    _inputs[index][type] = textx;
    setExperienceData(_inputs);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };
  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.ThemeBlue, flex: 1}}>
      <ProfileCompHeader />
      <View style={styles.GreyBox}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{
          //   flex: 1,
          // }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: verticalScale(25),
            }}>
            <View style={{flex: 1}} />
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Font.Manrope700,
                  color: Colors.AddBioText,
                  fontSize: scale(24),
                }}>
                Your Experience
              </Text>
              <Text
                style={{
                  fontFamily: Font.Manrope600,
                  color: Colors.SkillsColor,
                  fontSize: scale(15),
                }}>
                Write your experience
              </Text>
            </View>
            <TouchableOpacity
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
                borderRadius={scale(15)}
                padding={2}
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
                height: scale(22),
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
                  fontFamily: Font.Poppins500,
                  color: Colors.PercentText,
                  fontSize: scale(6),
                  textAlignVertical: 'center',
                }}>
                50%
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: verticalScale(25),
            }}>
            <View>
              <Text style={styles.Indicate}>* Indicates required</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(10),
              }}>
              <TouchableOpacity onPress={handleSubmit(addMultipleSection)}>
                <Entypo
                  name={'plus'}
                  color={Colors.ThemeBlue}
                  size={scale(20)}
                  style={{marginLeft: moderateScale(8)}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={experienceData}
            renderItem={({item, index}) => {
              return (
                <View style={{flex: 1}}>
                  <NoUseformInput
                    value={item.title}
                    onChangeText={inputtext =>
                      titleChange(inputtext, index, 'title')
                    }
                    boxStyle={{
                      marginTop: verticalScale(10),
                      borderColor: Colors.White,
                    }}
                    uppertrue
                    upperText={'Title'}
                    fontSize={scale(16)}
                    size={scale(24)}
                    maxLength={20}
                    placeholder={'Title'}
                  />
                  {/* {errors.title && <Error text={errors.title.message} />} */}
                  {/* <CustomInput
                    boxStyle={{
                      marginTop: verticalScale(10),
                      borderColor: Colors.White,
                    }}
                    uppertrue={true}
                    upperText={'Institute name*'}
                    fontSize={scale(16)}
                    placeholder={'Institute name'}
                    size={scale(24)}
                    control={control}
                    name="institutename"
                    rules={{
                      required: 'Institute is required',
                    }}
                  /> */}
                  <NoUseformInput
                    value={item.institue_name}
                    onChangeText={inputtext =>
                      titleChange(inputtext, index, 'institue_name')
                    }
                    boxStyle={{
                      marginTop: verticalScale(10),
                      borderColor: Colors.White,
                    }}
                    uppertrue
                    upperText={'Institute name'}
                    fontSize={scale(16)}
                    size={scale(24)}
                    maxLength={20}
                    placeholder={'Institute name'}
                  />
                  {/* {errors.institutename && (
                    <Error text={errors.institutename.message} />
                  )} */}

                  {/* <CustomInput
                    boxStyle={{
                      marginTop: verticalScale(10),
                      borderColor: Colors.White,
                    }}
                    uppertrue={true}
                    upperText={'Location'}
                    placeholder={'Location'}
                    fontSize={scale(16)}
                    size={scale(24)}
                    control={control}
                    name="locationtype"
                    rules={{
                      required: 'Location is required',
                    }}
                  /> */}
                  <NoUseformInput
                    value={item.location_type}
                    onChangeText={inputtext =>
                      titleChange(inputtext, index, 'location_type')
                    }
                    boxStyle={{
                      marginTop: verticalScale(10),
                      borderColor: Colors.White,
                    }}
                    uppertrue
                    upperText={'Location'}
                    fontSize={scale(16)}
                    size={scale(24)}
                    maxLength={20}
                    placeholder={'Location'}
                  />
                  {/* {errors.locationtype && (
                    <Error text={errors.locationtype.message} />
                  )} */}

                  <Pressable
                    onPress={() => (
                      setSelect(!select),
                      titleChange(!select, index, 'cuurently_work')
                    )}
                    style={[
                      {
                        paddingHorizontal: moderateScale(10),
                        marginVertical: verticalScale(15),
                      },
                      GlobalStyle.Row,
                    ]}>
                    <MaterialCommunityIcons
                      name={
                        item?.cuurently_work
                          ? 'checkbox-outline'
                          : 'checkbox-blank-outline'
                      }
                      color={Colors.ThemeBlue}
                      size={scale(20)}
                    />
                    <Text style={styles.RoleText}>
                      I am currently working in this role
                    </Text>
                  </Pressable>
                  <View style={[{marginTop: verticalScale(25)}]}>
                    <Text
                      style={{
                        fontFamily: Font.Poppins500,
                        color: Colors.Black,
                        fontSize: scale(16),
                      }}>
                      Start Date
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <View style={{width: '45%'}}>
                      <TouchableOpacity
                        onPress={() => showDatePicker()}
                        style={{
                          paddingHorizontal: moderateScale(20),
                          marginTop: verticalScale(10),
                          borderColor: Colors.White,
                          alignItems: 'center',
                          flexDirection: 'row',
                          width: '100%',
                          height: verticalScale(50),
                          backgroundColor: Colors.White,
                          borderWidth: scale(1),
                          borderRadius: scale(25),
                        }}>
                        <Text
                          style={{
                            color: item.Start_Data
                              ? Colors.Black
                              : Colors.placeholderTextColor,
                            fontFamily: Font.Gilroy500,
                          }}>
                          {item.Start_Data
                            ? moment(item.Start_Data).format('MM')
                            : 'Month'}
                        </Text>
                      </TouchableOpacity>

                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onCancel={hideDatePicker}
                        onConfirm={date => {
                          titleChange(Ddate, index, 'Start_Data', 'month');
                          setDatePickerVisibility(false);
                          setIsDSelected(true);
                          setDDate(date);
                        }}
                      />
                    </View>

                    <View style={{width: '45%', justifyContent: 'flex-end'}}>
                      <TouchableOpacity
                        onPress={() => showDatePicker()}
                        style={{
                          paddingHorizontal: moderateScale(20),
                          marginTop: verticalScale(10),
                          borderColor: Colors.White,
                          alignItems: 'center',
                          flexDirection: 'row',
                          width: '100%',
                          height: verticalScale(50),
                          backgroundColor: Colors.White,
                          borderWidth: scale(1),
                          borderRadius: scale(25),
                        }}>
                        <Text
                          style={{
                            color: item.Start_Data
                              ? Colors.Black
                              : Colors.placeholderTextColor,
                            fontFamily: Font.Gilroy500,
                          }}>
                          {item.Start_Data
                            ? moment(item.Start_Data).format('YYYY')
                            : 'Year'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={[{marginTop: verticalScale(25)}]}>
                    <Text
                      style={{
                        fontFamily: Font.Poppins500,
                        color: Colors.Black,
                        fontSize: scale(16),
                      }}>
                      End Date
                    </Text>
                  </View>

                  {item?.cuurently_work ? null : (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View style={{width: '45%'}}>
                        <TouchableOpacity
                          onPress={() => showDatePicker2()}
                          style={{
                            paddingHorizontal: moderateScale(20),
                            marginTop: verticalScale(10),
                            borderColor: Colors.White,
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            height: verticalScale(50),
                            backgroundColor: Colors.White,
                            borderWidth: scale(1),
                            borderRadius: scale(25),
                          }}>
                          <Text
                            style={{
                              color: item.End_Data
                                ? Colors.Black
                                : Colors.placeholderTextColor,
                              fontFamily: Font.Gilroy500,
                            }}>
                            {item.End_Data
                              ? moment(item.End_Data).format('MM')
                              : 'Month'}
                          </Text>
                        </TouchableOpacity>

                        <DateTimePickerModal
                          isVisible={isDatePickerVisible2}
                          mode="date"
                          onCancel={hideDatePicker2}
                          onConfirm={date2 => {
                            titleChange(date2, index, 'End_Data', 'month');
                            setDatePickerVisibility2(false);
                            setIsDSelected2(true);
                            setDDate(date2);
                          }}
                        />
                      </View>

                      <View style={{width: '45%', justifyContent: 'flex-end'}}>
                        <TouchableOpacity
                          onPress={() => showDatePicker2()}
                          style={{
                            paddingHorizontal: moderateScale(20),
                            marginTop: verticalScale(10),
                            borderColor: Colors.White,
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            height: verticalScale(50),
                            backgroundColor: Colors.White,
                            borderWidth: scale(1),
                            borderRadius: scale(25),
                          }}>
                          <Text
                            style={{
                              color: item.End_Data
                                ? Colors.Black
                                : Colors.placeholderTextColor,
                              fontFamily: Font.Gilroy500,
                            }}>
                            {item.End_Data
                              ? moment(item.End_Data).format('YYYY')
                              : 'Year'}
                          </Text>
                        </TouchableOpacity>
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
                        {/* <Controller
                          control={control}
                          rules={
                            {
                              // required: true,
                            }
                          }
                          render={({field: {onChange, onBlur, value}}) => ( */}
                        <TextInput
                          value={item.Description}
                          onChangeText={inputtext =>
                            titleChange(inputtext, index, 'Description')
                          }
                          // onChangeText={(textx) => setInputText(textx)}
                          // value={inputText}
                          multiline
                          placeholderTextColor={Colors.placeholderTextColor}
                          style={styles.InputStyles}
                          scrollEnabled={true}
                          maxLength={300}
                          // onChangeText={text => {
                          //   setCharacterCount(text.length);
                          // }}
                        />
                        {/* )} */}
                        {/* // name="description" */}
                        {/* name="description"
                        /> */}
                        {/* </View> */}

                        <View style={styles.CountContainer}>
                          <Text style={styles.CountText}>
                            {item?.Description?.length}/300 Characters
                          </Text>
                        </View>
                      </View>
                    </View>
                    {errors.description && (
                      <Error text={'Please describe yourself'} />
                    )}
                  </View>
                </View>
              );
            }}
          />
          <View
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
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              // onPress={() => setExpandPlus(!expandPlus)}
              style={{
                backgroundColor: expandPlus ? Colors.White : null,

                borderRadius: expandPlus ? scale(30) : null,
                flexDirection: 'row',
                height: expandPlus ? verticalScale(50) : 0,
                alignItems: 'center',
                paddingHorizontal: moderateScale(10),
              }}>
              {expandPlus ? (
                <>
                  {/* <Entypo
                      name={'plus'}
                      color={Colors.ThemeBlue}
                      size={scale(22)}
                      style={{marginLeft: moderateScale(8)}}
                    /> */}
                  <TextInput
                    style={styles.input}
                    placeholder="Enter a skill"
                    value={currentInput}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleInputSubmit}
                    placeholderTextColor={Colors.placeholderTextColor}
                  />
                </>
              ) : null}
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',

                // justifyContent: 'center',
                width: '100%',
                // alignSelf:'center',
                flexWrap: 'wrap',
              }}>
              {inputs.map((input, index) => (
                <View key={index} style={styles.SkillsContainer}>
                  <Text style={styles.SkillsAddedText}>{input}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={{marginVertical: verticalScale(30)}}>
            <CustomButton title={'Save'} onPress={handleSubmit(onSubmit)} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Experience;

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
