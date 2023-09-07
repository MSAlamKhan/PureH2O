import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import Feather from 'react-native-vector-icons/Feather';
import CustomInput from '../../Inputs/CustomInput';
import {useForm, Controller} from 'react-hook-form';
import CustomButton from '../../CustomButton';

const AddCard = (props) => {
  const {control, handleSubmit} = useForm();

  // Custom function to format card number with gaps after every 4 characters
  const formatCardNumber = text => {
    if (text.length <= 16) {
      text = text.replace(/[^\d]/g, ''); // Remove non-numeric characters
      text = text.replace(/(.{4})/g, '$1 '); // Add a space after every 4 characters
    }
    return text;
  };
  return (
    <View style={styles.MainView}>
      <Text style={styles.WhiteText}>Card Number</Text>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.RestyleText}
            onChangeText={text => {
              const formattedText = formatCardNumber(text);
              onChange(formattedText);
            }}
            onBlur={onBlur}
            fontSize={scale(20)}
            value={value}
            maxLength={19} // To limit to 19 characters (including the spaces)
          />
        )}
        name="creditCardNumber"
        defaultValue=""
      />

      <View style={GlobalStyle.RowBetween}>
        <View style={{}}>
          <Text style={styles.WhiteText}>Exp Date</Text>
          <CustomInput
            boxStyle={styles.InputBoxStyle}
            fontSize={scale(14)}
            control={control}
            maxLength={5}
            restyle={styles.RestyleText}
            name="exp_date"
            rules={{
              required: 'Exp Date is required',
            }}
          />
        </View>

        <View>
          <Text style={styles.WhiteText}>CVV</Text>
          <CustomInput
            boxStyle={styles.InputBoxStyle}
            fontSize={scale(14)}
            control={control}
            maxLength={3}
            keyboardType={'numeric'}
            restyle={styles.RestyleText}
            name="cvv"
            rules={{
              required: 'CVV is required',
            }}
          />
        </View>
      </View>

      <Text style={[styles.WhiteText, {marginTop: verticalScale(10)}]}>
        Card Holder Name
      </Text>
      <CustomInput
        boxStyle={styles.InputBoxStyle}
        fontSize={scale(14)}
        control={control}
        restyle={styles.RestyleText}
        name="name"
        rules={{
          required: 'Name is required',
        }}
      />

      <CustomButton
        title={'Publish'}
        containerRestyle={{
          backgroundColor: Colors.PublishButton,
          borderRadius: scale(30),
          marginTop: verticalScale(25),
          marginTop: 0,
        }}
        textStyle = {{color : Colors.SignInText}}

        onPress={props.onSubmit}
      />
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  MainView: {
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
  },
  InputBoxStyle: {
    backgroundColor: 'transparent',
    height: verticalScale(40),
    borderColor: 'transparent',
    paddingHorizontal: 0,
    textAlign: 'center',
    marginTop: 0,
  },
  RestyleText: {
    color: Colors.Black,
    fontFamily: Font.Gilroy500,
  },
  WhiteText: {
    fontFamily: Font.Poppins600,
    color: Colors.White,
    fontSize: scale(16),
  },

  CardNumView: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
});
