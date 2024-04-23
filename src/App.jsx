import React from "react";
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import Details from "./components/Details";
import Products from "./components/Products";
import About from "./components/About";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={Details}  />
                    <Stack.Screen name="Products" component={Products} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}