import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import CustomButton from '../CustomButton';
import Feather from 'react-native-vector-icons/Feather';
import {Font} from '../../utils/font';
import OptionsModal from './CommonModals/OptionsModal';
import {SwipeListView} from 'react-native-swipe-list-view';
import LinearGradient from 'react-native-linear-gradient';
import LetterModal from './CommonModals/LetterModal';
import {useForm} from 'react-hook-form';
import {Tooltip} from '@rneui/themed';
import OptionToolTip from './Cards/OptionToolTip';
import { useNavigation } from '@react-navigation/native';

const ConnectComponent = ({data, ...props}) => {

  const navigation = useNavigation()
  const [open, setOpen] = useState(false);


  return (
    <View style={styles.MainView}>
      <View style={styles.CardView}>
        <View style={styles.ProfileDetails}>
          <View style={styles.ImgView}>
            <Image
              source={data.img}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />

            <View style={styles.StatusDot} />
          </View>

          <View style={styles.Info}>
            <Text
              style={styles.NameStyle}
              numberOfLines={1}
              ellipsizeMode="tail">
              {data.name}
            </Text>
            <Text style={styles.UserNameStyle}>{data.username}</Text>
          </View>
        </View>

        <View style={styles.Connect}>
          <CustomButton
            title={props.menu == 'myconnects' ? 'Message' : 'Connect'}
            textStyle={{fontFamily: Font.Urbanist500, fontSize: scale(14)}}
            containerRestyle={{
              borderRadius: scale(8),
              paddingHorizontal: moderateScale(15),
              height: verticalScale(30),
              left: scale(4),
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
                  onPress = {()=>navigation.navigate('viewotherprofile',{
                    type: data.type
                  })}

                  onPressThree = {()=>navigation.navigate('chatbox',{
                    chatName: data.name
                  })}
                />
              }>
              <Feather
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
      </View>

    </View>
  );
};

export default ConnectComponent;

const styles = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: verticalScale(15),
    backgroundColor: '#F3F6FF',
    height: verticalScale(80),
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

  Connect: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.35,
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
    color: Colors.UserNameColor,
  },

  Bar: {
    backgroundColor: Colors.SignRegContainer,
    flexDirection: 'row',
    borderRadius: scale(8),
    padding: verticalScale(10),
  },
  MenuBox: {
    justifyContent: 'center',
    height: verticalScale(40),
    alignItems: 'center',
    width: '50%',
    borderRadius: scale(8),
  },

  heading: {
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },
  Read: {
    fontFamily: Font.Poppins400,
    fontSize: scale(11),
    color: Colors.White,
  },
  rowBack: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '7%',
  },
  IconBox: {
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
