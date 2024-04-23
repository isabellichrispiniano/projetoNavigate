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
            <Text>Detalhes</Text>
             <Button
              title='Produtos'
              onPress={() => props.navigation.navigate('Products') }
             /> 
           </View>
        </View>
    )
}