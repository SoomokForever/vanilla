import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountStackNavigator from './stack-navigators/AccountStackNavigator';
import CategoryStackNavigator from './stack-navigators/CategoryStackNavigator';
import FeedAddStackNavigator from './stack-navigators/FeedAddStackNavigator';
import MainPageStackNavigator from './stack-navigators/MainPageStackNavigator';
import SearchStackNavigator from './stack-navigators/SearchStackNavigator';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="mainPage"
            screenOptions={{
                tabBarStyle: { height: 70 },
                tabBarShowLabel: false,
                headerShown: true,
            }}>
            <Tab.Screen name="category" component={CategoryStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "ios-list-sharp" : "ios-list-outline"}
                                size={35}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="mainPage" component={MainPageStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            < Ionicons
                                name={focused ? "map" : "map-outline"}
                                size={35}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="feedAdd" component={FeedAddStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "add" : "add-outline"}
                                size={65}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="search" component={SearchStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "search" : "search-outline"}
                                size={35}
                                color={color} />)
                    }
                }} />
            <Tab.Screen name="account" component={AccountStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "person-circle" : "person-circle-outline"}
                                size={35}
                                color={color} />)
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator