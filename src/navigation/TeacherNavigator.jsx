import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StudentList from '../screens/TeacherSide/Connects/TeacherStudentList';
import {Colors} from '../utils/Colors';

import TeacherHome from '../screens/TeacherSide/TeacherHome';
import SideBarTeacher from '../screens/TeacherSide/SideBarTeacher/SideBarTeacher';
import QuizPost from '../screens/TeacherSide/CreatePost/TeacherQuizPost';
import MessagesTeacher from '../screens/TeacherSide/SideBarTeacher/Message/MessagesTeacher';

import TeacherAdmissionMain from '../screens/TeacherSide/SideBarTeacher/Admission/TeacherAdmissionMain';
import TeacherAdmissionAll from '../screens/TeacherSide/SideBarTeacher/Admission/TeacherAdmissionAll';
import FeesStructure from '../screens/StudentSide/SideBarStudent/FeesStructure.jsx/StudentFeesStructure';

import TeacherProfile from '../screens/TeacherSide/TeacherProfile';
import TeacherChatBox from '../screens/TeacherSide/SideBarTeacher/Message/TeacherChatBox';
import TeacherEventPost from '../screens/TeacherSide/CreatePost/TeacherEventPost';
import TeacherQuizPost from '../screens/TeacherSide/CreatePost/TeacherQuizPost';
import TeacherAdmissionPost from '../screens/TeacherSide/CreatePost/TeacherAdmissionPost';
import TeacherNotification from '../screens/TeacherSide/SideBarTeacher/Notifications/TeacherNotfication';
import TeacherStudentList from '../screens/TeacherSide/Connects/TeacherStudentList';
import TeacherSearch from '../screens/TeacherSide/Search/TeacherSearch';
import TeacherFeesStructure from '../screens/TeacherSide/SideBarTeacher/FeesStructure/TeacherFeesStructure';
import IndividualPost from '../components/Common/IndividualPost';
import IndividualQuiz from '../components/Common/IndividualQuiz';
import ViewOtherProfile from '../screens/TeacherSide/ViewOtherProfile';
import ForgotPass from '../screens/authentication/ForgotPass';

const TeacherNavigator = () => {
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

        <Tab.Screen name="searchscreen"  component={AllSearch}
       
      />
        <Tab.Screen name="sidebarscreen" component={AllSideBar} />
        <Tab.Screen name="connectscreen" component={AllStudent} />

        <Tab.Screen name="profilescreen" component={AllProfile} />
        <Tab.Screen name="messagescreen" component={AllMessages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TeacherNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="homemain">
      <Stack.Screen name="homemain" component={TeacherHome} />
      <Stack.Screen name="quizpost" component={TeacherQuizPost} />
      <Stack.Screen name="eventpost" component={TeacherEventPost} />
      <Stack.Screen name="admissionpost" component={TeacherAdmissionPost} />
      <Stack.Screen name="individualpost" component={IndividualPost} />
      <Stack.Screen name="individualquiz" component={IndividualQuiz} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      
      {/* for the time being */}
    </Stack.Navigator>
  );
}

function AllMessages() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="teachermessages">
         <Stack.Screen name="teachermessages" component={MessagesTeacher} />
      <Stack.Screen name="chatbox" component={TeacherChatBox} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="teacherprofile">
      <Stack.Screen name="teacherprofile" component={TeacherProfile} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
      <Stack.Screen name="individualpost" component={IndividualPost} />
    </Stack.Navigator>
  );
}


function AllSearch() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="teachersearch">
      <Stack.Screen name="teachersearch" component={TeacherSearch} />
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllStudent() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="teacherstudentlist">
      <Stack.Screen name="teacherstudentlist" component={TeacherStudentList} />
      <Stack.Screen name="teachersidebar" component={SideBarTeacher}    options={{ animation: 'slide_from_left' }}/>
      <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    </Stack.Navigator>
  );
}

function AllSideBar() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="teachersidebar">
      <Stack.Screen name="teachersidebar" component={SideBarTeacher}    options={{ animation: 'slide_from_left' }}/>
      <Stack.Screen name="teacherprofile" component={TeacherProfile} />
      <Stack.Screen name="teacheradmission" component={TeacherAdmissionMain} />
      <Stack.Screen name="teacheralladmission" component={TeacherAdmissionAll}/>
      <Stack.Screen name="teacherfees" component={TeacherFeesStructure} />
      <Stack.Screen name="teachermessages" component={MessagesTeacher} />
      <Stack.Screen name="chatbox" component={TeacherChatBox} />
    <Stack.Screen name="teachernotification" component={TeacherNotification} /> 
    <Stack.Screen name="teacherstudentlist" component={TeacherStudentList} />
    <Stack.Screen name="viewotherprofile" component={ViewOtherProfile} />
    <Stack.Screen name="forgotpass" component={ForgotPass} />

      {/* <Stack.Screen name="admission" component={StudentAdmission} />
    <Stack.Screen name="feesstructure" component={FeesStructure} /> */}
 
    </Stack.Navigator>
  );
}
