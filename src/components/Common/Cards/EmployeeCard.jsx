import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../CustomButton';
import {FAB, Tooltip} from '@rneui/themed';
import OptionToolTip from './OptionToolTip';
import ExperianceCard from '../../Cards/ExperianceCard';
import {useNavigation} from '@react-navigation/native';

const EmployeeCard = ({data, experience, ...props}) => {
  const [select, setSelected] = useState(false);

  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const handleSelect = () => {
    setSelected(true);
  };
  return (
    <>
      <View style={[styles.CardView, props.RestyleBox]}>
        <View
          style={[
            styles.ProfileDetails,
            {maxWidth: props.type == 'recruiter' ? '95%' : '65%'},
          ]}>
          <View style={styles.ImgView}>
            <Image
              source={data.img}
              style={{height: '100%', width: '100%', borderRadius: scale(48)}}
              resizeMode="contain"
            />

            <View style={styles.StatusDot} />
          </View>

          <View style={styles.Info}>
            <View>
              <Text style={styles.NameStyle} numberOfLines={1}>
                {data.name}
              </Text>
              <Text style={styles.UserNameStyle}>{data.username}</Text>
            </View>
          </View>
        </View>
        {props.connectMore ? (
          <View style={styles.Connect}>
            <CustomButton
              onPress={props.newChat ? props.newChat : handleSelect}
              title={select ? props.selected : props.option}
              textStyle={{
                fontFamily: Font.Urbanist500,
                fontSize: scale(14),
                color: select ? Colors.White : Colors.White,
              }}
              containerRestyle={{
                borderRadius: scale(8),
                paddingHorizontal: moderateScale(15),
                height: verticalScale(30),
                left: scale(4),
                backgroundColor: select
                  ? Colors.ThemeBlue
                  : Colors.ThemeBlue,
              }}
            />

            <View style={{top: 3}}>
              <Tooltip
                backgroundColor={'transparent'}
                visible={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                popover={
                  <OptionToolTip
                    OptionOne={'View Profile'}
                    OptionTwo={'Connect'}
                    OptionThree={'Message'}
                    onPress={() =>
                      navigation.navigate('viewotherprofile', {
                        type: data.type,
                      })
                    }
                    onPressThree={()=>navigation.navigate('chatbox',{chatName: data.name})}
                  />
                }>
                <Feather
                  // onPress={openModal}
                  name={'more-vertical'}
                  size={scale(20)}
                  color={Colors.MoreColor}
                  style={{
                    marginLeft: scale(10),
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                />
              </Tooltip>
            </View>
          </View>
        ) : null}

        {props.type == 'staff' ? (
          <TouchableOpacity onPress={props.onPressExpand} style={styles.Plus}>
            <Entypo name="plus" size={scale(20)} color={Colors.ThemeBlue} />
          </TouchableOpacity>
        ) : null}
      </View>

      {props.expandProfile == data.id ? (
        <View>
          <View>
            <Text style={styles.Subject}>Subject Name: Mathematics</Text>
            <Text style={styles.Heading}>Experience</Text>
            {experience.map((experience, index) => {
              return (
                <View>
                  <ExperianceCard data={experience} />
                </View>
              );
            })}
          </View>
        </View>
      ) : null}
    </>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: verticalScale(15),
    backgroundColor: '#F3F6FF',
    height: verticalScale(80),
  },
  Connect: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.35,
  },
  ProfileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: '65%',
  },
  ImgView: {
    height: scale(48),
    width: scale(48),
    borderRadius: scale(48),
  },
  StatusDot: {
    width: scale(12),
    height: scale(12),
    position: 'absolute',
    borderRadius: scale(30),
    bottom: 0,
    right: 2,
    borderWidth: 1,
    borderColor: Colors.White,
    backgroundColor: Colors.StatusDot,
  },

  Plus: {
    // alignItems: 'center',
    justifyContent: 'center',
    bottom: verticalScale(5),
  },

  Info: {
    marginLeft: moderateScale(12),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NameStyle: {
    fontFamily: Font.Urbanist500,
    fontSize: scale(16),
    color: Colors.TextBlue,
  },
  UserNameStyle: {
    fontFamily: Font.Urbanist600,
    fontSize: scale(14),
    color: Colors.UserNameColor,
  },
  Heading: {
    marginTop: verticalScale(12),
    color: Colors.Black,
    fontFamily: Font.Poppins700,
    fontSize: scale(18),
  },

  Subject: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize: scale(14),
  },
});
