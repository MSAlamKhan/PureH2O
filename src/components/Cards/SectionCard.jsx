import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageView from 'react-native-image-viewing';

import {Like} from '../Like';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import LetterModal from '../Common/CommonModals/LetterModal';
import QuizComponent from '../Common/QuizComponent';
import CustomButton from '../CustomButton';
import SaveModal from '../Modal/SuccessModal';
import SuccessModal from '../Modal/SuccessModal';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import CommentModal from '../Common/CommonModals/CommentModal';
import LikeDetailModal from '../Common/CommonModals/LikeDetailModal';
import {Tooltip} from '@rneui/themed';
import OptionToolTip from '../Common/Cards/OptionToolTip';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const SectionCard = ({data, ...props}) => {
  const navigation = useNavigation();

  // Modal States
  const [likeModal, showLikeModal] = useState(false);
  const [commentModal, showCommentModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [open, setOpen] = useState(false);

  const individualPost = () => {
    navigation.navigate('individualpost', {
      data: data,
    });
  };

  const handleSetIsVisible = index => {
    setImageIndex(index);
    setIsVisible(true);
  };

  const decide = () => {
    individualPost();
  };

  const onSubmit = () => {
    setSaveModal(true);
  };

  const [saveModal, setSaveModal] = useState(false);
  const closeBothModal = () => {
    closeModal();
    setSaveModal(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(false);
  console.log('select', select);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Image style={styles.Dp} source={data.avatar} />
        <View style={styles.Active} />
        <View style={[GlobalStyle.RowBetween,{flex:1}]}>

          <View>

          <Text style={styles.Name}>{data.Name}</Text>
          <Text style={styles.Time}>{data.Time}</Text>
          </View>
       
        {props.moreOption == true ? (
          <Tooltip
            backgroundColor={'transparent'}
            visible={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            popover={
              <OptionToolTip
                OptionOne={'View Profile'}
                OptionTwo={'Message'}
                onPress={() =>
                  navigation.navigate('viewotherprofile', {
                    type: data.type,
                  })
                }
                onPressTwo={() =>
                  navigation.navigate('chatbox', {
                    chatName: data.Name,
                  })
                }
                restylePopover = {{height:verticalScale(75), paddingHorizontal: moderateScale(15)}}
              />
            }>
            <View style={{}}>
              <Feather
                name={'more-vertical'}
                size={scale(20)}
                color={'#626262'}
              />
            </View>
          </Tooltip>
        ) : null}
         </View>

      </View>
      {data.post_type == 'Quiz' ? (
        data.questions.map(item => {
          return (
            <>
              <Text style={styles.QuesText}>{item.ques}</Text>
              {item.options.map((item2, index) => {
                console.log('index', index);
                return (
                  <>
                    <QuizComponent
                      key={index}
                      option={item2.opt}
                      onPress={() => setSelect(item2.opt)}
                      select={select}
                      item={item2.opt}
                    />
                  </>
                );
              })}
              <CustomButton
                containerRestyle={{backgroundColor: '#2874F7'}}
                title={'Submit'}
                onPress={
                  select == item.ans
                    ? props.openAchieveModal
                    : props.openErrorModal
                }
              />
            </>
          );
        })
      ) : (
        <>
          <View style={{marginTop: verticalScale(15)}}>
            <Text style={styles.Text}>{data.LongText}</Text>
          </View>
          <View style={styles.ImageBox}>
            <TouchableOpacity activeOpacity={0.8} onPress={decide}>
              <ImageBackground
                resizeMode={props.resizeMode ? props.resizeMode : 'cover'}
                style={[
                  styles.Image,
                  {justifyContent: 'center', alignItems: 'center'},
                ]}
                source={data.source}>
                <TouchableOpacity
                  onPress={() => console.log('first')}></TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
            {data.post_type == 'School' ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: moderateScale(15),
                  marginTop: verticalScale(10),
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.AdmissionText}>Apply for admission</Text>
                </View>
                <TouchableOpacity onPress={openModal} style={styles.ApplyView}>
                  <Text style={styles.ApplyText}>Apply Now</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: data.post_type == 'School' ? verticalScale(30) : null,
            }}>
            <View style={styles.Row}>
              <View style={styles.Row}>
                <Like />
                <TouchableOpacity onPress={() => showLikeModal(true)}>
                  <Text style={styles.Number}>{data.Number}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Row}>
                <TouchableOpacity onPress={() => showCommentModal(true)}>
                  <FontAwesome
                    name={'comment-o'}
                    color={Colors.ThemeBlue}
                    size={20}
                    style={{marginLeft: moderateScale(25)}}
                  />
                </TouchableOpacity>
                <Text style={styles.Number}>{data.Number}</Text>
              </View>
            </View>
          </View>
        </>
      )}
      {/* All Modals */}

      <CommentModal
        isVisible={commentModal}
        onBackdropPress={() => showCommentModal(false)}
        onBackButtonPress={() => showCommentModal(false)}
      />

      <LikeDetailModal
        isVisible={likeModal}
        heading={'Likes'}
        onBackdropPress={() => showLikeModal(false)}
        closeModal={() => showLikeModal(false)}
        onPressClose={() => showLikeModal(false)}
      />

      {/* <ImageView
        images={ImagesExamples}
        imageIndex={currentImageIndex}
        presentationStyle="fullScreen"
        visible={imageBox}
        onRequestClose={() => setImageBox(false)}
        onImageIndexChange={index => setImageIndex(index)}
        FooterComponent={() => (
          <View>
            <Text>{`${currentImageIndex + 1}/${data.Images.length}`}</Text>
          </View>
        )}/>  */}

      <LetterModal
        isVisible={modalVisible}
        heading={'Application'}
        question={'Write an application?'}
        onBackdropPress={closeModal}
        closeModal={closeModal}
        onPressClose={closeModal}
        onPressSubmit={onSubmit}
      />

      <SuccessModal
        visible={saveModal}
        onClose={closeBothModal}
        buttonPress={closeBothModal}
        status={'Application Submission'}
        subheading={
          'Your submission has been sent, changes are reflected real time.'
        }
        source={require('../../assets/image/save.png')}
        buttonTitle={'Continue'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: verticalScale(30),
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.PostBottomColor,
    paddingBottom: moderateVerticalScale(20),
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Active: {
    backgroundColor: Colors.Green,
    borderRadius: 100,
    height: scale(12),
    width: scale(12),
    borderWidth: 1,
    borderColor: Colors.White,
    marginLeft: scale(-10),
    marginRight: scale(20),
    alignSelf: 'flex-end',
  },
  AdmissionText: {
    color: Colors.ThemeBlue,
    fontFamily: Font.Poppins800,
    fontSize: scale(15),
  },
  ApplyText: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize: scale(12),
    textAlign: 'center',
  },
  Name: {
    color: Colors.PostUserName,
    fontFamily: Font.Poppins500,
    fontSize: scale(15),
  },
  Time: {
    color: Colors.Grey,
    fontFamily: Font.Poppins400,
    fontSize: scale(12),
  },
  ImageBox: {
    width: W * 0.95,
    height: H * 0.3,
    marginVertical: verticalScale(10),
    alignSelf: 'center',
  },
  Image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },

  ApplyView: {
    borderRadius: scale(20),
    paddingHorizontal: moderateScale(10),
    backgroundColor: Colors.White,
    alignItems: 'center',
  },

  Text: {
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    color: Colors.PostDescText,
    marginVertical: verticalScale(15),
  },
  heartImage: {
    width: scale(22),
    height: scale(22),
    marginRight: scale(8),
  },
  Number: {
    fontFamily: Font.Poppins400,
    fontSize: scale(12),
    color: Colors.ThemeBlue,
    marginLeft: scale(10),
  },
  Dp: {
    width: scale(40),
    height: scale(40),
  },

  QuesText: {
    fontFamily: Font.Poppins600,
    fontSize: scale(18),
    color: Colors.Black,
    marginVertical: verticalScale(15),
  },
});

export default SectionCard;
