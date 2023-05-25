import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LocationsStackNavigator from "./TwoStackNavigator";
import BottomTabNavigator from './BottomTabNavigator';
import TwoStackNavigator from "./TwoStackNavigator";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="mainStak" component={BottomTabNavigator} />
            <Drawer.Screen name="twoStack" component={TwoStackNavigator}/>
            <Drawer.Screen name="threeStack" component={LocationsStackNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator