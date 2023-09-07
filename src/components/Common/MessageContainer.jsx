import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import DeleteConvoModal from './CommonModals/DeleteConvoModal';
const MessageContainer = ({data, ...props}) => {
  const [deleteModal, showDeleteModal] = useState(false);

  return (
    <View style={styles.MainView}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        onLongPress={() => showDeleteModal(true)}
        style={GlobalStyle.Row}>

        <View style={{}}>
          <View style={styles.ProfileView}>
            <Image
              source={data.img}
              resizeMode="contain"
              style={{height: '100%', width: '100%', borderRadius: scale(8)}}
            />
          </View>
        </View>
        {data.online == true ? <View style={styles.StatusDot} /> : null}

        <View  style={styles.DetailsView}>
          <View style={{marginTop: verticalScale(10)}}>
            <View style={GlobalStyle.Row}>
              {data.new ? <View style={GlobalStyle.ImpDot} /> : null}
              <Text
                style={[
                  styles.Name,
                  {
                    fontFamily: data.new ? Font.Urbanist700 : Font.Urbanist500,
                    marginLeft: data.new ? moderateScale(5) : 0,
                  },
                ]}>
                {data.name}
              </Text>
            </View>
            <Text style={styles.Message}>{data.message}</Text>
          </View>

          <View
            style={[
              GlobalStyle.RowBetween,
              {marginTop: verticalScale(10), alignItems: 'center'},
            ]}>
            <Text style={styles.TimeText}>{data.time}</Text>

            <View style={styles.StatusView}>
              <Text style={styles.StatusText}>{data.status}</Text>

              <Entypo
                name={'check'}
                size={scale(14)}
                color={Colors.ThemeBlue}
                style={{marginLeft: moderateScale(2)}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <DeleteConvoModal
        isVisible={deleteModal}
        onBackdropPress={() => showDeleteModal(false)}
        onDelete = {() => showDeleteModal(false)}
      />
    </View>
  );
};

export default MessageContainer;

const styles = StyleSheet.create({
  MainView: {
    marginTop: verticalScale(15),
  },
  ProfileView: {
    borderRadius: scale(8),
    height: scale(58),
    width: scale(58),
    alignItems: 'center',
  },

  DetailsView: {
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    // alignItems: 'center',
    flex: 1,
  },

  StatusDot: {
    borderWidth: 3,
    borderColor: Colors.White,
    backgroundColor: Colors.Green,
    borderRadius: scale(20),
    height: scale(15),
    width: scale(15),
    position: 'absolute',
    left: -3,
    bottom: 4,
  },
  Name: {
    fontFamily: Font.Urbanist500,
    color: Colors.Black,
    fontSize: scale(16),
  },
  Message: {
    fontFamily: Font.Urbanist500,
    color: Colors.Black,
    fontSize: scale(14),
    marginTop: verticalScale(2),
  },
  TimeText: {
    color: Colors.TimeText,
    fontSize: scale(14),
    fontFamily: Font.Urbanist400,
  },

  StatusView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusText: {
    color: Colors.TextBlue,
    fontSize: scale(14),
    fontFamily: Font.Urbanist400,
  },
});
