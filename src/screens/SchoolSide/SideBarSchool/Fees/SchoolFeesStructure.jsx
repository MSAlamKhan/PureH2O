import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import MainHeader from '../../../../components/Headers/MainHeader';
import FeesComponent from '../../../../components/Common/FeesComponent';
import { Colors } from '../../../../utils/Colors';
import { verticalScale } from 'react-native-size-matters';

const SchoolFeesStructure = () => {
  return (
    <SafeAreaView style={GlobalStyle.Container}>
            <StatusBar barStyle={'light-content'} />
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

          <FeesComponent edit={true} />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SchoolFeesStructure;

const styles = StyleSheet.create({});
