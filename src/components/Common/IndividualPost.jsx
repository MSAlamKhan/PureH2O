import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import ImageView from 'react-native-image-viewing';
import React, {useState} from 'react';
import SectionCard from '../Cards/SectionCard';
import { GlobalStyle } from '../../Constants/GlobalStyle';
import MainHeader from '../Headers/MainHeader';

const IndividualPost = ({route}) => {
    const data = route.params;


 const jamal = {...data}
 

  const [currentImageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleSetIsVisible = () => {
    setIsVisible(true);
  };

  return (

    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>

        <MainHeader backIcon = {true}/>


    <View style= {GlobalStyle.ph20}>

       

        <SectionCard  {...data} />

          {/* <TouchableOpacity onPress={() => handleSetIsVisible()}>
        <Image
          source={data.source}
          style={{width: 100, height: 100}}
        />
      </TouchableOpacity> */}
{/* <ImageView
        images={ImagesExamples}
        imageIndex={currentImageIndex}
        presentationStyle="pageSheet"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        onImageIndexChange={index => setImageIndex(index)}
        FooterComponent={() => (
          <View>
            <Text>{`${currentImageIndex + 1}/${ImagesExamples.length}`}</Text>
          </View>
        )}
      />  */}

    


    </View>

    </SafeAreaView>
  );
};

export default IndividualPost;
