import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from '../utils/Colors';
import Home from '../screens/StudentSide/Home';

import Profile from '../screens/StudentSide/Profile';

import Connects from '../screens/StudentSide/Connects/StudentConnects';

import SideBarStudent from '../screens/StudentSide/SideBarStudent/SideBarStudent';

import StudentAdmission from '../screens/StudentSide/SideBarStudent/Admission/StudentAdmission';
import NotificationStudent from '../screens/StudentSide/SideBarStudent/Notifcations/NotificationStudent';
import MessagesStudent from '../screens/StudentSide/SideBarStudent/StudentMessages/MessagesStudent';
import StudentChatBox from '../screens/StudentSide/SideBarStudent/StudentMessages/StudentChatBox';
import StudentFeesStructure from '../screens/StudentSide/SideBarStudent/FeesStructure.jsx/StudentFeesStructure';
import SchoolQuizPost from '../screens/SchoolSide/CreatePost/SchoolQuizPost';
import SchoolAdmissionPost from '../screens/SchoolSide/CreatePost/SchoolAdmissionPost';
import SchoolEventPost from '../screens/SchoolSide/CreatePost/SchoolEventPost';
import StudentSearch from '../screens/StudentSide/Search/StudentSearch';
import IndividualPost from '../components/Common/IndividualPost';
import IndividualQuiz from '../components/Common/IndividualQuiz';
import ViewOtherProfile from '../screens/StudentSide/ViewOtherProfile';
import ForgotPass from '../screens/authentication/ForgotPass';



const StudentNavigator = () => {
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
        <Tab.Screen name="searchscreen" component={AllSearch} />
        <Tab.Screen name="sidebarscreen" component={AllSideBar} />
        <Tab.Screen name="connectscreen" component={AllConnects} />
        <Tab.Screen name="profilescreen" component={AllProfile} />
        <Tab.Screen name="messagescreen" component={AllMessages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StudentNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="homemain">
      <Stack.Screen name="homemain" component={Home} />
      <Stack.Screen name="quizpost" component={SchoolQuizPost} />
      <Stack.Screen name="eventpost" component={SchoolEventPost} />
      <Stack.Screen name="admissionpost" component={SchoolAdmissionPost} />
      <Stack.Screen name="individualpost" component={IndividualPost} />
      <Stack.Screen name="individualquiz" component={IndividualQuiz} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="studentfeesstructure"  component={StudentFeesStructure} />
      <Stack.Screen name="chatbox" component={StudentChatBox} />
    </Stack.Navigator>
  );
}

function AllMessages() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="studentmessages">
      <Stack.Screen name="studentmessages" component={MessagesStudent} />
      <Stack.Screen name="chatbox" component={StudentChatBox} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllSearch() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="studentsearch">
      <Stack.Screen name="studentsearch" component={StudentSearch} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllConnects() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="connects">
      <Stack.Screen name="connects" component={Connects} />
      <Stack.Screen
        name="sidebar"
        component={SideBarStudent}
        options={{animation: 'slide_from_left'}}
      />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="profile">
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen
        name="sidebar"
        component={SideBarStudent}
        options={{animation: 'slide_from_left'}}
      />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="individualpost" component={IndividualPost} />
   
    </Stack.Navigator>
  );
}

function AllSideBar() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="sidebar">
      <Stack.Screen
        name="sidebar"
        component={SideBarStudent}
        options={{animation: 'slide_from_left'}}
      />
      <Stack.Screen name="admission" component={StudentAdmission} />
      <Stack.Screen name="studentfeesstructure"  component={StudentFeesStructure} />
      <Stack.Screen name="notification" component={NotificationStudent} />
      <Stack.Screen name="studentmessages" component={MessagesStudent} />
      <Stack.Screen name="chatbox" component={StudentChatBox} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="forgotpass" component={ForgotPass} />

     
    </Stack.Navigator>
  );
}
