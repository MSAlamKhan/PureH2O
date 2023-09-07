import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';

const screenWidth = Dimensions.get('window').width;

const GraphAds = () => {
  const chartConfig = {

    backgroundGradientFrom: Colors.White,
    backgroundGradientTo: Colors.White,
    color: (opacity = 1) => `rgba(53, 56, 143, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: scale(5),
    },
  };
  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
    legend: ['Ads Spending'],
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(10),
        overflow: 'hidden',
        marginHorizontal: moderateScale(10),
      }}>
      <LineChart
        withShadow = {false}
        withVerticalLines={false}
        withHorizontalLines={false}
        withHorizontalLabels={true}
        data={data}
        width={screenWidth}
        height={verticalScale(220)}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default GraphAds;

const styles = StyleSheet.create({});
