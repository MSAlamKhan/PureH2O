import React from 'react'
import {StyleSheet, Text, View, useWindowDimensions,useColorScheme} from 'react-native'
import {verticalScale, scale} from 'react-native-size-matters'
import { Colors } from '../../../utils/Colors'
import { Slider } from '@rneui/themed'

const SliderComponent = () => {
 
  return (
    <View>
      <Slider
        style={{width: '100%'}}
        minimumValue={0}
        maximumValue={100}
        step={1}
        // value={data.value}
        //  onValueChange={setSliderValue}
        minimumTrackTintColor={'#3C81F8'}
        maximumTrackTintColor={'#D8E2FF'}
        thumbTintColor={'#3C81F8'}
        thumbStyle={{
          height:scale(18),
          width: scale(18),
          borderRadius: scale(18),
        }}
        trackStyle={{
          height: verticalScale(6),
          borderRadius: scale(100),
        }}
      />
    </View>
  )
}

export default SliderComponent

const styles = StyleSheet.create({})
