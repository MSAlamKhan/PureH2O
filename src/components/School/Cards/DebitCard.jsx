import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import Feather from 'react-native-vector-icons/Feather';

const DebitCard = props => {
  const [card, setCard] = useState(false);
  const [cvv, setCvv] = useState(false);
  return (
    <View style={styles.MainView}>
      <View style={GlobalStyle.RowBetween}>
        <Text style={styles.WhiteText}>My Debit Card</Text>
        <View style={styles.GreyBox} />
      </View>

      <View style={styles.CardNumView}>
        <Text
          style={[
            styles.WhiteText,
            {fontSize: scale(20), textAlign: 'center'},
          ]}>
          {card ? <Text>4469 5522 6644</Text> : <Text>**** **** ****</Text>}{' '}
          ****
        </Text>
        <TouchableOpacity onPress={() => setCard(!card)}>
          <Feather
            name={card ? 'eye-off' : 'eye'}
            color={'#649CFC'}
            size={scale(17)}
            style={{marginLeft: moderateScale(10)}}
          />
        </TouchableOpacity>
      </View>

      <View style={GlobalStyle.RowBetween}>
        <View style={{}}>
          <Text style={styles.WhiteText}>Valid Upto</Text>
          <Text style={styles.WhiteText}>{props.expDate}</Text>
        </View>

        <View>
          <Text style={styles.WhiteText}>CVV</Text>
          <View style={GlobalStyle.Row}>
            <Text style={styles.WhiteText}>
              {cvv ? <Text>***</Text> : props.cvv}
            </Text>
            <TouchableOpacity onPress={() => setCvv(!cvv)}>
              <Feather
                name={cvv ? 'eye-off' : 'eye'}
                color={'#649CFC'}
                size={scale(17)}
                style={{marginLeft: moderateScale(10)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={[styles.WhiteText,{marginTop:verticalScale(20)}]}>{props.name}</Text>
    </View>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Colors.FeesBox,
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
  },
  WhiteText: {
    fontFamily: Font.Poppins600,
    color: Colors.White,
    fontSize: scale(16),
    
    
  },

  CardNumView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  GreyBox: {
    backgroundColor: '#2466D7',
    borderRadius: scale(21),
    height: verticalScale(30),
    width: scale(56),
    alignSelf: 'center',
  },
});
