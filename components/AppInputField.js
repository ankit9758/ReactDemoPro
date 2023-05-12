import React from "react";
import { TextInput } from "react-native-paper";
import { black, green } from "../utils/colors";

const AppInputFiled = ({ value ,placeholder, multiline, keyboardType, secureTextEntry, isLast, onChangeText, editable, blurOnSubmit, ref, onSubmitEditing ,error}) => {
    return (<TextInput placeholder={placeholder} multiline={multiline}
        keyboardType={keyboardType}
        mode="outlined" label={placeholder} value={value}
        inlineImageLeft="search_icon"
        style={{ marginTop: 10, height: 50 }} 
        keyboardAppearance="dark" secureTextEntry={secureTextEntry} numberOfLines={1} cursorColor={green} selectionColor={green} activeOutlineColor={green} outlineStyle={{borderRadius:30}}
        importantForAutofill="yes" returnKeyType={isLast ? "done" : "next"} onChangeText={onChangeText}
        editable={editable} blurOnSubmit={blurOnSubmit} 
        onFocus={onSubmitEditing}  left={<TextInput.Icon icon="account"  />} 
        >
    </TextInput>)
}

export default AppInputFiled;