import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventFeedScreen from '../screens/EventFeedScreen';
import { colors } from '../theme/colors';

export type RootStackParamList = {
  EventFeed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="EventFeed" component={EventFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
