import React from "react";
import {View, Text, Button} from 'react-native';

export default props =>{
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F1EEDC'
        }}>
            <View style={{flex: 1,alignItems:'center', justifyContent: 'center'}}>
           <Text>Produtos</Text>
           <Button
           title="Home"
           onPress={() => props.navigation.navigate('Home')}
           />
           </View>
        </View>
    )
}