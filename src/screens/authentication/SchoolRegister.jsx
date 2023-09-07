import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ProfileCompHeader from '../../components/Headers/ProfileCompHeader';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/Inputs/CustomInput';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Errors/Error';
import {Font} from '../../utils/font';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {typeExperience} from '../../redux/actions/AuthAction';
import {useDispatch, useSelector} from 'react-redux';

const SchoolRegister = ({navigation}) => {
  const dispatch = useDispatch();
  const RoleId = useSelector(state => state.holderReducer.role_id);
  const windowHeight = Dimensions.get('window').height;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isDSelected, setIsDSelected] = useState(false);
  const [Ddate, setDDate] = useState(new Date());

  const [isSelected2, setIsSelected2] = useState(false);
  const [isDSelected2, setIsDSelected2] = useState(false);
  const [Ddate2, setDDate2] = useState(new Date());
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const onSubmit = data => {
    dispatch(
      typeExperience(
        data,
        moment(Ddate).format('MM-YYYY'),
        RoleId.id,
        navigation,
      ),
    );
    // navigation.navigate('designfeesstructure');
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
    <SafeAreaView style={GlobalStyle.Container}>
      <ProfileCompHeader />

      <View style={[GlobalStyle.GreyBox]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: windowHeight * 0.05}} />
          <View style={{alignItems: 'center'}}>
            <Text style={styles.heading}>School Registration</Text>
            <Text style={styles.innerHeading}>Tell us about your School</Text>
          </View>
          <CustomInput
            RestyleUpperView={{marginTop: verticalScale(35)}}
            boxStyle={{
              marginTop: verticalScale(10),
              borderColor: Colors.White,
            }}
            uppertrue
            upperText={'School Owner'}
            fontSize={scale(16)}
            size={scale(24)}
            control={control}
            name="owner_name"
            rules={{
              required: 'Owner name is required',
            }}
            maxLength={20}
            placeholder={'Owner Name'}
          />
          {errors.owner_name && <Error text={errors.owner_name.message} />}

          <CustomInput
            boxStyle={{
              marginTop: verticalScale(10),
              borderColor: Colors.White,
            }}
            uppertrue
            upperText={'School Name'}
            fontSize={scale(16)}
            size={scale(24)}
            control={control}
            name="school_name"
            rules={{
              required: 'School name is required',
            }}
            maxLength={20}
            placeholder={'School Name'}
          />
          {errors.school_name && <Error text={errors.school_name.message} />}
          <View style={[{marginTop: verticalScale(25)}]}>
            <Text
              style={{
                fontFamily: Font.Poppins500,
                color: Colors.Black,
                fontSize: scale(16),
              }}>
              Found in
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
                    color: Colors.Black,
                    fontFamily: Font.Gilroy500,
                  }}>
                  {/* {isDSelected ? moment(Ddate).format('MMMM') : 'Month'} */}
                  {isDSelected ? moment(Ddate).format('MM') : 'Month'}
                </Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onCancel={hideDatePicker}
                onConfirm={date => {
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
                    color: Colors.Black,
                    fontFamily: Font.Gilroy500,
                  }}>
                  {/* {isDSelected
                ? format(Ddate?.getTime(), 'yyyy/MM/dd')
                : 'Year'} */}
                  {isDSelected ? moment(Ddate).format('YYYY') : 'Year'}
                </Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onCancel={hideDatePicker}
                onConfirm={date => {
                  setDatePickerVisibility(false);
                  setIsDSelected(true);
                  setDDate(date);
                }}
              />
            </View>
          </View>

          <CustomInput
            search={true}
            uppertrue
            upperText={'Find Teachers'}
            placeholder={'Find Teachers'}
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
            name="find_teacher"
          />

          <CustomInput
            search={true}
            uppertrue
            upperText={'Find Students'}
            placeholder={'Find Students'}
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
            name="find_student"
          />

          <View style={{marginVertical: verticalScale(30)}}>
            <CustomButton title={'Save'} onPress={handleSubmit(onSubmit)} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SchoolRegister;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.Manrope700,
    color: Colors.AddBioText,
    fontSize: scale(24),
  },

  innerHeading: {
    fontFamily: Font.Manrope600,
    color: Colors.SkillsColor,
    fontSize: scale(15),
  },
});
