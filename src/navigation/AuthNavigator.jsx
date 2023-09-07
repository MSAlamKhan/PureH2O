import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Onboarding from '../screens/Splashes/Onboarding';
import Welcome from '../screens/authentication/Welcome';
import SignIn from '../screens/authentication/SignIn';
import OnboardingTwo from '../screens/Splashes/OnboardingTwo';
import Register from '../screens/authentication/Register';
import Otp from '../screens/authentication/Otp';
import AccountCreated from '../screens/authentication/AccountCreated';
import AddBio from '../screens/authentication/AddBio';
import YourSkills from '../screens/authentication/YourSkills';
import Experience from '../screens/authentication/Experience';
import Decide from '../screens/authentication/Decide';
import FindAccount from '../screens/authentication/FindAccount.jsx';
import ForgotPass from '../screens/authentication/ForgotPass';
import MainSplash from '../screens/Splashes/MainSplash';
import SchoolRegister from '../screens/authentication/SchoolRegister';
import DesignFeesStructure from '../screens/authentication/DesignFeesStructure';
const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="welcome">
        {/* <Stack.Screen name="mainsplash" component={MainSplash} /> */}
        {/* <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="onboardingtwo" component={OnboardingTwo} /> */}
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="accountcreated" component={AccountCreated} />
        <Stack.Screen name="addbio" component={AddBio} />
        <Stack.Screen name="yourskills" component={YourSkills} />
        <Stack.Screen name="experience" component={Experience} />
        <Stack.Screen name="decide" component={Decide} />
        <Stack.Screen name="findaccount" component={FindAccount} />
        <Stack.Screen name="forgotpass" component={ForgotPass} />
        <Stack.Screen name="schoolregister" component={SchoolRegister} />
        <Stack.Screen
          name="designfeesstructure"
          component={DesignFeesStructure}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
