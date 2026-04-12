import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { Timer, Flame, Play } from "lucide-react-native";
import HeaderDashboard from "../components/HeaderDashboard";
import WorkoutCard from "../components/WorkoutCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Cardio");
  const categories = ["Cardio", "Strength", "Yoga", "Pilates"];

  return (
    // Gunakan contentContainerStyle agar padding bawah berfungsi
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <HeaderDashboard />

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <ImageBackground
          style={styles.heroImage}
          resizeMode="cover"
          imageStyle={{ borderRadius: 24 }}
          source={{ uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800" }}
        >
          <View style={styles.heroOverlay}>
            <View>
              <Text style={styles.badgeText}> 🔥 Target Hari Ini</Text>
              <Text style={styles.heroTitle}>Full Body HIIT Workout</Text>
              <View style={styles.heroStats}>
                <Timer color={colors.white()} size={16} />
                <Text style={styles.heroStatText}>45 Menit</Text>
                <Flame color={colors.white()} size={16} style={{ marginLeft: 12 }} />
                <Text style={styles.heroStatText}>500 Kkal</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Play fill={colors.blue()} color={colors.blue()} size={22} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Bagian Kategori */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Pilih Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 24 }}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.categoryBtn, activeCategory === item && { backgroundColor: colors.blue() }]} 
              onPress={() => setActiveCategory(item)}
            >
              <Text style={[styles.categoryBtnText, activeCategory === item && { color: colors.white() }]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* INI BAGIAN REKOMENDASI KELAS YANG HARUS DITAMBAHKAN */}
      <View style={styles.verticalListContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Rekomendasi Kelas</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardList}>
          {/* Pastikan memanggil WorkoutCard dan mengisi props-nya */}
          <WorkoutCard 
            image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500"
            category="Kekuatan"
            title="Angkat Beban Pemula"
            duration="30 Menit"
          />
          <WorkoutCard 
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500"
            category="Yoga"
            title="Yoga Pagi Menenangkan"
            duration="20 Menit"
          />
          <WorkoutCard 
            image="https://images.unsplash.com/photo-1518611012118-29606d53012f?w=500"
            category="Cardio"
            title="HIIT Home Workout"
            duration="15 Menit"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: 40 },
  heroSection: { paddingHorizontal: 24, marginBottom: 30 },
  heroImage: { width: "100%", height: 200, borderRadius: 24 },
  heroOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: 24, padding: 24, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end' },
  badgeText: { color: colors.white(), fontFamily: 'Poppins-SemiBold', backgroundColor: 'rgba(255, 255, 255, 0.25)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, fontSize: 12, marginBottom: 12, overflow: 'hidden' },
  heroTitle: { color: colors.white(), fontFamily: 'Poppins-ExtraBold', fontSize: 24, marginBottom: 10, width: 200, lineHeight: 30 },
  heroStats: { flexDirection: 'row', alignItems: 'center' },
  heroStatText: { color: colors.white(), fontFamily: 'Poppins-Medium', fontSize: 12, marginLeft: 6 },
  playButton: { backgroundColor: colors.white(), width: 54, height: 54, borderRadius: 27, justifyContent: 'center', alignItems: 'center' },
  categoryContainer: { marginBottom: 30 },
  sectionTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, color: colors.black(), paddingHorizontal: 24, marginBottom: 16 },
  categoryBtn: { paddingHorizontal: 22, paddingVertical: 12, borderRadius: 30, backgroundColor: colors.grey(0.08) },
  categoryBtnText: { fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.grey() },
  
  // Style untuk List Rekomendasi
  verticalListContainer: { marginTop: 5 },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 24 },
  seeAllText: { fontFamily: 'Poppins-SemiBold', fontSize: 14, color: colors.blue(),paddingBottom: 18 },
  cardList: { paddingHorizontal: 20, marginTop: 16, gap: 16 }
});