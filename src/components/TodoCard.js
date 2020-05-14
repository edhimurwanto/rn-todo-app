import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import VectorIcon from 'react-native-vector-icons/Feather';
const screenWidth = Dimensions.get('screen').width

const TodoCard = (props) => {

    const { data: { value }, index, handleClickEdit, handleDeleteTodo } = props;
    const [text, setTodo] = useState(value);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleClickSave = () => {

        handleClickEdit({ text, index })
        setBtnDisabled(true)

    }

    const handleClick = () => {
        setBtnDisabled(false)
    }

    const EditIcon = () => <VectorIcon
        name='edit'
        size={24}
        style={{ marginRight: 24 }}
        onPress={handleClick}
    />

    const SaveIcon = () => <VectorIcon
        name='check-square'
        size={24}
        style={{ marginRight: 24 }}
        onPress={handleClickSave}
    />

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    selectionColor='purple'
                    style={{ backgroundColor: '#fff', width: screenWidth - 120, }}
                    value={text}
                    disabled={btnDisabled}
                    onChangeText={(text) => setTodo(text)}
                />
                <View style={{ flexDirection: 'row' }}>
                    {
                        btnDisabled ? <EditIcon /> : <SaveIcon />
                    }
                    <VectorIcon
                        name='trash'
                        size={24}
                        style={{ marginRight: 8 }}
                        onPress={() => handleDeleteTodo(index)}
                    />
                </View>
            </View>
            <Divider style={styles.divider} />
        </>
    );
};

export default TodoCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'purple'
    },
    subtitle: {
        fontSize: 12,
        color: '#aaa'
    },
    divider: {
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    }
})