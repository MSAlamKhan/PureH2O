import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../../components/Headers/MainHeader';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {Font} from '../../../utils/font';
import CustomInput from '../../../components/Inputs/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {useForm} from 'react-hook-form';
import SuccessModal from '../../../components/Modal/SuccessModal';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import { SelectList } from 'react-native-dropdown-select-list';
import Entypo from 'react-native-vector-icons/Entypo';

const SchoolQuizPost = ({navigation}) => {

  const [SelectType, setSelectType] = useState(false);
  const [type, setType] = useState();
  const [items, setItems] = useState([
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
  ]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      description: '',
    },
  });

  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSubmit = data => {
    console.log('data', data.question);
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={true}
        title={'Create Post'}
        moreIcon={'true'}
        moreIconColor={'transparent'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.ph20}>
          <Text style={styles.Title}>Question</Text>

          <View style={styles.QuestionView}>
            <Text style={styles.SubHeading}>Write a Question</Text>

            <CustomInput
              multiline={true}
              wordcount={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                borderColor: Colors.White,
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              control={control}
              name="question"
              rules={{
                required: 'Question is required',
              }}
            />
          </View>

          <View style={styles.AddOption}>
            <Text style={styles.SubHeading}>Add Options:</Text>
            <CustomInput
              placeholder={'Option 1'}
              multiline={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                borderColor: Colors.White,
                alignItems: 'flex-start',
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              control={control}
              name="ques_one"
              rules={{
                required: 'Question is required',
              }}
            />

            <CustomInput
              placeholder={'Option 2'}
              multiline={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                borderColor: Colors.White,
                alignItems: 'flex-start',
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              control={control}
              name="ques_two"
              rules={{
                required: 'Question is required',
              }}
            />

            <CustomInput
              placeholder={'Option 3'}
              multiline={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                borderColor: Colors.White,
                alignItems: 'flex-start',
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              control={control}
              name="ques_three"
              rules={{
                required: 'Question is required',
              }}
            />

            <CustomInput
              placeholder={'Option 4'}
              multiline={true}
              boxStyle={{
                paddingHorizontal: moderateScale(0),
                backgroundColor: Colors.White,
                borderRadius: scale(30),
                borderColor: Colors.White,
                alignItems: 'flex-start',
              }}
              restyle={{paddingHorizontal: moderateScale(20)}}
              fontSize={scale(16)}
              size={scale(24)}
              control={control}
              name="ques_four"
              rules={{
                required: 'Question is required',
              }}
            />
             <SelectList
              placeholder="Select Answer"
              arrowicon={
                <Entypo
                  name="chevron-down"
                  size={scale(18)}
                  color={Colors.Black}
                />
              }
              closeicon={
                <Entypo
                  name="chevron-up"
                  size={scale(18)}
                  color={Colors.Black}
                />
              }
              dropdownStyles={GlobalStyle.dropdownStyles}
              dropdownItemStyles={GlobalStyle.dropdownItemStyles}
              boxStyles={GlobalStyle.boxStyles}
              dropdownTextStyles={GlobalStyle.dropdownTextStyles}
              inputStyles={GlobalStyle.inputStyles}
              search={false}
              setSelected={val => setType(val)}
              data={items}
              save="value"
            />

        
          </View>

          <View style={styles.ButtonView}>
            <CustomButton
              title={'Publish'}
              textStyle = {{color: '#838FA0'}}
              containerRestyle={{
                backgroundColor: Colors.PublishButton,
                borderRadius: scale(30),
                marginBottom: verticalScale(20),
                marginTop: 0,
              }}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>

      <SuccessModal
        buttonPress={closeModal}
        visible={modalVisible}
        onClose={closeModal}
        status={'Successful'}
        subheading={
          'Your admission post is published! If you want to do changes go to your profile and do changes'
        }
        source={require('../../../assets/image/save.png')}
        buttonTitle={'Got it'}
      />
    </SafeAreaView>
  );
};

export default SchoolQuizPost;

const styles = StyleSheet.create({
  Title: {
    textAlign: 'center',
    fontFamily: Font.Poppins700,
    fontSize: scale(20),
    color: Colors.Black,
    marginTop: verticalScale(20),
  },

  QuestionView: {
    marginTop: verticalScale(30),
  },
  AddOption: {
    marginVertical: verticalScale(30),
  },
  SubHeading: {
    fontFamily: Font.Poppins600,
    fontSize: scale(17),
    color: Colors.Black,
  },
});
