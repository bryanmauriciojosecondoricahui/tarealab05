import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./Screens/HomeScreen";
import StackScreen from "./Screens/StackScreen";
import PlantPriceTable from "./Screens/PlantPriceTable";
import PromotionTable from "./Screens/PromotionTable";
import ContactUsScreen from "./Screens/ContactUsScreen"; // Importa el componente de "Contáctanos"

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Stack" component={StackScreen} />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'purple',
      })}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Precios de las plantas"
        component={PlantPriceTable}
        options={{
          tabBarLabel: 'Precios',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flower" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Promociones"
        component={PromotionTable}
        options={{
          tabBarLabel: 'Promociones',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sale" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contáctanos"
        component={ContactUsScreen} // Agrega el componente de "Contáctanos"
        options={{
          tabBarLabel: 'Contáctanos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
