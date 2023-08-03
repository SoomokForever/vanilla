import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchFeed from '../../component/SearchFeed';

const Stack = createStackNavigator()

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="searchStack" component={SearchFeed} />
    </Stack.Navigator>
  )
}

export default SearchStackNavigator