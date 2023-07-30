import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text } from 'react-native';

const Stack = createStackNavigator();

const MainPage = () => (
    <View>
        <Text>hi</Text>
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

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      overflow: 'hidden',
    },
})