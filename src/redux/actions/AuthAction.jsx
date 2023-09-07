import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../utils/Urls';
import {OTP, SOCIAL_DATA, USER_DETAILS} from '../reducer/Holder';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Platform} from 'react-native';

export const loginApi = (data, device) => {
  return async dispatch => {
    try {
      const device_token = await AsyncStorage.getItem('onesignaltoken');
      let baseUrl = `${Base_Url}login`;
      let myData = new FormData();

      myData.append('email', data.email);
      myData.append('password', data.password);
      myData.append('device_name', device);
      myData.append('device_token', device_token);

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
      } else {
        console.log('first');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
export const VerifyEmailBReg = (
  data,
  setIsEmailExist,
  setLoading,
  navigation,
  type,
) => {
  return async dispatch => {
    try {
      setLoading(true);
      let baseUrl = `${Base_Url}verify-email`;
      let myData = new FormData();

      myData.append('email', data.email);

      const response = await fetch(baseUrl, {
        method: 'post',
        body: myData,
      });

      const responseData = await response.json();
      console.log('responseData', responseData);

      if (responseData.success.status == 200) {
        dispatch({type: OTP, payload: responseData.success.OTP});
        setLoading(false);
        if (type == 'Signup') {
          navigation.navigate('otp', {
            type: type,
            data: data,
          });
        } else {
          console.log('first');
        }
      } else if (responseData.error.message == '200') {
        console.log('first');
        setIsEmailExist(true);
        setLoading(false);
      } else {
        setLoading(false);
        console.log('VerifyEmailBReg else error');
      }
    } catch (error) {
      setLoading(false);
      console.log('VerifyEmailBReg error', error);
    }
  };
};
export const registerUser = async (
  data,
  item,
  device,
  navigation,
  type,
  socialData,
) => {
  try {
    const device_token = await AsyncStorage.getItem('onesignaltoken');
    // setLoading(true);
    let baseUrl = `${Base_Url}register`;
    let myData = new FormData();

    myData.append('email', data.email);
    myData.append('firstname', data.firstname);
    myData.append('lastname', data.lastname);
    myData.append('phone_number', data.email);
    myData.append('password', data.password ? data.password : 'Demo1234');
    myData.append('role_id', item.id);
    myData.append('device_name', device);
    myData.append('device_token', device_token);
    myData.append(
      'password_confirmation',
      data.confirm_password ? data.confirm_password : 'Demo1234',
    );
    {
      socialData?.uID && myData.append('social_id', socialData?.uID);
    }

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
      navigation.navigate('addbio', {
        data: responseData.success,
      });
      console.log('first');
    }
  } catch (error) {
    console.log('error', error);
  }
};
export const typeExperience = (data, date, id, navigation) => {
  return async dispatch => {
    console.log('id', id);
    try {
      const userData = await AsyncStorage.getItem('user_details');
      const cnvrtData = JSON.parse(userData);
      console.log('cnvrtData.data.id', cnvrtData.data.id);
      let baseUrl = `${Base_Url}experience/${cnvrtData.data.id}`;
      let myData = new FormData();

      myData.append('role_id', id);
      {
        id === 1 && myData.append('school_name', data.owner_name);
        myData.append('school_owner', data.school_name);
        myData.append('found_in', JSON.stringify(date));
        // myData.append('teacher', data.email);
        // myData.append('student', data.email);
      }
      {
        id === 2 && myData.append(`skills`, date);
        {
          data?.length > 0 &&
            data.forEach((element, index) => {
              myData.append(`title[${index}]`, element.title),
                myData.append(
                  `institute_name[${index}]`,
                  element.institue_name,
                ),
                myData.append(`location[${index}]`, element.location_type),
                myData.append(
                  `start_date[${index}]`,
                  JSON.stringify(element.Start_Data),
                ),
                myData.append(
                  `end_date[${index}]`,
                  JSON.stringify(element.End_Data),
                ),
                myData.append(`description[${index}]`, element.Description);
            });
        }
      }

      const response = await fetch(baseUrl, {
        method: 'post',
        body: myData,
      });

      const responseData = await response.json();
      console.log('responseData', responseData);

      if (responseData.success.status == 200) {
        if (id == 1) {
          navigation.navigate('designfeesstructure');
        } else if (id == 2) {
          dispatch({type: USER_DETAILS, payload: cnvrtData});
        }
      } else {
        console.log('v');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
export const addBio = async (data, profile_image, navigation, RoleId) => {
  try {
    const userData = await AsyncStorage.getItem('user_details');
    const cnvrtData = JSON.parse(userData);
    let baseUrl = `${Base_Url}add-bio/${cnvrtData.data.id}`;
    let myData = new FormData();

    myData.append('about', data);
    {
      profile_image?.uri && myData.append('profile_image', profile_image?.uri);
    }

    const response = await fetch(baseUrl, {
      method: 'post',
      body: myData,
    });
    console.log('response', response);

    const responseData = await response.json();
    console.log('responseData', responseData);

    if (responseData.success.status == 200) {
      if (RoleId.ROLE_ID === 'school') {
        navigation.navigate('schoolregister');
      } else if (RoleId.ROLE_ID === 'student') {
        navigation.navigate('yourskills');
      } else {
        navigation.navigate('experience');
      }
    }
  } catch (error) {
    console.log('error', error);
  }
};
export const social_signin = (data, navigation) => {
  return async dispatch => {
    const notificationToken = await AsyncStorage.getItem('onesignaltoken');
    try {
      let base_url = `${Base_Url}social_id`;
      let myData = new FormData();

      myData.append('social_id', data.uID);
      myData.append('device_token', notificationToken);
      myData.append(
        'device_name',
        Platform.OS == 'android' ? 'Android' : 'IOS',
      );

      const response = await fetch(base_url, {
        method: 'post',
        body: myData,
      });
      const responseData = await response.json();

      if (responseData?.success?.status == 200) {
        const userDetail = JSON.stringify(responseData.data);
        await AsyncStorage.setItem('user_details', userDetail);
        await dispatch({type: USER_DETAILS, payload: responseData.data});
      } else {
        await dispatch({type: SOCIAL_DATA, payload: data});
        navigation.navigate('register');
      }
    } catch (error) {
      console.log('error', error);
      // await dispatch({type: IS_LOADING, payload: false});
    }
  };
};
export const googleSignin = navigation => {
  return async dispatch => {
    try {
      GoogleSignin.configure({
        webClientId:
          Platform.OS == 'android'
            ? '1017150284735-47th6gm0rv222rbd63fhlu40is5gc5gs.apps.googleusercontent.com'
            : '1017150284735-ch0l71vfhebsjnk52jpfsnmmdnog9jho.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const socialObj = {
        email: userInfo.user.email ? userInfo.user.email : '',
        firstName: userInfo.user.givenName,
        lastName: userInfo.user.familyName,
        picUrl: userInfo.user.photo,
        uID: userInfo.user.id,
      };
      // console.log('socialObj', socialObj);
      dispatch(social_signin(socialObj, navigation));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('You cancelled the sign in.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google sign In operation is in process');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services not available');
      } else {
        console.log(
          'Something unknown went wrong with Google sign in. ' + error.message,
        );
      }
    }
  };
};
export const submitfeeStructure = data => {
  return async dispatch => {
    try {
      const userData = await AsyncStorage.getItem('user_details');
      const cnvrtData = JSON.parse(userData);
      console.log('cnvrtData.data.id', cnvrtData.data.id);
      let baseUrl = `${Base_Url}fee-structure/${cnvrtData.data.id}`;
      let myData = new FormData();
      {
        data?.length > 0 &&
          data.forEach((element, index) => {
            myData.append(`fees[${index}][amount]`, element.amount);
            myData.append(`fees[${index}][classes]`, element.class);
          });
      }

      const response = await fetch(baseUrl, {
        method: 'post',
        body: myData,
      });
      console.log('response', response);

      const responseData = await response.json();
      console.log('responseData', responseData);

      if (responseData.success.status == 200) {
        dispatch({type: USER_DETAILS, payload: cnvrtData});
      } else {
        console.log('first');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
export const searchByEmail = (data, navigation, setError, type) => {
  return async dispatch => {
    try {
      let baseUrl = `${Base_Url}forgot-password`;
      let myData = new FormData();

      myData.append('email', data.email);

      const response = await fetch(baseUrl, {
        method: 'post',
        body: myData,
      });
      console.log('response', response);

      const responseData = await response.json();
      console.log('responseData', responseData);

      if (responseData?.success?.status == 200) {
        dispatch({type: OTP, payload: responseData.success.OTP});
        if (type != 'type') {
          navigation.navigate('otp', {
            data: responseData.success.data,
            type: 'reset',
          });
        }
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
export const updatePassword = async (
  data,
  item,
  navigation,
  type,
  setSuccessModal,
) => {
  try {
    let baseUrl = `${Base_Url}reset-password/${data?.id}`;
    let myData = new FormData();

    myData.append('password', item?.password);
    myData.append('password_confirmation', item?.confirmpassword);

    const response = await fetch(baseUrl, {
      method: 'post',
      body: myData,
    });
    console.log('response', response);

    const responseData = await response.json();
    console.log('responseData', responseData);

    if (responseData.success.status == 200) {
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        if (type === 'changepass') {
          navigation.goBack();
        } else {
          navigation.navigate('signin');
        }
      }, 2000);
    }
  } catch (error) {
    console.log('error', error);
  }
};
export const logOutApi = () => {
  return async dispatch => {
    try {
      const userData = await AsyncStorage.getItem('user_details');
      const cnvrtData = JSON.parse(userData);
      let baseUrl = `${Base_Url}logout/${cnvrtData?.data?.id}`;

      const response = await fetch(baseUrl, {
        method: 'post',
      });

      const responseData = await response.json();

      if (responseData.success.status == 200) {
        await AsyncStorage.removeItem('user_details');
        dispatch({type: USER_DETAILS, payload: null});
      } else {
        console.log('first');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
export const getMyDetails = () => {
  return async dispatch => {
    try {
      const userData = await AsyncStorage.getItem('user_details');
      const cnvrtData = JSON.parse(userData);
      let baseUrl = `${Base_Url}user-detail/${cnvrtData?.data?.id}`;

      const response = await fetch(baseUrl, {
        method: 'post',
      });

      const responseData = await response.json();

      if (responseData.success.status == 200) {
        await AsyncStorage.setItem(
          'user_details',
          JSON.stringify(responseData.success),
        );
        dispatch({type: USER_DETAILS, payload: responseData.success});
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};
