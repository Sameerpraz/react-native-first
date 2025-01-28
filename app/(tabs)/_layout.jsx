import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { TabBarIcon } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        headerTitleAlign: "cent",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        // name="contact"
        // options={{
        //   title: "Contact Us",
        //   tabBarIcon: ({ color, focused }) => (
        //     <Ionicons
        //       size={28}
        //       name={focused ? "people.fill" : "contact.fill"}
        //       color={color}
        //     />
        //   ),
        // }}

        name="contact"
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people-circle" : "people-circle-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
