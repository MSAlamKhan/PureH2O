import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import OptionsModal from './CommonModals/OptionsModal';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {submitfeeStructure} from '../../redux/actions/AuthAction';

const FeesComponent = ({type, ...props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const [showAdd, setshowAdd] = useState(false);
  const [newClass, setNewClass] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const handleAddClass = () => {
    if (newClass && newAmount) {
      const newData = {
        id: fees_data.length + 1,
        class: newClass,
        amount: newAmount,
      };
      setFeesData([...fees_data, newData]);
      setNewClass('');
      setNewAmount('');
    }
  };

  const handleEditClass = () => {
    // Find the class being edited based on the editingId and update its values
    if (newClass && newAmount && editingId !== null) {
      const updatedData = fees_data.map(item => {
        if (item.id === editingId) {
          return {
            ...item,
            class: newClass,
            amount: newAmount,
          };
        }
        return item;
      });
      setFeesData(updatedData);
      setNewClass('');
      setNewAmount('');
      setEditingId(null); // Reset the editingId after editing is done
    }
  };
  const handleDeleteClass = () => {
    // Implement the deletion of the last class and its amount
    const updatedData = fees_data.slice(0, fees_data.length - 1);
    setFeesData(updatedData);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [fees_data, setFeesData] = useState(
    props.design
      ? []
      : [
          {id: 1, class: 'One A', amount: '14500'},
          {id: 2, class: 'Ten C', amount: '14500'},
          {id: 3, class: 'Three B', amount: '14500'},
          {id: 4, class: 'Five A', amount: '14500'},
          {id: 5, class: 'Nine A', amount: '14500'},
        ],
  );
  console.log('fees_data', fees_data);

  const onSubmit = () => {
    if (props.typee == 'signup' && fees_data.length > 0) {
      // dispatch(submitfeeStructure(fees_data));
    } else {
      alert('Add one');
    }
  };
  return (
    <View style={styles.MainView}>
      <View style={GlobalStyle.RowBetween}>
        <Text style={styles.MainHeadingText}>Monthly Fees</Text>
        {type === 'other' ? null : type != 'other' && props.edit ? (
          <TouchableOpacity onPress={openModal}>
            <Text style={styles.EditText}>Edit</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.TableView}>
        <View style={styles.TitleView}>
          <Text style={styles.TitleText}>Class</Text>
          <Text style={styles.TitleText}>Amount</Text>
        </View>

        {fees_data?.map((data, index) => (
          <View key={index} style={styles.DetailView}>
            <Text style={styles.DetailText}>{data.class}</Text>
            <Text style={styles.DetailText}>{data.amount}</Text>
          </View>
        ))}

        {/* Add Class and Amount Input */}
        {!showAdd ? (
          <View style={styles.InputContainer}>
            <TextInput
              placeholder={'Enter Class'}
              placeholderTextColor={Colors.placeholderTextColor}
              value={newClass}
              onChangeText={text => setNewClass(text)}
              style={styles.TextInputStyle}
            />
            <TextInput
              placeholder={'Enter Amount'}
              placeholderTextColor={Colors.placeholderTextColor}
              value={newAmount}
              onChangeText={text => setNewAmount(text)}
              style={styles.TextInputStyle}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleAddClass} style={styles.AddButton}>
              <Text style={styles.AddButtonText}>Add Class</Text>
            </TouchableOpacity>
            <View>
              <CustomButton
                title={'Submit'}
                // title={'Next'}
                // onPress={() => navigation.navigate('signin')}
                onPress={() => onSubmit()}
                containerRestyle={{
                  backgroundColor: Colors.PublishButton,
                  borderRadius: scale(30),
                  marginTop: verticalScale(30),
                }}
                textStyle={{color: Colors.SignUpGrey}}
              />
            </View>
          </View>
        ) : null}
      </View>

      <OptionsModal
        onlyTwo={true}
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        OptionOne={'Add Class'}
        onPress={() => {
          setshowAdd(!showAdd);
          setModalVisible(false);
        }}
        OptionTwo={'Delete Class'}
        onPressTwo={handleDeleteClass}
        ModalRestyle={{
          position: 'absolute',
          right: scale(10),
          top: verticalScale(35),
        }}
        MoreBox={{marginVertical: verticalScale(2)}}
      />
    </View>
  );
};

export default FeesComponent;

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Colors.FeesBox,
    borderRadius: scale(12),
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(15),
  },
  MainHeadingText: {
    color: Colors.Black,
    fontFamily: Font.Poppins600,
    fontSize: scale(25),
    textAlign: 'center',
  },
  TitleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: verticalScale(5),
    marginTop: verticalScale(25),
  },

  TitleText: {
    fontFamily: Font.Poppins700,
    fontSize: scale(22),
    color: Colors.White,
  },

  DetailView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: verticalScale(10),
  },

  DetailText: {
    fontSize: scale(18),
    fontFamily: Font.Poppins600,
    color: Colors.White,
  },

  EditText: {
    fontSize: scale(16),
    fontFamily: Font.Poppins600,
    color: Colors.White,
  },
  InputContainer: {
    marginTop: verticalScale(25),
  },
  TextInputStyle: {
    backgroundColor: Colors.White,
    borderRadius: scale(8),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    marginBottom: verticalScale(10),
    fontFamily: Font.Poppins600,
    color: Colors.Black,
    fontSize: scale(16),
  },
  AddButton: {
    backgroundColor: Colors.ThemeBlue,
    borderRadius: scale(8),
    paddingVertical: moderateScale(8),
    alignItems: 'center',
  },
  AddButtonText: {
    color: Colors.White,
    fontFamily: Font.Poppins600,
    fontSize: scale(16),
  },
});
