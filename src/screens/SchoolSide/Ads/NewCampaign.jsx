import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import MainHeader from '../../../components/Headers/MainHeader';
import CustomInput from '../../../components/Inputs/CustomInput';
import {useForm} from 'react-hook-form';
import SliderComponent from '../../../components/Common/Cards/SliderComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../components/CustomButton';

const NewCampaign = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <MainHeader
        RestyleHeader={{backgroundColor: Colors.ThemeBlue}}
        title={'Payment Method'}
        RestyleTitle={{color: Colors.White}}
        img={require('../../../assets/image/schoolpfp.png')}
        backIcon={true}
        backIconColor={Colors.White}
      />
<ScrollView showsVerticalScrollIndicator={false}>


      <View style={GlobalStyle.ph20flex}>
        <CustomInput
          uppertrue
          upperText={'Campaign Name'}
          restyleUpperText={[styles.restyleUpperText, {fontSize: scale(22)}]}
          boxStyle={styles.InputBoxStyle}
          fontSize={scale(16)}
          control={control}
          maxLength={5}
          restyle={styles.RestyleText}
          name="campaign"
          rules={{
            required: 'Campaign Name',
          }}
          placeholder="Campaign Name"
        />

        <Text
          style={[
            styles.restyleUpperText,
            {marginTop: verticalScale(35), fontSize: scale(22)},
          ]}>
          Schedule and Duration
        </Text>

        <CustomInput
          IonIcons={true}
          IonIcons_Name={'calendar'}
          iconcolor={Colors.FeesBox}
          size={scale(18)}
          uppertrue
          upperText={'Start Date'}
          restyleUpperText={styles.restyleUpperText}
          boxStyle={styles.InputBoxStyle}
          fontSize={scale(16)}
          control={control}
          maxLength={5}
          restyle={styles.RestyleText}
          name="start_date"
          rules={{
            required: 'Start Date is required',
          }}
          placeholder="Start Date"
        />

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
              keyboardType={'numeric'}
              restyleUpperText={styles.restyleUpperText}
              uppertrue={true}
              upperText={'Days'}
              fontSize={scale(16)}
              size={scale(24)}
              control={control}
              name="startmonth"
              // rules={{
              //   required: '*required',
              // }}
              placeholder="Days"

              // maxLength={20}
            />
            {/* {errors.startmonth && (
                  <Error text={errors.startmonth.message} />
                )} */}
          </View>

          <View style={{width: '45%', justifyContent: 'flex-end'}}>
            <CustomInput
              IonIcons={true}
              IonIcons_Name={'calendar'}
              iconcolor={Colors.FeesBox}
              size={scale(18)}
              uppertrue={true}
              upperText={'End Date'}
              restyleUpperText={styles.restyleUpperText}
              boxStyle={{
                marginTop: verticalScale(10),
                borderColor: Colors.White,
              }}
              fontSize={scale(16)}
              control={control}
              name="startyear"
              // rules={{
              //   required: '*required',
              // }}
              placeholder="End Date"
            />
            {/* {errors.startyear && <Error text={errors.startyear.message} />} */}
          </View>
        </View>
        <View style ={{justifyContent:'center',marginTop:verticalScale(40)}}>
          <Text style={styles.Heading}>Total Budget</Text>

          <Text style={styles.Estimate}>
            Estimated 2K - 5.9K Accounts Center accounts reached per day
          </Text>

                <View style={[GlobalStyle.Row,{alignSelf:'center'}]}>

          <Text style={styles.Heading}>$ 14.00</Text>
          <MaterialCommunityIcons
              name="pencil-outline"
              size={scale(25)}
              color={Colors.FeesBox}
              style={{marginLeft: moderateScale(10)}}
            />
                </View>
          <SliderComponent />
        </View>

        <CustomButton
        title={'Boost with credits'}
        containerRestyle={{
          backgroundColor: Colors.PublishButton,
          borderRadius: scale(30),
          marginTop: verticalScale(25),
        }}
        textStyle = {{color : Colors.SignInText}}
        // onPress={props.onSubmit}
      />

        <View style={GlobalStyle.Height}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewCampaign;

const styles = StyleSheet.create({
  restyleUpperText: {
    fontSize: scale(17),
    fontFamily: Font.Poppins700,
    color: Colors.White,
  },

  Heading :{
    fontFamily: Font.Poppins700,
    fontSize: scale(24),
    color: Colors.White,
  }
  ,
  Estimate : {
    fontFamily: Font.Poppins600,
    fontSize: scale(15),
    color: Colors.White,
    textAlign:'center',
    marginVertical:verticalScale(20)
  }
});
