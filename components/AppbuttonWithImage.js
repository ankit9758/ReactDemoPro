import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native"
import stylesApp from '../utils/styles';
import LinearGradient from "react-native-linear-gradient";
import AppIcon from "react-native-vector-icons/FontAwesome"

export default CustomButtonWithImage = ({ onPress, title, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      colors={["#ff3399", "#259399", "#4d79ff", "#ff0000", "#ffff66"]}
      style={stylesApp.appButtonContainer}>
      <Image resizeMethod="auto" style={{width: '20%', height: '100%',marginRight:50}}
          source={{uri:icon}}>
      </Image>
      <Text style={stylesApp.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>

);


