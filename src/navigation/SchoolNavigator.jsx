import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StudentList from '../screens/TeacherSide/Connects/TeacherStudentList';
import {Colors} from '../utils/Colors';

import FeesStructure from '../screens/StudentSide/SideBarStudent/FeesStructure.jsx/StudentFeesStructure';

import SchoolHome from '../screens/SchoolSide/SchoolHome';
import SchoolProfile from '../screens/SchoolSide/SchoolProfile';
import SchoolAdmissionMain from '../screens/SchoolSide/SideBarSchool/Admission/SchoolAdmissionMain';
import SchoolAdmissionAll from '../screens/SchoolSide/SideBarSchool/Admission/SchoolAdmissionAll';
import SideBarSchool from '../screens/SchoolSide/SideBarSchool/SideBarSchool';
import SchoolChatBox from '../screens/SchoolSide/SideBarSchool/Message/SchoolChatBox';
import MessagesSchool from '../screens/SchoolSide/SideBarSchool/Message/MessagesSchool';
import SchoolStudenList from '../screens/SchoolSide/Connects/SchoolStudentList';
import SchoolWallet from '../screens/SchoolSide/Wallet/SchoolWallet';
import SchoolQuizPost from '../screens/SchoolSide/CreatePost/SchoolQuizPost';
import SchoolEventPost from '../screens/SchoolSide/CreatePost/SchoolEventPost';
import SchoolAdmissionPost from '../screens/SchoolSide/CreatePost/SchoolAdmissionPost';
import SchoolAllTransaction from '../screens/SchoolSide/Wallet/SchoolAllTransaction';
import SchoolPaymentMethod from '../screens/SchoolSide/Wallet/SchoolPaymentMethod';
import AdsAccount from '../screens/SchoolSide/Ads/AdsAccount';
import AdCampaign from '../screens/SchoolSide/Ads/AdCampaign';
import NewCampaign from '../screens/SchoolSide/Ads/NewCampaign';
import SchoolSearch from '../screens/SchoolSide/Search/SchoolSearch';
import SchoolFeesStructure from '../screens/SchoolSide/SideBarSchool/Fees/SchoolFeesStructure';
import SchoolNotification from '../screens/SchoolSide/SideBarSchool/Notification/SchoolNotification';
import ViewOtherProfile from '../screens/SchoolSide/ViewOtherProfile';
import ForgotPass from '../screens/authentication/ForgotPass';
import IndividualPost from '../components/Common/IndividualPost';


const SchoolNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="homemain"
        screenOptions={{
          tabBarHideOnKeyboard: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarActiveTintColor: Colors.Main,
          tabBarInactiveTintColor: '#6B6666',
        }}>
        <Tab.Screen name="homescreen" component={AllHome} />

        <Tab.Screen name="searchscreen" component={AllSearch}/>

        <Tab.Screen name="sidebarscreen" component={AllSideBar} />

        <Tab.Screen name="connectscreen" component={AllStudent} />

        <Tab.Screen name="profilescreen" component={AllProfile} />

        <Tab.Screen name="messagescreen" component={AllMessages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default SchoolNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="homemain">
      <Stack.Screen name="homemain" component={SchoolHome} />
      <Stack.Screen name="quizpost" component={SchoolQuizPost} />
      <Stack.Screen name="eventpost" component={SchoolEventPost} />
      <Stack.Screen name="admissionpost" component={SchoolAdmissionPost} />
      <Stack.Screen name="schoolsidebar" component={SideBarSchool}   options={{ animation: 'slide_from_left' }} />
      <Stack.Screen name="schooladsaccount" component={AdsAccount } />
      <Stack.Screen name="schoolalladmission" component={SchoolAdmissionAll} />

      {/* for the time being */}
    </Stack.Navigator>
  );
}

function AllSearch() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="schoolsearch">
      <Stack.Screen name="schoolsearch" component={SchoolSearch} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}


function AllMessages() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="schoolmessages">
         <Stack.Screen name="schoolmessages" component={MessagesSchool} />
      <Stack.Screen name="chatbox" component={SchoolChatBox} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="schoolprofile">
      <Stack.Screen name="schoolprofile" component={SchoolProfile} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="chatbox" component={SchoolChatBox} />
      <Stack.Screen name="individualpost" component={IndividualPost} />
    </Stack.Navigator>
  );
}

function AllStudent() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="schoolstudentlist">
      <Stack.Screen name="schoolstudentlist" component={SchoolStudenList} />
      <Stack.Screen name="schoolsidebar" component={SideBarSchool}   options={{ animation: 'slide_from_left' }} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="chatbox" component={SchoolChatBox} />
  
    </Stack.Navigator>
  );
}

function AllSideBar() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="schoolsidebar">
      <Stack.Screen name="schoolsidebar" component={SideBarSchool}   options={{ animation: 'slide_from_left' }} />
      <Stack.Screen name="schoolprofile" component={SchoolProfile} />
      <Stack.Screen name="schooladmission" component={SchoolAdmissionMain} />
      <Stack.Screen name="schoolalladmission" component={SchoolAdmissionAll} />
      <Stack.Screen name="schoolfees" component={SchoolFeesStructure} />
      <Stack.Screen name="schoolmessages" component={MessagesSchool} />
      <Stack.Screen name="chatbox" component={SchoolChatBox} />
      <Stack.Screen name="schoolwallet" component={SchoolWallet} />
      <Stack.Screen name="schoolalltransaction" component={SchoolAllTransaction} />
      <Stack.Screen name="schoolpaymentmethod" component={SchoolPaymentMethod } />
      <Stack.Screen name="schooladsaccount" component={AdsAccount } />
      <Stack.Screen name="schooladcampaign" component={AdCampaign } />
      <Stack.Screen name="schooladdnewcampaign" component={NewCampaign } />
      <Stack.Screen name="schoolstudentlist" component={SchoolStudenList} />
      <Stack.Screen name="schoolnotification" component={SchoolNotification} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="forgotpass" component={ForgotPass} />
      {/* <Stack.Screen name="admission" component={StudentAdmission} />
    <Stack.Screen name="feesstructure" component={FeesStructure} />
    <Stack.Screen name="notification" component={NotificationStudent} /> */}
    </Stack.Navigator>
  );
}
