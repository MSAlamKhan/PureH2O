import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Colors} from '../../utils/Colors';
import HomeHeader from '../../components/Headers/HomeHeader';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import ProfileComplete from '../../components/Progress/ProfileComplete';
import BottomTab from '../../navigation/BottomTab';
import {useFocusEffect} from '@react-navigation/native';
import {verticalScale} from 'react-native-size-matters';
import SectionCard from '../../components/Cards/SectionCard';
import SuccessModal from '../../components/Modal/SuccessModal';
import ErrorModal from '../../components/Modal/ErrorModal';
import {useForm} from 'react-hook-form';
import {getMyDetails} from '../../redux/actions/AuthAction';
import {useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const [achieveModal, setAchieveModal] = useState(false);

  const [errorModal, setErrorModal] = useState(false);

  const openAchieveModal = () => {
    setAchieveModal(true);
  };

  const openErrorModal = () => {
    setErrorModal(true);
  };

  const closeAchieveModal = () => {
    setAchieveModal(false);
  };
  const SectionItem = [
    {
      post_type: 'Normal',
      Name: 'Prisha Mclaughlin',
      Time: '52 minute ago',
      source: require('../../assets/image/section1.png'),
      LongText:
        'One good thing about music, when it hits you, you feel no pain. ❤️',
      Number: '14',
      avatar: require('../../assets/image/dp2.png'),
      type: 'student',
    },
    {
      post_type: 'School',
      Name: 'ABC School',
      Time: '52 minutes ago',
      source: require('../../assets/image/admission.png'),
      LongText:
        'A simple and easy school admission process for the beginning of your childs most progressive years. Submit Online Application',
      Number: '14',
      avatar: require('../../assets/image/dp3.png'),
      type: 'school',
    },

    {
      post_type: 'Quiz',
      Name: 'ABC School',
      Time: '52 minutes ago',
      type: 'school',
      avatar: require('../../assets/image/dp3.png'),
      questions: [
        {
          ques: 'Who created this app?',
          ans: 'Bilal Raza',
          options: [
            {opt: 'Bilal Raza'},
            {opt: 'Nelson Mandela'},
            {opt: 'Count Olaf'},
            {opt: 'Shahid Afridi'},
          ],
        },
      ],
    },

    // {
    //   type: 'Event',
    //   Name: 'ABC School',
    //   Time: '52 minutes ago',
    //   avatar: require('../../assets/image/dp3.png'),
    //   LongText:
    //     'Had a great weekend with the students at the New York Zoo, teachers were very helpful in assisting the kids about diferent kinds of animals. We also visited the Aquarium ;). ',
    //   source: require('../../assets/image/admission.png'),
    //   source2: require('../../assets/image/admission.png'),
    // },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.HomeBackground}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <HomeHeader welcome={'Hello, Jimmy'} screename={'Feed'} />
      <ScrollView>
        <View style={GlobalStyle.ph20}>
          <View style={{marginTop: 10}}>
            <ProfileComplete progress={0.65} text={true} />
          </View>

          <View style={{marginTop: verticalScale(20)}}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={SectionItem}
              renderItem={({item}) => {
                return (
                  <SectionCard
                    data={item}
                    openAchieveModal={openAchieveModal}
                    openErrorModal={openErrorModal}
                    moreOption={true}
                  />
                );
              }}
            />
          </View>
        </View>
        <View style={{height: verticalScale(85)}} />
        <SuccessModal
          buttonPress={closeAchieveModal}
          visible={achieveModal}
          onClose={closeAchieveModal}
          status={'Congratulations'}
          subheading={
            'Congratulations, Your Answer is correct and your position is 92.'
          }
          source={require('../../assets/image/crown.png')}
          buttonTitle={'Continue'}
          bgColor="#2874F7"
        />

        <ErrorModal
          onBackButtonPress={() => setErrorModal(false)}
          onBackdropPress={() => setErrorModal(false)}
          visible={errorModal}
          message={'Your answer is wrong!'}
        />
      </ScrollView>
      <BottomTab home />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
