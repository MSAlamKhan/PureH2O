import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import MainHeader from '../../../components/Headers/MainHeader';
import {Colors} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import DebitCard from '../../../components/School/Cards/DebitCard';
import AddCard from '../../../components/School/Cards/AddCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import { useForm} from 'react-hook-form';
const SchoolPaymentMethod = () => {

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) =>{
    console.log('data', data)
    setSelect(false)
  }
  
  const [select, setSelect] = useState(false);
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

      <View style={[GlobalStyle.ph20flex, {marginTop: verticalScale(20)}]}>
        <DebitCard
          lastFour={'2966'}
          expDate={'10/22'}
          cvv={'888'}
          name={'Bilal Raza'}
        />

        <View
          style={[
            GlobalStyle.RowBetween,
            {marginTop: verticalScale(30), marginBottom: verticalScale(15)},
          ]}>
          <FontAwesome
            name={'credit-card-alt'}
            color={Colors.FeesBox}
            size={scale(20)}
          />

          <Text style={styles.WhiteText}>Credit/Debit Card</Text>

          <TouchableOpacity
            onPress={() => setSelect(!select)}
            style={styles.WhiteBox}>
            <Text style={styles.ViewText}>
              {select ? <Text>Cancel </Text> : <Text>New Card</Text>}
            </Text>
            <MaterialIcons
              name={'keyboard-arrow-right'}
              color={Colors.TextDarkGrey}
              size={scale(18)}
            />
          </TouchableOpacity>
        </View>
        {select ? (
          <>
            <AddCard onSubmit = {handleSubmit(onSubmit)} /> 
            
           
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default SchoolPaymentMethod;

const styles = StyleSheet.create({
  WhiteText: {
    fontFamily: Font.Poppins600,
    color: Colors.White,
    fontSize: scale(18),
  },

  WhiteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scale(28),
    width: scale(100),
    backgroundColor: Colors.White,
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewText: {
    color: Colors.Black,
    fontFamily: Font.Poppins500,
    fontSize: scale(12),
  },
});
