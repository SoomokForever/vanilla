import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const MainPage = () => (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>MainPage Screen!</Text>
    </View>
)

const MainPageStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="mainPageStack" component={MainPage}/>
        </Stack.Navigator>
    )
}

export default MainPageStackNavigator