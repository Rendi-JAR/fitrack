// Tambahkan useState dari react
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { Timer, Flame, Play } from "lucide-react-native";

import HeaderDashboard from "./HeaderDashboard";
// Import komponen WorkoutCard yang baru dibuat
import WorkoutCard from "./WorkoutCard";

export default function ListWorkout() {
  // PENERAPAN STATE: Menyimpan kategori yang sedang dipilih (Default: Cardio)
  const [activeCategory, setActiveCategory] = useState("Cardio");

  // Daftar kategori untuk mempermudah render
  const categories = ["Cardio", "Strength", "Yoga", "Pilates"];

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      <HeaderDashboard />

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <ImageBackground
          style={styles.heroImage}
          resizeMode="cover"
          imageStyle={{ borderRadius: 24 }}
          source={{ uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" }}
        >
          <View style={styles.heroOverlay}>
            <View>
              <Text style={styles.badgeText}>🔥 Target Hari Ini</Text>
              <Text style={styles.heroTitle}>Full Body HIIT Workout</Text>
              <View style={styles.heroStats}>
                <Timer color={colors.white()} size={16} />
                <Text style={styles.heroStatText}>45 Menit</Text>
                <Flame color={colors.white()} size={16} style={{ marginLeft: 12 }} />
                <Text style={styles.heroStatText}>500 Kkal</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
              <Play fill={colors.blue()} color={colors.blue()} size={22} style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Komponen Kategori Latihan dengan STATE */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Pilih Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 24 }}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={index}
              // Mengubah style berdasarkan state aktif
              style={[styles.categoryBtn, activeCategory === item && { backgroundColor: colors.blue() }]} 
              activeOpacity={0.7}
              // Mengubah nilai state saat diklik
              onPress={() => setActiveCategory(item)}
            >
              <Text style={[styles.categoryBtnText, activeCategory === item && { color: colors.white() }]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Komponen Daftar Kelas Rekomendasi dengan PROPS */}
      <View style={styles.verticalListContainer}>
        <View style={styles.listHeader}>
          <Text style={[styles.sectionTitle, {marginBottom: 0}]}>Rekomendasi Kelas</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.seeAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardList}>
          {/* Menggunakan komponen WorkoutCard dan mengirimkan PROPS */}
          <WorkoutCard 
            image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
            category="Kekuatan Otot"
            title="Angkat Beban Pemula"
            duration="30 Menit"
          />
          <WorkoutCard 
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
            category="Fleksibilitas"
            title="Yoga Pagi Menenangkan"
            duration="20 Menit"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  heroSection: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 24,
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  badgeText: {
    color: colors.white(),
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    fontSize: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  heroTitle: {
    color: colors.white(),
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 24,
    marginBottom: 10,
    width: 200,
    lineHeight: 30,
  },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroStatText: {
    color: colors.white(),
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    marginLeft: 6,
  },
  playButton: {
    backgroundColor: colors.white(),
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.black(),
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  categoryBtn: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: colors.grey(0.08),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBtnText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.grey(),
  },
  verticalListContainer: {
    paddingBottom: 40,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 24,
    marginBottom: 16,
  },
  seeAllText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.blue(),
  },
  cardList: {
    paddingHorizontal: 24,
    gap: 16,
  },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: colors.white(),
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey(0.1),
  },
  cardImage: {
    width: 86,
    height: 86,
    borderRadius: 16,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  cardCategory: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.blue(),
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.black(),
    marginBottom: 8,
  },
  cardInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardInfoText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.grey(),
    marginLeft: 6,
  },
  iconArrow: {
    padding: 8,
    backgroundColor: colors.blue(0.05),
    borderRadius: 12,
    marginRight: 4,
  }
});