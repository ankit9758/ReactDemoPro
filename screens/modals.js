import React from 'react';
import { useState } from 'react';
import { View, Text, ImageBackground, Modal, ActivityIndicator, Touchable, TouchableOpacity } from 'react-native';
import { black, green, white } from '../utils/colors';
import stylesApp from '../utils/styles';
import AppButton from '../components/AppButton';


const AllModals = () => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={{ backgroundColor: 'orange', flex: 1 }} onPress={() => { setVisible(true) }}>
    
        <Modal visible={visible} transparent={true}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity  onPress={() => { setVisible(false) }}>
              <View style={{
                width: 400, height: 200,
                backgroundColor: white, borderRadius: 20, justifyContent: 'center',alignItems:'center'
              }}>
             <Text style={[stylesApp.appTextBold20, {marginTop: 10,color:black }]}>do you want to logout ? </Text>
             <View style={{flexDirection:'row',marginTop:20}}>
             <View style={{height:70,flex:1}}>
             <AppButton title={'Lolhjkghjgjgin'} />
             </View>
             <View style={{height:70,flex:1}}>
             <AppButton  title={'Signup'}  onPress={()=>console.warn('Hellddo')} />
             </View>
             
           
             </View>
        
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>

  )

};
export default AllModals;
