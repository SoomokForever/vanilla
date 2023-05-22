import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import category from "../screens/category";
import mainPage from "../screens/mainPage";
import feedAdd from "../screens/feedAdd";
import search from "../screens/search";
import account from "../screens/account";

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="mainPage"
            screenOptions={{
                tabBarStyle: { height: 100 },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="category_header"
                component={category} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "ios-list-sharp" : "ios-list-outline"}
                                size={35}
                                color={color} />)
                    }
                }}
            />
            <Tab.Screen
                name="mainPage_header"
                component={mainPage} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            < Ionicons
                                name={focused ? "map" : "map-outline"}
                                size={35}
                                color={color} />)
                    }
                }}
            />
            <Tab.Screen
                name="feedAdd_header"
                component={feedAdd} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "add" : "add-outline"}
                                size={60}
                                color={color} />)
                    }
                }}
            />
            <Tab.Screen
                name="search_header"
                component={search} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "search" : "search-outline"}
                                size={35}
                                color={color} />)
                    }
                }}
            />
            <Tab.Screen
                name="account_header"
                component={account} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "person-circle" : "person-circle-outline"}
                                size={35}
                                color={color} />)
                    }
                }}
            />
        </Tab.Navigator>
    )
};
export default Tabs;