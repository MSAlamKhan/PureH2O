import {
  scale,
  verticalScale,
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';
import {Colors} from '../utils/Colors';
import {Font} from '../utils/font';

export const GlobalStyle = {
  Container: {
    flex: 1,
    backgroundColor: Colors.ThemeBlue,
  },
  LightContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  SkyBlueContainer: {
    flex: 1,
    backgroundColor: '#F3F6FF',
  },

  GreyBox: {
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    flex: 1,
    backgroundColor: Colors.GreyBox,
    paddingHorizontal: moderateScale(15),
  },

  errorblack: {
    color: Colors.Black,
    fontSize: scale(12),
    marginLeft: scale(5),
    marginBottom: verticalScale(-10),
    fontFamily: Font.Manrope400,
    top: scale(1),
  },

  ph20flex: {
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  ph20: {
    paddingHorizontal: moderateScale(20),
  },

  CustomButtonRestyle: {
    borderColor: Colors.White,
    borderRadius: scale(30),
    marginTop: verticalScale(30),
    width: '85%',
    height: verticalScale(50),
    borderWidth: 1,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  RowBetween : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems:'center',
  
  },
  ImpDot: {
    backgroundColor: Colors.ThemeBlue,
    height: scale(10),
    width: scale(10),
    borderRadius: scale(20),
    alignSelf: 'center',
  },

  ModalText: {
    fontSize: scale(16),
    textAlign: 'center',
    padding: moderateScale(20),
    fontFamily: Font.Gilroy600,
    color: Colors.ThemeBlue,
  },
  ModalContainer: {
    justifyContent: 'center',
    width: '70%',
    borderRadius: scale(10),
    backgroundColor: Colors.Main,
    alignSelf: 'center',
  },
  MainModal: {
    justifyContent: 'center',
    margin: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  ModalLine: {
    width: '25%',
    height: verticalScale(4),
    backgroundColor: Colors.Grey,
    alignSelf: 'center',
    borderRadius: scale(10),
    marginTop: verticalScale(20),
  },
  SocialSignInButton: {
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: Colors.White,
    alignItems: 'center',
    marginTop: verticalScale(20),
    paddingVertical: moderateVerticalScale(12),
  },
  Heading: {
    color: Colors.White,
    fontFamily: Font.Poppins800,
    fontSize: scale(20),
    textAlign: 'center',
  },
  SubHeading: {
    color: Colors.SignInText,
    fontFamily: Font.Manrope400,
    fontSize: scale(14),
    marginTop: verticalScale(12),
    textAlign: 'center',
    marginBottom: verticalScale(5),
  },
  Height: {
    height: verticalScale(75),
  },

  WhiteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.White,
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxStyles: {
    // backgroundColor: 'transparent',
    // height: verticalScale(50),
    alignItems: 'center',
    // borderRadius: scale(20),
    // marginTop: verticalScale(20),
    // borderWidth: scale(1),
    // borderColor: Colors.White,
    flexDirection: 'row',
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    height: verticalScale(50),
    backgroundColor: Colors.White,
    borderWidth: scale(1),
    borderColor: Colors.White,
    borderRadius: scale(25),
  },
  inputStyles: {
    color: Colors.placeholderTextColor,
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
  },
  dropdownTextStyles: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize:scale(14)
    
  },
  dropdownItemStyles: {
    backgroundColor: Colors.White,
  },
  dropdownStyles: {
    backgroundColor: Colors.White,
    borderWidth: scale(1),
    borderColor: Colors.placeholderTextColor,
  },
};
