import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { colors } from "../../assets/theme";
import { User, Search, Activity } from "lucide-react-native";

export default function HeaderDashboard() {
  return (
    // Kontainer Utama Header (Kotak Putih berbayang dengan sudut bawah membulat)
    <View style={styles.headerContainer}>
      
      {/* 1. Baris Logo (Ditambahkan sesuai permintaan) */}
      <View style={styles.logoRow}>
        <Activity color={colors.blue()} size={22} />
        <Text style={styles.logoText}>Fitrack</Text>
      </View>

      {/* 2. Baris Sapaan dan Profil */}
      <View style={styles.greetingRow}>
        <View style={styles.greetingTextContainer}>
          <Text style={styles.greetingTitle}>Halo, Pejuang Fit!</Text>
        </View>

        {/* Tombol Profil Polos (Sejajar dengan teks sapaan) */}
        <TouchableOpacity style={styles.profileBtnPlain} activeOpacity={0.7}>
          <User color={colors.grey()} size={25} />
        </TouchableOpacity>
      </View>

      {/* 3. Kolom Pencarian (Search Bar) */}
      <View style={styles.searchBar}>
        <Search color={colors.grey()} size={22} />
        <TextInput 
          placeholder="Cari program latihan..." 
          style={styles.searchInput}
          placeholderTextColor={colors.grey(0.6)}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white(),
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 20,
    // Efek shadow melayang
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 25, // Jarak header dengan konten kartu di bawahnya
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16, // Jarak logo ke teks sapaan
  },
  logoText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 18,
    color: colors.blue(),
    letterSpacing: 0.5,
  },
  greetingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Mensejajarkan profil dan teks secara vertikal
    marginBottom: 25, // Jarak ke search bar
  },
  greetingTextContainer: {
    flex: 1,
  },
  greetingTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
    color: colors.black(),
  },
  profileBtnPlain: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.grey(0.1), 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey(0.08), 
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.black(),
    marginTop: 2, // Menyelaraskan posisi teks vertikal bawaan font Poppins
  },
});