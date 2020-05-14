import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#fff'
            }}>{props.title}</Text>
        </View>
    );
};

export default MyHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        backgroundColor: 'purple',
        alignItems: 'center',
        paddingHorizontal: 16
    }
})

