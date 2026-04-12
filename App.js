import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';
import ListWorkout from './src/components/ListWorkout';

export default function App() {
  // Fungsi untuk memuat font Poppins
  const [loaded] = useFonts(fontType);

  if (!loaded) {
    return null;
  }

  return (
    // SafeAreaView sebagai container utama
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />
      {/* Memanggil komponen ListWorkout yang berisi seluruh halaman */}
      <ListWorkout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
});