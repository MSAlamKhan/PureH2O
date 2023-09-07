import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import CustomInput from '../Inputs/CustomInput';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import {Colors} from '../../utils/Colors';

const TypeBoxComponent = (props) => {
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
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? moderateScale(100) : verticalScale(40)}
    //   style={styles.container}
    //   >
    <View style={[styles.Main]}>
      <CustomInput
        send={true}
        size={scale(20)}
        placeholder={'Type something..'}
        multiline={true}
        boxStyle={[{
          paddingHorizontal: moderateScale(0),
          backgroundColor: Colors.White,
          borderRadius: scale(30),
          maxHeight: verticalScale(100),
          borderColor: Colors.White,
          alignItems: 'flex-start',
          width: null,
          flex: 1,
          marginTop: 0,
        }, props.RestyleInput]}
        restyle={{paddingHorizontal: moderateScale(20)}}
        fontSize={scale(16)}
        control={control}
        name="message"
      />
      {props.comment ? null : (
        <TouchableOpacity style={[styles.Box, {marginLeft: moderateScale(10)}]}>
          <Feather name={'mic'} color={'#18516E'} size={scale(20)} />
        </TouchableOpacity>
      )}

      {props.comment ? null : (
        <TouchableOpacity
          style={[styles.Box, {backgroundColor: 'transparent'}]}>
          <FontAwesome5 name={'smile'} color={'#18516E'} size={scale(24)} />
        </TouchableOpacity>
      )}
    </View>
    // </KeyboardAvoidingView>
  );
};

export default TypeBoxComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Main: {
    flexDirection: 'row',
    margin: 0,
    justifyContent: 'center',
  },

  Box: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(40),
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    justifyContent: 'center',
  },
});
