import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import MainHeader from '../../../../components/Headers/MainHeader';
import FeesComponent from '../../../../components/Common/FeesComponent';
import { Colors } from '../../../../utils/Colors';
import { verticalScale } from 'react-native-size-matters';

const StudentFeesStructure = ({route}) => {
  const {type} = route.params;
  console.log('type', type)
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <MainHeader
        backIcon={Colors.White}
        backIconColor={Colors.White}
        title={'Fees Structure'}
        img = {require('../../../../assets/image/headerimg.png')}
        RestyleTitle={{color: Colors.White}}
      />

      <ScrollView>
        <View style={GlobalStyle.ph20}>
            <View style = {{marginTop : verticalScale(35)}}>

          <FeesComponent type = {type}  />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentFeesStructure;

const styles = StyleSheet.create({});
