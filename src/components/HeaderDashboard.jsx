import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { colors } from "../../assets/theme";
import { User, Search, Activity } from "lucide-react-native";

// Terima { navigate } dari Home
export default function HeaderDashboard({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoRow}>
        <Activity color={colors.blue()} size={20} />
        <Text style={styles.logoText}>Fitrack</Text>
      </View>
      
      <View style={styles.greetingRow}>
        <Text style={styles.greetingTitle}>Halo, Pejuang Fit!</Text>
        {/* TOMBOL PROFILE: Klik ini akan buka layar Profile */}
        <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
          <User color={colors.grey()} size={26} />
        </TouchableOpacity>
      </View>

      {/* TOMBOL SEARCH: Klik ini akan buka layar Discover */}
      <TouchableOpacity style={styles.searchBar} activeOpacity={0.8} onPress={() => navigation.navigate('Discover')}>
        <Search color={colors.grey(0.5)} size={18} />
        <View pointerEvents="none" style={{ flex: 1 }}>
          <TextInput 
            placeholder="Cari program latihan..." 
            style={styles.searchInput} 
            editable={false} // Supaya keyboard tidak muncul, karena kita mau pindah halaman
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { backgroundColor: colors.white(), paddingHorizontal: 24, paddingBottom: 25, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, elevation: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, marginBottom: 20 },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 15 },
  logoText: { fontFamily: 'Poppins-ExtraBold', fontSize: 16, color: colors.blue() },
  greetingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greetingTitle: { fontFamily: 'Poppins-Bold', fontSize: 22 },
  profileBtn: { width: 45, height: 45, borderRadius: 23, backgroundColor: colors.grey(0.1), justifyContent: 'center', alignItems: 'center' },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.grey(0.05), borderRadius: 15, paddingHorizontal: 15, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: 'Poppins-Medium' }
});