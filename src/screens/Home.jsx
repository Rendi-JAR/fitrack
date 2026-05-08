import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
// IMPORT SAFEAREAVIEW DI SINI
import { SafeAreaView } from "react-native-safe-area-context"; 
import { colors } from "../../assets/theme";
import { Play } from "lucide-react-native";
import HeaderDashboard from "../components/HeaderDashboard";
import WorkoutCard from "../components/WorkoutCard";
import { workoutData } from "../data/workoutData";

export default function Home({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Cardio", "Strength", "Yoga", "Pilates"];

  const filteredWorkouts = workoutData.filter((item) => 
    activeCategory === "Semua" ? true : item.category === activeCategory
  );

  return (
    // BUNGKUS DENGAN SAFEAREAVIEW AGAR TIDAK NABRAK JAM/BATERAI
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white() }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderDashboard navigation={navigation} />
        
        <View style={styles.heroSection}>
          <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800" }} style={styles.heroImage} imageStyle={{ borderRadius: 24 }}>
            <View style={styles.heroOverlay}>
              <View>
                <Text style={styles.badgeText}>🔥 Target Hari Ini</Text>
                <Text style={styles.heroTitle}>Full Body HIIT</Text>
              </View>
              <View style={styles.playButton}>
                <Play fill={colors.blue()} color={colors.blue()} size={20} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pilih Kategori</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 10 }}>
            {categories.map((item) => (
              <TouchableOpacity 
                key={item} 
                onPress={() => setActiveCategory(item)}
                style={[styles.catBtn, activeCategory === item && { backgroundColor: colors.blue() }]}>
                <Text style={[styles.catText, activeCategory === item && { color: colors.white() }]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>Rekomendasi ({filteredWorkouts.length})</Text>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            {filteredWorkouts.map((workout) => (
              <WorkoutCard 
                key={workout.id}
                image={workout.image} category={workout.category} title={workout.title} duration={workout.duration}
                onPress={() => navigation.navigate('DetailWorkout', { workout: workout })}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heroSection: { paddingHorizontal: 24, marginBottom: 30 },
  heroImage: { width: "100%", height: 180 },
  heroOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 24, padding: 20, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  heroTitle: { color: 'white', fontFamily: 'Poppins-Bold', fontSize: 20 },
  playButton: { backgroundColor: 'white', width: 45, height: 45, borderRadius: 23, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: 'white', fontSize: 10, fontFamily: 'Poppins-Bold', backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, alignSelf: 'flex-start', marginBottom: 5 },
  section: { marginBottom: 25 },
  sectionTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, paddingHorizontal: 24, marginBottom: 15, color: colors.black() },
  catBtn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, backgroundColor: colors.grey(0.08) },
  catText: { fontFamily: 'Poppins-Medium', color: colors.grey() },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 24 },
  seeAll: { color: colors.blue(), fontFamily: 'Poppins-SemiBold', fontSize: 14 }
});