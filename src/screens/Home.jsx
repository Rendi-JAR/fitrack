import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../assets/theme";
import { ArrowLeft, CheckCircle2 } from "lucide-react-native";
import HeaderDashboard from "../components/HeaderDashboard";
import WorkoutCard from "../components/WorkoutCard";
import { workoutData } from "../data/workoutData";


export default function Home({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("Semua"); // Default ke SEMUA
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const categories = ["Semua", "Cardio", "Strength", "Yoga", "Pilates"];

  // Logika Filter: Jika "Semua", tampilkan semua. Jika tidak, samakan kategori
  const filteredWorkouts = workoutData.filter((item) => 
    activeCategory === "Semua" ? true : item.category === activeCategory
  );

  if (selectedWorkout) {
    return (
      <View style={styles.detailContainer}>
        {/* HEADER DENGAN TOMBOL KEMBALI */}
        <View style={styles.detailHeader}>
          {/* Saat tombol ini diklik, state selectedWorkout diubah jadi null agar kembali ke HOME */}
          <TouchableOpacity onPress={() => setSelectedWorkout(null)} activeOpacity={0.7}>
            <ArrowLeft color={colors.black()} size={24} />
          </TouchableOpacity>
          
          <Text style={styles.detailHeaderText}>Detail Latihan</Text>
          
          {/* View kosong ini agar teks "Detail Latihan" tetap berada di tengah secara presisi */}
          <View style={{ width: 24 }} /> 
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Image source={{ uri: selectedWorkout.image }} style={styles.detailImage} />
          
          <View style={{ padding: 24 }}>
            <Text style={styles.detailTitle}>{selectedWorkout.title}</Text>
            <Text style={styles.detailCategory}>{selectedWorkout.category} • {selectedWorkout.duration}</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.descTitle}>Tips Pro Fitrack:</Text>
            
            {/* LOGIKA DINAMIS: Menampilkan tips sesuai item yang diklik */}
            {selectedWorkout.tips && selectedWorkout.tips.map((item, index) => (
              <View key={index} style={styles.tipItem}>
                <CheckCircle2 color={colors.blue()} size={18} />
                <Text style={styles.tipText}>{item}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        
        {/* Tombol Mulai Latihan */}
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Mulai Latihan Sekarang</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.white() }}>
      {/* Teruskan fungsi navigasi ke HeaderDashboard */}
      <HeaderDashboard navigate={navigate} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pilih Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 10 }}>
          {categories.map((item) => (
            <TouchableOpacity key={item} onPress={() => setActiveCategory(item)}
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
              image={workout.image}
              category={workout.category}
              title={workout.title}
              duration={workout.duration}
              onPress={() => setSelectedWorkout(workout)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 25 },
  sectionTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, paddingHorizontal: 24, marginBottom: 15 },
  catBtn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, backgroundColor: colors.grey(0.08) },
  catText: { fontFamily: 'Poppins-Medium', color: colors.grey() },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 24 },
  seeAll: { color: colors.blue(), fontFamily: 'Poppins-SemiBold', fontSize: 14 },
  detailContainer: { 
    flex: 1, // Sangat penting agar elemen muncul[cite: 2]
    backgroundColor: colors.white() 
  },
  detailHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    height: 60, 
    borderBottomWidth: 1, 
    borderBottomColor: colors.grey(0.1) 
  },
  detailHeaderText: { fontFamily: 'Poppins-Bold', fontSize: 18 },
  detailImage: { width: '100%', height: 250, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  detailTitle: { fontFamily: 'Poppins-Bold', fontSize: 24, color: colors.black() },
  detailCategory: { fontFamily: 'Poppins-SemiBold', fontSize: 16, color: colors.blue(), marginBottom: 20 },
  divider: { height: 1, backgroundColor: colors.grey(0.1), marginBottom: 20 },
  descTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, color: colors.black(), marginBottom: 10 },
  
  // Style untuk Tips Latihan
  tipItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    marginBottom: 15 
  },
  tipText: { 
    fontFamily: 'Poppins-Medium', 
    fontSize: 14, 
    color: colors.black(),
    flex: 1 // Agar teks panjang bisa turun ke bawah[cite: 2]
  },

  // Style untuk Tombol Footer
  footerButton: { 
    backgroundColor: colors.blue(), 
    margin: 24, 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center',
    // Memberikan shadow agar terlihat melayang[cite: 2]
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
  },
  footerButtonText: { 
    color: colors.white(), 
    fontFamily: 'Poppins-Bold', 
    fontSize: 16 
  },
  divider: { height: 1, backgroundColor: colors.grey(0.1), marginBottom: 20 },
  descTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, marginBottom: 10 },
  tipItem: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  tipText: { fontFamily: 'Poppins-Medium', fontSize: 14 }
});