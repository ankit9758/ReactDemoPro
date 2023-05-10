import React from "react";
import { TextInput } from "react-native-paper";
import { black, green } from "../utils/colors";

const AppInputFiled=({placeholder,multiline,keyboardType,secureTextEntry,isLast,onChangeText,editable})=>{
    return (<TextInput placeholder={placeholder} multiline={multiline}
         keyboardType={keyboardType}
         mode="outlined"
        inlineImageLeft="search_icon"
        style={{marginTop:10,height:50}}
    keyboardAppearance="dark" secureTextEntry={secureTextEntry} numberOfLines={1} cursorColor={green}
    importantForAutofill="yes" returnKeyType={isLast?"done":"next"} onChangeText={onChangeText} editable={editable}>
    </TextInput>)
}

export default AppInputFiled;