import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../utils/Urls';
import {USER_DETAILS} from '../reducer/Holder';

export const getUserDetails = async () => {
  try {
    const userData = await AsyncStorage.getItem('user_details');
    const cnvrtData = JSON.parse(userData);
    let baseUrl = `${Base_Url}user-detail/${cnvrtData?.data?.id}`;

    const response = await fetch(baseUrl, {
      method: 'post',
    });

    const responseData = await response.json();

    if (responseData.success.status == 200) {
      console.log('first');
    }
  } catch (error) {
    console.log('error', error);
  }
};
export const submitEditProfile = (
  about,
  profile_image,
  cover_image,
  setSave,
) => {
  return async dispatch => {
    try {
      const userData = await AsyncStorage.getItem('user_details');
      const cnvrtData = JSON.parse(userData);
      let baseUrl = `${Base_Url}edit-user-detail/${cnvrtData?.data?.id}`;
      let myData = new FormData();

      myData.append('about', about);
      myData.append('profile_image', profile_image);
      myData.append('cover_image', cover_image);

      const response = await fetch(baseUrl, {
        method: 'post',
        body: myData,
      });

      const responseData = await response.json();
      console.log('responseData', responseData);
      if (responseData.success.status == 200) {
        await AsyncStorage.setItem(
          'user_details',
          JSON.stringify(responseData.success),
        );
        dispatch({type: USER_DETAILS, payload: responseData.success});
        setSave(true);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
