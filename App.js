import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';

// Import semua halaman yang sudah kita buat
import Home from './src/screens/Home';
import Discover from './src/screens/Discover';
import Profile from './src/screens/Profile';

export default function App() {
  const [loaded] = useFonts(fontType);
  
  // STATE NAVIGASI: Defaultnya buka halaman 'Home'
  const [currentScreen, setCurrentScreen] = useState('Home');

  if (!loaded) return null;

  // FUNGSI UNTUK PINDAH HALAMAN
  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white() }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />
      
      {/* Jika currentScreen === 'Home', tampilkan Home, dst. */}
      {/* Kita juga mengirimkan "remot" (fungsi navigate) ke setiap halaman */}
      {currentScreen === 'Home' && <Home navigate={navigate} />}
      {currentScreen === 'Discover' && <Discover navigate={navigate} />}
      {currentScreen === 'Profile' && <Profile navigate={navigate} />}
      
    </SafeAreaView>
  );
}