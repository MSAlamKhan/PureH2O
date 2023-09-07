import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PostComponent from '../../../components/PostComponent';
import MainHeader from '../../../components/Headers/MainHeader';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import SuccessModal from '../../../components/Modal/SuccessModal';

const SchoolAdmissionPost = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log('modalVisible', modalVisible)

  closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        title={'Create Post'}
        backIcon={true}
        moreIcon={true}
        moreIconColor={'transparent'}
      />
      <ScrollView>
        <View style={GlobalStyle.ph20flex}>
          <PostComponent title={'Opening New Event'} type={'admission'}
          onSubmit = {()=>setModalVisible(true)}
          />
        </View>
        <SuccessModal
          buttonPress={closeModal}
          visible={modalVisible}
          onClose={closeModal}
          status={'Successful'}
          subheading={
            'Your Event post is published! If you want to do changes go to your profile and do changes'
          }
          source={require('../../../assets/image/save.png')}
          buttonTitle={'Got it'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SchoolAdmissionPost;

const styles = StyleSheet.create({});
