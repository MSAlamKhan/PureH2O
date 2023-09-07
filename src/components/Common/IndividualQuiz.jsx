import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import React, {useState} from 'react';
import SectionCard from '../Cards/SectionCard';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import MainHeader from '../Headers/MainHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import QuizComponent from './QuizComponent';
import CustomButton from '../CustomButton';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';

const IndividualQuiz = () => {
  const [select, setSelect] = useState(false);
  // this screen for the time being
  const data = [
    {
      type: 'Quiz',
      Name: 'ABC School',
      Time: '52 minutes ago',
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

   
  ];

  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader backIcon={true} />

      <View style={GlobalStyle.ph20}>

      <View style={styles.Row}>
        <Image style={styles.Dp} source={require('../../assets/image/dp3.png')} />
        <View style={styles.Active} />
        <View>
          <Text style={styles.Name}>ABC School</Text>
          <Text style={styles.Time}>52 minutes ago</Text>
        </View>
        </View>
        {data.map(data => {
          return data.questions.map(item => {
            return (
              <>
                <TouchableOpacity>
                  <Text style={styles.QuesText}>{item.ques}</Text>
                </TouchableOpacity>
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
                {/* <CustomButton
                  containerRestyle={{backgroundColor: '#2874F7'}}
                  title={'Submit'}
                //   onPress={       }
                /> */}
              </>
            );
          });
        })}
      </View>
    </SafeAreaView>
  );
};

export default IndividualQuiz;

const styles = StyleSheet.create({
  QuesText: {
    fontFamily: Font.Poppins600,
    fontSize: scale(18),
    color: Colors.Black,
    marginVertical: verticalScale(15),
    marginTop: verticalScale(40),
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20)
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
  Dp: {
    width: scale(40),
    height: scale(40),
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

});
