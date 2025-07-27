import { TabBar } from "@/components/tabs";
import { Tabs } from "expo-router";
import { Bookmark, Chrome as HomeIcon, Search } from "lucide-react-native";
import "../globals.css";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 90,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#888888',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          tabBarIcon: ({ color }) => <Bookmark color={color} />,
        }}
      />
    </Tabs>
  );
}
