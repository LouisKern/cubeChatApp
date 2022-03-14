/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import {Octicons, MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';
import ContactsScreen from '../screens/ContactsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "white"
      },
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      title: "Liste des conversations",
          headerRight: () => {
            return <view style={{
            flexDirection: "row",
            width: 60,
            justifyContent: "space-between", 
            marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={"black"} style={{marginRight: 10}}/>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={"black"}/>
            </view>;
          }
    }}>
      <Stack.Screen 
        name="ChatList" 
        component={ChatScreen} 
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route }) => ( {
          title: route.params.name,
          headerRight: () => (
            <View style={{
            flexDirection: "row",
            marginRight: 10,
            }}>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={"black"}/>
            </View>
          )
        })} 
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

