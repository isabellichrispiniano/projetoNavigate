import React from "react";
import {View, Text, Button} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default props => {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F1EEDC'
        }}>
           <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Sobre</Text>
             <Button
              title='Sobre'
              onPress={() => props.navigation.navigate('About') }
             /> 
           </View>
        </View>
    )
}