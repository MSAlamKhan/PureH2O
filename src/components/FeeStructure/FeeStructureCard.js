import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../utils/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../../utils/font';
import { GlobalStyle } from '../../Constants/GlobalStyle';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { submitfeeStructure } from '../../redux/actions/AuthAction';
import OptionsModal from '../Common/CommonModals/OptionsModal';
import Feather from 'react-native-vector-icons/Feather';


const FeeStructureCard = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [fees_data, setFeesData] = useState([]);
    const [showAdd, setshowAdd] = useState(false);
    const [newClass, setNewClass] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [showEdit, setShowEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(-1); // Initialize with -1 to indicate no item is being edited
    const [editedClass, setEditedClass] = useState('');
    const [editedAmount, setEditedAmount] = useState('');

    const handleDeleteClass = () => {
        // Implement the deletion of the last class and its amount
        const updatedData = fees_data.slice(0, fees_data.length - 1);
        setFeesData(updatedData);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const onSubmit = () => {
        if (props.typee == 'signup' && fees_data.length > 0) {
            dispatch(submitfeeStructure(fees_data));
        } else {
            alert('Add one');
        }
    };
    const handleAddClass = () => {
        if (newClass && newAmount) {
            const newData = {
                //   id: fees_data.length + 1,
                class: newClass,
                amount: newAmount,
            };
            setFeesData([...fees_data, newData]);
            setNewClass('');
            setNewAmount('');
        }
    };
    const handleDelete = (index) => {
        const neewData = fees_data?.filter((item, ind) => ind != index)
        setFeesData(neewData)
    }
    const handleEdit = (item, index) => {
        setEditIndex(index);
        setEditedClass(item.class);
        setEditedAmount(item.amount);
    };
    const handleUpdate = () => {
        setShowEdit(false)
        if (editedClass && editedAmount) {
            const updatedData = fees_data.map((item, index) =>
                index === editIndex
                    ? { ...item, class: editedClass, amount: editedAmount }
                    : item
            );
            setFeesData(updatedData);
            setEditIndex(-1); // Exit edit mode
            setEditedClass('');
            setEditedAmount('');

        }
    };

    return (
        <View style={styles.MainView}>
            <View style={GlobalStyle.RowBetween}>
                <Text style={styles.MainHeadingText}>Monthly Fees</Text>
                {
                    showEdit ? null :
                        <TouchableOpacity onPress={() => setShowEdit(true)}>
                            <Text style={styles.EditText}>Edit</Text>
                        </TouchableOpacity>
                }
            </View>

            <View style={styles.TableView}>
                <View style={styles.TitleView}>
                    <Text style={styles.TitleText}>Class</Text>
                    <Text style={styles.TitleText}>Amount</Text>
                </View>

                {fees_data?.map((data, index) => (
                    <>
                        <View style={{ flex: 1, flexDirection: 'row', overflow: 'hidden' }} key={index}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.DetailText}>{data.class}</Text>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                    <Text style={styles.DetailText}>{data.amount}</Text>
                                </View>
                                {
                                    showEdit &&
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TouchableOpacity onPress={() => handleEdit(data, index)}>
                                            <Feather
                                                style={{ marginRight: scale(5) }}
                                                name="edit"
                                                size={scale(18)}
                                                color={'white'}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleDelete(index)}>
                                            <Feather name="delete" size={scale(20)} color={'white'} />
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                    </>
                ))}


                {
                    editedClass || editedAmount ?
                        <View style={styles.InputContainer}>
                            <TextInput
                                placeholder={'Enter Class'}
                                placeholderTextColor={Colors.placeholderTextColor}
                                value={editedClass}
                                onChangeText={(text) => setEditedClass(text)}
                                style={styles.TextInputStyle}
                            />
                            <TextInput
                                placeholder={'Enter Amount'}
                                placeholderTextColor={Colors.placeholderTextColor}
                                value={editedAmount}
                                onChangeText={(text) => setEditedAmount(text)}
                                style={styles.TextInputStyle}
                                keyboardType="numeric"
                            />
                            <View>
                                <TouchableOpacity onPress={handleUpdate} style={styles.AddButton}>
                                    <Text style={styles.AddButtonText}>Update</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        :
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
                                    textStyle={{ color: Colors.SignUpGrey }}
                                />
                            </View>
                        </View>
                }
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
                MoreBox={{ marginVertical: verticalScale(2) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
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
})
export default FeeStructureCard
