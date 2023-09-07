import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import HomeSvg from '../../../assets/svgs/home.svg';
import ProfileSvg from '../../../assets/svgs/profile.svg';
import AdmissionSvg from '../../../assets/svgs/admission.svg';
import NotificationSvg from '../../../assets/svgs/notification.svg';
import ChatSvg from '../../../assets/svgs/chatsgrey.svg';
import ConnectSvg from '../../../assets/svgs/manage.svg';
import FeesSvg from '../../../assets/svgs/fees.svg';
import PassSvg from '../../../assets/svgs/changepass.svg';
import LogoutSvg from '../../../assets/svgs/logout.svg';
import {Colors} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {useNavigation} from '@react-navigation/native';
import {IS_SIGN_IN, USER_DETAILS} from '../../../redux/reducer/Holder';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logOutApi} from '../../../redux/actions/AuthAction';

const SideBarContent = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [select, setSelect] = useState(false);

  const logOut = async () => {
    dispatch(logOutApi());
  };

  return (
    <View style={styles.MainView}>
      {props.student == true ? (
        <View style={styles.StudentView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('homescreen')}
            style={styles.Content}>
            <View>
              <HomeSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('profilescreen')}>
            <ProfileSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('admission')}>
            <AdmissionSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Admissions</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('notification')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>2</Text>
              </View>
              <NotificationSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('connects')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>2</Text>
              </View>
              <ConnectSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Connects</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('studentmessages')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>5</Text>
              </View>
              <ChatSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Messages</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('studentfeesstructure', {type: 'own'})
            }
            style={styles.Content}>
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Fees Structure</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            //   onPress={()=>navigation.navigate('home')}
          >
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() =>
              navigation.navigate('forgotpass', {type: 'changepass'})
            }>
            <PassSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Change Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Content} onPress={logOut}>
            <LogoutSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* For School  */}

      {props.school == true ? (
        <View style={styles.SchoolView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('homescreen')}
            style={[
              styles.Content,
              {backgroundColor: select ? Colors.ThemeBlue : Colors.White},
            ]}>
            <View>
              <HomeSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('profilescreen')}>
            <ProfileSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('schooladmission')}>
            <AdmissionSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Admissions</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('schoolnotification')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>2</Text>
              </View>
              <NotificationSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('schoolstudentlist')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>2</Text>
              </View>
              <ConnectSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Students</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('schoolmessages')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>5</Text>
              </View>
              <ChatSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Group Chats</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('schoolwallet')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>5</Text>
              </View>
              <ChatSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Wallet</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('schooladsaccount')}
            style={styles.Content}>
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Ads</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('schoolfees')}>
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Fees</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            //   onPress={()=>navigation.navigate('home')}
          >
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() =>
              navigation.navigate('forgotpass', {type: 'changepass'})
            }>
            <PassSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Change Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Content} onPress={logOut}>
            <LogoutSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* For Teachers */}
      {props.teacher == true ? (
        <View style={styles.TeacherView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('homescreen')}
            style={[
              styles.Content,
              {backgroundColor: select ? Colors.ThemeBlue : Colors.White},
            ]}>
            <View>
              <HomeSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('profilescreen')}>
            <ProfileSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('teacheradmission')}>
            <AdmissionSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Admissions</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('teachernotification')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>2</Text>
              </View>
              <NotificationSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('teacherstudentlist')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>2</Text>
              </View>
              <ConnectSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Students</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('teachermessages')}>
            <View>
              <View style={styles.StatusBox}>
                <Text style={styles.StatusText}>5</Text>
              </View>
              <ChatSvg />
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Group Chats</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Content}>
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Manage Ads</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() => navigation.navigate('teacherfees', {type: 'own'})}>
            <FeesSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Fees Structure</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Content}
            onPress={() =>
              navigation.navigate('forgotpass', {type: 'changepass'})
            }>
            <PassSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Change Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Content} onPress={logOut}>
            <LogoutSvg />
            <View style={styles.TextView}>
              <Text style={styles.Text}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default SideBarContent;

const styles = StyleSheet.create({
  MainView: {
    paddingVertical: moderateScale(20),
  },
  Content: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    borderRadius: scale(4),
    padding: moderateScale(12),
    width: '100%',
    marginTop: verticalScale(10),
  },

  Text: {
    color: Colors.TextDarkGrey,
    fontSize: scale(14),
    fontFamily: Font.Poppins500,
  },
  TextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(20),
  },

  StatusBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(13),
    width: scale(13),
    backgroundColor: Colors.ThemeBlue,
    position: 'absolute',
    borderRadius: scale(30),
    zIndex: 1,
    borderWidth: 1,
    borderColor: Colors.White,
    right: -2,
    top: -2,
  },
  StatusText: {
    fontSize: scale(6),
    fontFamily: Font.Poppins600,
    color: Colors.White,
  },
});
