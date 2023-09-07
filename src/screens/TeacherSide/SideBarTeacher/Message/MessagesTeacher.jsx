import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MessageContainer from '../../../../components/Common/MessageContainer';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import MainHeader from '../../../../components/Headers/MainHeader';
import CustomInput from '../../../../components/Inputs/CustomInput';
import {useForm} from 'react-hook-form';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Font} from '../../../../utils/font';
import NewChatComponent from '../../../../components/Common/NewChatComponent';
import NewChatModal from '../../../../components/Common/CommonModals/NewChatModal';
import GroupChatModal from '../../../../components/Common/CommonModals/GroupChatModal';

const MessagesTeacher = ({navigation}) => {
  const [newChatModal, showNewChatModal] = useState(false);

  const [newGroupModal, showNewGroupModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      description: '',
    },
  });

  const toChatBox = name => {
    navigation.navigate('chatbox', {
      chatName: name,
    });
  };

  allmessage = [
    {
      id: 1,
      name: 'Olivia James',
      message: 'Beautiful morning right?',
      img: require('../../../../assets/image/dpcheck.png'),
      time: '2m ago',
      status: 'Read',
      online: false,
      new: true,
    },
    {
      id: 2,
      name: 'Kayla Moreno',
      message: 'Where ya at?',
      img: require('../../../../assets/image/thomas.png'),
      time: '2m ago',
      status: 'Read',
      online: true,
    },
    {
      id: 3,
      name: 'John Doe',
      message: 'Where ya at?',
      img: require('../../../../assets/image/dp4.png'),
      time: '2m ago',
      status: 'Read',
      online: false,
    },
    {
      id: 4,
      name: 'John Doe',
      message: 'Where ya at?',
      img: require('../../../../assets/image/teacher.png'),
      time: '2m ago',
      status: 'Read',
      online: false,
    },
  ];
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={true}
        moreIcon={true}
        moreIconColor={'transparent'}
        title={'Messages'}
      />

      <View style={GlobalStyle.ph20flex}>
        <View style={{marginBottom: verticalScale(25)}}>
          <CustomInput
            search={true}
            placeholder={'Search Contacts Name'}
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
          <View style={styles.SortBy}>
            <Text style={styles.Alphabet}>A</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.SortText}>Sort</Text>

              <Ionicons
                name={'swap-vertical'}
                size={scale(14)}
                color={Colors.SortArrow}
                style={{marginLeft: moderateScale(5)}}
              />
            </View>
          </View>

          {allmessage?.map((data, index) => {
            return (
              <MessageContainer
                onPress={() => toChatBox(data.name)}
                data={data}
              />
            );
          })}

          <View style={GlobalStyle.Height} />
        </ScrollView>
        <View>
          <NewChatComponent
            onPressGroup={() => showNewGroupModal(true)}
            onPressChat={() => showNewChatModal(true)}
          />
        </View>
      </View>

      <NewChatModal
        isVisible={newChatModal}
        onBackdropPress={() => showNewChatModal(false)}
        onPressClose={() => showNewChatModal(false)}
        newChatClose={() => {
          showNewChatModal(false);
          toChatBox('Anyonymous');
        }}
      />

      <GroupChatModal
        isVisible={newGroupModal}
        onBackdropPress={() => showNewGroupModal(false)}
        onPressClose={() => showNewGroupModal(false)}
        onPressButton ={() =>showNewGroupModal(false) }
      />
    </SafeAreaView>
  );
};

export default MessagesTeacher;

const styles = StyleSheet.create({
  SortBy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },

  Alphabet: {
    color: Colors.AlphabetColor,
    fontSize: scale(15),
    fontFamily: Font.Poppins500,
  },
  SortText: {
    color: Colors.SortArrow,
    fontSize: scale(13),
    fontFamily: Font.Poppins500,
  },
});
