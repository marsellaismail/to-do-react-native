import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

export default ({isChecked, onChecked, ...props}) => {
    return(
        <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
            <Text style={{color: Colors.lightGray, fontSize: 20}}>{isChecked ? "✓" : ""}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 25,
        height: 25,
        margin: 5,
        backgroundColor: "#fff0",
        color: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.lightGray,
        alignItems: "center",
        justifyContent: "center",
    }
});