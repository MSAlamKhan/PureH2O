import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../../../components/Headers/MainHeader';
import {Colors} from '../../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import MessageDisplay from '../../../../components/Common/MessageDisplay';
import Feather from 'react-native-vector-icons/Feather';
import TypeBoxComponent from '../../../../components/Common/TypeBoxComponent';

const SchoolChatBox = ({route, navigation}) => {
  const [moreClose, setMoreClose] = useState(false);

  const expandMore = () => {
    setMoreClose(true);
  };

  const message_data = [
    {
      id: 1,
      msg: 'Hi how are you?',
      time: '4.30 AM',
      dp: require('../../../../assets/image/dpchecktwo.png'),
      type: 'other',
    },

    {
      id: 2,
      msg: 'Good, how are you?',
      time: '12.30 AM',
      type: 'you',
    },

    {
      id: 3,
      msg: 'You there?',
      time: '12.32 AM',
      type: 'you',
    },
  ];

  const {chatName} = route.params;
  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={true}
        moreIcon={moreClose ? false : true}
        callIcon={moreClose ? true : false}
        PressIcon={expandMore}
        closeCall={() => setMoreClose(false)}
        title={chatName}
        RestyleTitle={{fontSize: scale(20)}}
        lastseen={'Last seen 12m ago'}
      />

      <View style={GlobalStyle.ph20flex}>
        <View style={{marginTop: verticalScale(20)}}>
          {message_data.map(item => {
            return <MessageDisplay message_data={item} />;
          })}
        </View>
        {/* <View style={{flex:1,backgroundColor:'red',justifyContent:'flex-end',paddingBottom:verticalScale(15)}}>
         */}

         
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: verticalScale(15),
          }}>
          <TypeBoxComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SchoolChatBox;

const styles = StyleSheet.create({});
