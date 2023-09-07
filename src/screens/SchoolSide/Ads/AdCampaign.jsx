import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {Colors} from '../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import MainHeader from '../../../components/Headers/MainHeader';
import PostBoostCard from '../../../components/School/Cards/PostBoostCard';
import CustomButton from '../../../components/CustomButton';

const AdCampaign = ({navigation}) => {
  post_boost_data = [
    {
      id: 1,
      publishDate: 'Published on Jun 11 by ABC School',
      post: 'A simple and easy school admission process for the beginning of your childs most progressive years. Submit Online Application',
      img: require('../../../assets/image/admission.png'),
    },

    {
      id: 2,
      publishDate: 'Published on Jun 11 by ABC School',
      post: 'A simple and easy school admission process for the beginning of your childs most progressive years. Submit Online Application',
      img: require('../../../assets/image/admission.png'),
    },
  ];
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

      <View style={GlobalStyle.ph20flex}>
        <Text style={styles.Heading}>Select a post to boost</Text>

        <ScrollView>
          <View style={{marginTop: verticalScale(20)}}>
            {post_boost_data.map((data, index) => {
              return <PostBoostCard data={data} />;
            })}
          </View>
        </ScrollView>

        <CustomButton
          title={'Publish'}
          containerRestyle={{
            backgroundColor: Colors.PublishButton,
            borderRadius: scale(30),
            marginBottom: verticalScale(20),
            marginTop: verticalScale(30),
          }}
          textStyle = {{color : Colors.SignInText}}
          onPress={()=>navigation.navigate('schooladdnewcampaign')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AdCampaign;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: Font.Poppins700,
    fontSize: scale(24),
    color: Colors.White,
  },
});
