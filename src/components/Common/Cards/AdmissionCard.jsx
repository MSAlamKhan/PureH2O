import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState}from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import DetailModal from '../CommonModals/DetailModal';

const AdmissionCard = props => {

  console.log('type', props.type)

  const [detailModal, setDetailModal] = useState(false)
  return (
    <View style={styles.CardView}>
      <View style={styles.AdmissionDetails}>
        <View style={styles.ImgView}>
          <Image
            source={props.img}
            style={{height: '100%', width: '100%', borderRadius: scale(21)}}
            resizeMode="contain"
          />
        </View>

        <View style={styles.Info}>
          <Text style={styles.NameStyle} numberOfLines={1} ellipsizeMode="tail">
            {props.school}
          </Text>
          <Text style={styles.UserNameStyle}>{props.address}</Text>
        </View>
      </View>

      <View style={styles.Applied}>
        <View>
          <Text style={styles.AppliedText}>
            Applied on{' '}
            <Text style={[styles.AppliedText, {fontFamily: Font.Poppins600}]}>
              {props.applied}
            </Text>
          </Text>
        </View>

        <TouchableOpacity onPress={()=>setDetailModal(true)}>
          <Text style={styles.DetailText}>Details</Text>
        </TouchableOpacity>
      </View>

      {props.acceptdeny == true ? (
        <View style={styles.ButtonView}>
          <TouchableOpacity onPress={props.type == 'interview'? props.interviewAccept : props.onPressAccept} style={styles.ButtonStyle}>
            <Text style={styles.ButtonText}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={props.onPressDeny} style={styles.ButtonStyle}>
            <Text style={styles.ButtonText}>Deny</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <DetailModal
      isVisible = {detailModal}
      onBackdropPress = {()=>setDetailModal(false)}
      onPressClose = {()=>setDetailModal(false)}
      
      />
    </View>
  );
};

export default AdmissionCard;

const styles = StyleSheet.create({
  CardView: {
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
    backgroundColor: Colors.White,
    borderRadius: scale(14),
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(10),
  },
  AdmissionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: '65%',
  },
  ImgView: {
    height: scale(56),
    width: scale(56),
    borderRadius: scale(21),
    overflow: 'hidden'
  },
  Info: {
    marginLeft: moderateScale(12),
    flex: 1,
  },
  NameStyle: {
    fontFamily: Font.Urbanist500,
    fontSize: scale(16),
    color: Colors.TextBlue,
  },
  UserNameStyle: {
    fontFamily: Font.Urbanist500,
    fontSize: scale(14),
    color: Colors.MoreColor,
  },

  Applied: {
    flexDirection: 'row',
    marginTop: verticalScale(25),
    justifyContent: 'space-between',
  },
  AppliedText: {
    color: Colors.AppliedColor,
    fontFamily: Font.Poppins300,
    fontSize: scale(14),
  },
  DetailText: {
    color: Colors.DetailsColor,
    fontFamily: Font.Poppins500,
    fontSize: scale(14),
  },

  ButtonView: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    justifyContent: 'center',
  },

  ButtonStyle: {
    backgroundColor: Colors.ThemeBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(16),
    padding: scale(10),
    marginHorizontal: moderateScale(10),
  },
  ButtonText: {
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    color: Colors.White,
  },
});
