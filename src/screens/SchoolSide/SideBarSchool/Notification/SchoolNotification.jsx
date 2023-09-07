import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import NotificationComponent from '../../../../components/Common/NotificationComponent';
import {GlobalStyle} from '../../../../Constants/GlobalStyle';
import MainHeader from '../../../../components/Headers/MainHeader';
import {Colors} from '../../../../utils/Colors';

const SchoolNotification = () => {
  const notification_data = [
    {
      id: 1,
      title: 'Apply Success',
      description: 'You successfully applied in new admission in ABC School',
      time: '10h ago',
      status: 'Mark as read',
      imp: true,
    },
    {
      id: 2,
      title: 'Interview Calls',
      description: 'You successfully applied in new admission in ABC School',
      time: '10h ago',
      status: 'Mark as read',
    },
    {
      id: 3,
      title: 'Apply Success',
      description: 'You successfully applied in new admission in ABC School',
      time: '10h ago',
      status: 'Mark as read',
      imp: true,
    },
  ];

  return (
    <SafeAreaView style={GlobalStyle.SkyBlueContainer}>
      <MainHeader
        backIcon={Colors.ThemeBlue}
        title={'Notifications'}
        moreIcon = {true}
        moreIconColor = {'transparent'}
      />
      <ScrollView>
        <View style={GlobalStyle.ph20}>
          <NotificationComponent type = {'school'} notification_data = {notification_data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SchoolNotification;

const styles = StyleSheet.create({});
