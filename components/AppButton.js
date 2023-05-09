import React from "react";
import {TouchableOpacity, Text } from "react-native"
import stylesApp from '../utils/styles';

export default CustomButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={stylesApp.appButtonContainer}>
      <Text style={stylesApp.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

