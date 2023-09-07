import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import SchoolNavigator from './src/navigation/SchoolNavigator';
import StudentNavigator from './src/navigation/StudentNavigator';
import TeacherNavigator from './src/navigation/TeacherNavigator';
import { useDispatch, useSelector } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainSplash from './src/screens/Splashes/MainSplash';
import {
  FIRST_SPLASH,
  SECOND_SPLASH,
  USER_DETAILS,
} from './src/redux/reducer/Holder';
import Onboarding from './src/screens/Splashes/Onboarding';
import OnboardingTwo from './src/screens/Splashes/OnboardingTwo';

const App = () => {
  const dispatch = useDispatch();

  const first_splash = useSelector(state => state.holderReducer.first_splash);
  const second_splash = useSelector(state => state.holderReducer.second_splash);
  const userDetails = useSelector(state => state.holderReducer.userDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firstSplash();
    secondSplash();
    getUserDetails();
    OneSignal.setAppId('2d8d2864-4b0d-4454-b8aa-5674f2b209b2');

    OneSignal.promptForPushNotificationsWithUserResponse();

    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        OneSignal.add;
        const data = notification.additionalData;
        console.log('data', data);
        notificationReceivedEvent.complete(notification);
      },
    );

    // OneSignal.setNotificationOpenedHandler((notification) => {})

    OneSignal.addSubscriptionObserver(async event => {
      if (event.to.isSubscribed) {
        const state = await OneSignal.getDeviceState();
        console.log('notification =>', state.userId);
        await AsyncStorage.setItem('onesignaltoken', state.userId);
        // dispatch({type: NOTIFICATION_TOKEN, payload: state.userId})
      }
    });
  }, []);

  const firstSplash = async () => {
    const getData = await AsyncStorage.getItem('first_splash');
    dispatch({ type: FIRST_SPLASH, payload: getData });
  };
  const secondSplash = async () => {
    const getData = await AsyncStorage.getItem('second_splash');
    dispatch({ type: SECOND_SPLASH, payload: getData });
  };
  const getUserDetails = async () => {
    const getData = await AsyncStorage.getItem('user_details');
    dispatch({ type: USER_DETAILS, payload: JSON.parse(getData) });
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {loading && userDetails == null && <MainSplash />}
      {!loading &&
        userDetails == null &&
        <AuthNavigator />}
      {!loading && userDetails?.data?.role_id == 1 && <SchoolNavigator />}
      {!loading && userDetails?.data?.role_id == 2 && <TeacherNavigator />}
      {!loading && userDetails?.data?.role_id == 3 && <StudentNavigator />}
    </>
  );
};

export default App;
