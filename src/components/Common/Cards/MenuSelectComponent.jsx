import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const MenuSelectComponent = ({menuFirst, menuSecond, firstData, secondData}) => {
  const [menu, setMenu] = useState('first');
  return (
    <View>
      <View style={styles.Bar}>
        <TouchableOpacity
          onPress={() => setMenu('first')}
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === 'first' ? Colors.ThemeBlue : Colors.SignRegContainer,
            },
          ]}>
          <Text
            style={[
              styles.heading,
              {
                color: menu === 'first' ? Colors.White : Colors.TextDarkGrey,
              },
            ]}>
            {menuFirst}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.MenuBox,
            {
              backgroundColor:
                menu === 'second' ? Colors.ThemeBlue : Colors.SignRegContainer,
            },
          ]}
          onPress={() => setMenu('second')}>
          <Text
            style={[
              styles.heading,
              {
                color: menu === 'second' ? Colors.White : Colors.TextDarkGrey,
              },
            ]}>
            {menuSecond}
          </Text>
        </TouchableOpacity>
      </View>
      {menu === 'first' ? firstData : secondData}
    </View>
  );
};

export default MenuSelectComponent;

const styles = StyleSheet.create({
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
});
