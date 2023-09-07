import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {verticalScale} from 'react-native-size-matters';
import MainHeader from '../../components/Headers/MainHeader';
import {Colors} from '../../utils/Colors';
import FeesComponent from '../../components/Common/FeesComponent';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {useSelector} from 'react-redux';
import FeeStructureCard from '../../components/FeeStructure/FeeStructureCard';

const DesignFeesStructure = ({route}) => {
  const type = useSelector(state => state.holderReducer.role_id);
  console.log('type', type);

  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <MainHeader
        backIcon={Colors.White}
        backIconColor={Colors.White}
        title={'Fees Structure'}
        img={require('../../assets/image/headerimg.png')}
        RestyleTitle={{color: Colors.White}}
      />

      <ScrollView>
        <View style={GlobalStyle.ph20}>
          <View style={{marginVertical: verticalScale(35)}}>
            {/* <FeesComponent
              type={type}
              design={true}
              // edit={true}
              typee={'signup'}
            /> */}
            <FeeStructureCard
              type={type}
              design={true}
              // edit={true}
              typee={'signup'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DesignFeesStructure;

const styles = StyleSheet.create({});
