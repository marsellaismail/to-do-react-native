import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Button from '../components/Button';

export default ({navigation, route}) => {
    const [title, setTitle] = useState(route.params.title || "");
    const [color, setColor] = useState(route.params.color || Colors.blue);
    const [isValid, setValidity] = useState(true)
    return(
        <View style={styles.container}>
            <View>
                <View style = {{flexDirection:"row"}}>
                    <Text style={styles.label}>List Name</Text>
                </View>
                <TextInput 
                underlineColorAndroid={"transparent"}
                selectionColor={"transparent"}
                autoFocus={true}
                value={title}
                onChangeText={(text) => {
                    setTitle(text);
                    setValidity(true);
                }}
                placeholder={"New List Name"}
                maxLength={30}
                style={[styles.input, { outline: "none" }]}
            /> 
                {!isValid && <Text style={{marginLeft: 4, color: Colors.red, fontSize: 16}}>*List Name cannot be empty</Text>}

            </View>
            <Button text="Save" onPress={() => {
                if(title.length>1){
                    route.params.saveChanges({title, color});
                    navigation.dispatch(CommonActions.goBack());
                }
                else {
                    setValidity(false);
                }
            }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "space-between",
    },
    input: {
        color: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 30,
        fontSize: 22,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: Colors.darkGray,
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: 22,
        marginBottom:8,
        marginHorizontal: 5,
        padding: 3

    }
})