import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React,{useState} from 'react';
import MainHeader from '../../../components/Headers/MainHeader';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import CustomInput from '../../../components/Inputs/CustomInput';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import {Colors} from '../../../utils/Colors';
import EmployeeCard from '../../../components/Common/Cards/EmployeeCard';

const TeacherSearch = () => {
    const [open, setOpen] = useState(false);
  more_data = [
    {
      id: 1,
      name: 'Count Olaf',
      username: '@jessii_morrow',
      img: require('../../../assets/image/happy.png'),
      type: 'student'
    },
    {
      id: 2,
      name: 'Jim Baudelaires ',
      username: '@jessi_xx',
      img: require('../../../assets/image/happy2.png'),
      type: 'student'
    },
    {
      id: 3,
      name: 'Lucas Demeaning',
      username: '@jessi_xx',
      img: require('../../../assets/image/thomas.png'),
      type: 'student'
    },
    {
      id: 4,
      name: 'Lucas Demeaning',
      username: '@jessi_xx',
      img: require('../../../assets/image/teacher.png'),
      type: 'student'
    },
    {
      id: 5,
      name: 'Lucas Demeaning',
      username: '@jessi_xx',
      img: require('../../../assets/image/teacher.png'),
      type: 'student'
    },
  ];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={true}
        moreIcon={true}
        moreIconColor={'transparent'}
        title={'Search'}
      />

      <View style={GlobalStyle.ph20flex}>
        <View style={{marginBottom: verticalScale(25)}}>
          <CustomInput
            search={true}
            placeholder={'Find More People'}
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
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {more_data.map((more_data, index) => {
              return (
                <View key={index}>
                  <EmployeeCard option={'Connect'} selected={'Message'}  connectMore={true} data={more_data} />
                </View>
              );
            })}

           
          </View>

         
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TeacherSearch;

const styles = StyleSheet.create({});
