import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const Category = () => (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Category Screen!</Text>
    </View>
)

const CategoryStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="categoryStack" component={Category}/>
        </Stack.Navigator>
    )
}

export default CategoryStackNavigator