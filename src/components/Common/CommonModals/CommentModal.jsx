import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TypeBoxComponent from '../TypeBoxComponent';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
const CommentModal = props => {
  return (
    <ReactNativeModal
      isVisible={props.isVisible}
      backdropOpacity={0.8}
      onBackButtonPress={props.onBackButtonPress}
      onBackdropPress={props.onBackdropPress}
      style={[styles.modal]}>
      <View style={styles.ModalContainer}>
        <Text style={styles.Heading}>Comments</Text>
        <ScrollView >



          <View style={{marginVertical: verticalScale(10)}}>
            <View style={GlobalStyle.Row}>
              <View style={styles.ImageBox}>
                <Image
                  source={require('../../../assets/image/thomas.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: scale(30),
                  }}
                  resizeMode="contain"
                />
              </View>
                 

              <View style={styles.OtherBox}>
                <Text style={styles.Username}>Jimmy Anderson</Text>
                <Text style={styles.Message}>Very insightful</Text>
              </View>


            </View>
            <Text style={styles.OtherTime}>12:01 pm</Text>
              
        
          </View>

       

        


         
        </ScrollView>

        <View style={styles.TypeView}>
          <TypeBoxComponent
            RestyleInput={{borderWidth: 1, borderColor: Colors.InputContainer}}
            comment={true}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: scale(0),
  },

  ModalContainer: {
    backgroundColor: Colors.White,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    height: '65%',
  },

  Heading: {
    color: Colors.Black,
    fontSize: scale(20),
    fontFamily: Font.Poppins700,
    textAlign: 'left',
    marginBottom:verticalScale(10)

  },
  ImageBox: {
    borderRadius: scale(30),
    height: scale(35),
    width: scale(35),
    alignItems: 'center',
    backgroundColor: Colors.GreyBox,
    // alignSelf: 'baseline',
    overflow: 'hidden',
  },
  OtherTime: {
    color: Colors.MessageTime,
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    
  },
  TypeView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(0),

  },
  OtherBox: {
    backgroundColor: Colors.OtherBox,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: scale(18),
    marginLeft: moderateScale(5),
  },
  Message: {
    color: Colors.OtherMsg,
    fontSize: scale(13),
    fontFamily: Font.Poppins500,
    textAlign: 'left',
  },

  Username: {
    color: Colors.TextBlue,
    fontSize: scale(11),
    fontFamily: Font.Poppins700,
    textAlign: 'left',
  },
});
