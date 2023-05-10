import React from 'react';
import { View, ImageBackground } from 'react-native'
import stylesApp from '../utils/styles';


const BackGround = ({children}) => {
    return (<View style={stylesApp.screenContainer}>
        <ImageBackground source={require("../src/assets/background.png")} 
        resizeMode='stretch' style={{height:'100%',width:'100%'}}>
            <View>{children}</View>
        </ImageBackground>
    </View>)

}

export default BackGround;