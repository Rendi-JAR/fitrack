import React from 'react';
import { StatusBar } from 'react-native';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';

// Import Library Navigasi
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon, Search, User } from 'lucide-react-native'; // Ikon untuk Tab Bar

// Import Screens
import Home from './src/screens/Home';
import Discover from './src/screens/Discover';
import Profile from './src/screens/Profile';
import DetailWorkout from './src/screens/DetailWorkout'; // Import layar baru kita

// Inisialisasi Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Buat Komponen Bottom Tabs (Navigation Bar)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Sembunyikan header bawaan
        tabBarActiveTintColor: colors.blue(),
        tabBarInactiveTintColor: colors.grey(0.5),
        tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 10 },
        tabBarLabelStyle: { fontFamily: 'Poppins-Medium', fontSize: 10 }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} /> }} 
      />
      <Tab.Screen 
        name="Discover" 
        component={Discover} 
        options={{ tabBarIcon: ({ color }) => <Search color={color} size={24} /> }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ tabBarIcon: ({ color }) => <User color={color} size={24} /> }} 
      />
    </Tab.Navigator>
  );
}

// 2. Bungkus Tab dengan Stack (Agar Detail bisa menimpa Tab Bar)
export default function App() {
  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* MainTabs adalah layar utamanya (yang punya navbar di bawah) */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        
        {/* DetailWorkout menggunakan Stack agar muncul di atas navbar */}
        <Stack.Screen name="DetailWorkout" component={DetailWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}