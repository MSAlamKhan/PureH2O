import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OptionsModal from './CommonModals/OptionsModal';

const NewChatComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      activeOpacity={0.8}
      style={styles.Main}>
      <AntDesign
        name={modalVisible ? 'minuscircle' : 'pluscircle'}
        color={Colors.White}
        size={scale(24)}
      />

      <OptionsModal
        OptionOne={'New Chat'}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onPress = {props.onPressChat}
        onlyOne = {props.onlyOne}
        OptionTwo={'Create Group'}
        onPressTwo={props.onPressGroup}

        OptionThree={'Delete Group'}
        onPressThree={props.onPressDelete}
         
        RestyleThree={{color: '#F94687'}}
        restyleMainModal={{
          position: 'absolute',
          right: 0,
          bottom: '11%',
            right: scale(0),
          //   top: verticalScale(25),
        }}
        restyleBox={{paddingHorizontal: moderateScale(30)}}
      />
    </TouchableOpacity>
  );
};

export default NewChatComponent;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.TextBlue,
    height: scale(65),
    width: scale(65),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(60),
    position: 'absolute',
    right: 0,
    bottom: 20,
  },
});
