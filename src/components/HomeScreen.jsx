import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export default props => {
    return (

        <View style={{
            flex: 1
        }}>
            <ImageBackground source={require('./img/krustiland.jpg')} style={{ flex: 1, }} resizeMode="cover">

                <View style={{ flex: 1 }}>

                    <Text style={Home.txt}>Unforgotten</Text>
                    <Text style={Home.txt2}>Experiences</Text>
                       
                       
                    <Text style={Home.txtParque}>Book your tour whith us we have many</Text>
                    <Text style={Home.txtParque}>packages to explore the world </Text> 

                    <View style={Home.btn}>
                        <Pressable style={Home.botao} onPress={() => props.navigation.navigate('Details')}>
                            <Text style={Home.txtBotao}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const Home = StyleSheet.create(
    {
        txt: {
            fontSize: 40,
            color: 'white',
            textAlign: 'center',
            paddingTop: 50
        },
        txt2: {
            fontSize: 40,
            color: 'white',
            textAlign: 'center',

        },
        txtBotao: {
            color: 'white'
        },
        txtParque:{
            color:'white',
            fontSize:15,
            textAlign:'center'
        },
        botao: {
            backgroundColor: '#E72929',
            padding: 17,
            borderRadius: 10,
            paddingLeft: 100,
            paddingRight: 100,
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 10,
        },
        btn:{
            position:'absolute',
            bottom:70,
            margin:80,
            alignItems:'center'
        }
    }
)

