import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Principal from "../screens/advanced/Principal";
import Perfil from "../screens/advanced/Perfil";
import Contato from "../screens/advanced/Contato";

const Tab = createBottomTabNavigator();

export default function IntermediateTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Principal"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: "#1D4ED8",
        tabBarInactiveTintColor: "#6B7280",
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarLabel: "Principal",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarLabel: "Contato",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "call" : "call-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 17,
    height: 70,
    backgroundColor: "#D0D1D2",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  tabBarLabel: {
    fontSize: 12,
  },
});