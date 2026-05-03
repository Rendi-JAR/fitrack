import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { Timer, Play, ChevronRight, Activity, User, ArrowLeft, CheckCircle2 } from "lucide-react-native";
import WorkoutCard from "./WorkoutCard";

export default function ListWorkout() {
  // STATE: Kategori 'Strength' langsung terpilih secara default
  const [activeCategory, setActiveCategory] = useState("Strength");
  
  // STATE: Untuk menyimpan data yang dipilih (jika null = tampil Home, jika ada isi = tampil Detail)
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const categories = ["Cardio", "Strength", "Yoga", "Pilates"];

  // HALAMAN DETAIL (Tampil saat kartu diklik)
  if (selectedWorkout) {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailHeader}>
          <TouchableOpacity onPress={() => setSelectedWorkout(null)}>
            <ArrowLeft color={colors.black()} size={24} />
          </TouchableOpacity>
          <Text style={styles.detailHeaderText}>Detail Latihan</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{ uri: selectedWorkout.image }} style={styles.detailImage} />
          
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>{selectedWorkout.title}</Text>
            <Text style={styles.detailCategory}>{selectedWorkout.category} • {selectedWorkout.duration}</Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.descTitle}>Deskripsi Latihan</Text>
            <Text style={styles.detailDescription}>
              Program ini dirancang khusus untuk pemula yang ingin membangun fondasi kekuatan otot yang solid. 
              Fokus pada teknik yang benar untuk menghindari cedera.
            </Text>

            {/* Bagian Tips Latihan */}
            <Text style={[styles.descTitle, { marginTop: 20 }]}>Tips Pro Fitrack:</Text>
            <View style={styles.tipItem}>
              <CheckCircle2 color={colors.blue()} size={18} />
              <Text style={styles.tipText}>Lakukan pemanasan dinamis selama 5-10 menit.</Text>
            </View>
            <View style={styles.tipItem}>
              <CheckCircle2 color={colors.blue()} size={18} />
              <Text style={styles.tipText}>Atur napas: buang napas saat beban diangkat.</Text>
            </View>
            <View style={styles.tipItem}>
              <CheckCircle2 color={colors.blue()} size={18} />
              <Text style={styles.tipText}>Istirahat 60-90 detik antar set.</Text>
            </View>
          </View>
        </ScrollView>
        
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Mulai Latihan Sekarang</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // HALAMAN HOME (Tampil saat selectedWorkout adalah null)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Sapaan */}
      <View style={styles.headerSection}>
        <View>
          <View style={styles.logoRow}>
            <Activity color={colors.blue()} size={20} />
            <Text style={styles.logoText}>Fitrack</Text>
          </View>
          <Text style={styles.greetingTitle}>Halo, Pejuang Fit!</Text>
        </View>
        <TouchableOpacity style={styles.profileBtnPlain}>
          <User color={colors.grey()} size={28} />
        </TouchableOpacity>
      </View>

      {/* Pilih Kategori (State activeCategory)[cite: 2] */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Pilih Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 24 }}>
          {categories.map((item) => (
            <TouchableOpacity 
              key={item} 
              onPress={() => setActiveCategory(item)}
              style={[styles.categoryBtn, activeCategory === item && { backgroundColor: colors.blue() }]}
            >
              <Text style={[styles.categoryBtnText, activeCategory === item && { color: colors.white() }]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Rekomendasi Kelas (Props & Trigger Detail)[cite: 2] */}
      <View style={styles.verticalListContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Rekomendasi Kelas</Text>
          <Text style={styles.seeAllText}>Lihat Semua</Text>
        </View>

        <View style={styles.cardList}>
          <WorkoutCard 
            image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
            category="Kekuatan Otot"
            title="Angkat Beban Pemula"
            duration="30 Menit"
            // Saat diklik, simpan data ke state agar pindah halaman[cite: 2]
            onPress={() => setSelectedWorkout({
              title: "Angkat Beban Pemula",
              category: "Kekuatan Otot",
              duration: "30 Menit",
              image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
            })}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Home Styles
  headerSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 20 },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 5 },
  logoText: { fontFamily: 'Poppins-ExtraBold', fontSize: 16, color: colors.blue() },
  greetingTitle: { fontFamily: 'Poppins-Bold', fontSize: 22, color: colors.black() },
  profileBtnPlain: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.grey(0.1), justifyContent: 'center', alignItems: 'center' },
  categoryContainer: { marginBottom: 30 },
  sectionTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, color: colors.black(), marginBottom: 16, paddingHorizontal: 24 },
  categoryBtn: { paddingHorizontal: 22, paddingVertical: 12, borderRadius: 30, backgroundColor: colors.grey(0.08) },
  categoryBtnText: { fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.grey() },
  verticalListContainer: { paddingBottom: 40 },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 24, marginBottom: 16 },
  seeAllText: { fontFamily: 'Poppins-SemiBold', fontSize: 14, color: colors.blue() },
  cardList: { paddingHorizontal: 24 },

  // Detail Styles (Mirip Gambar 2)
  detailContainer: { flex: 1, backgroundColor: colors.white() },
  detailHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, height: 60, borderBottomWidth: 1, borderBottomColor: colors.grey(0.1) },
  detailHeaderText: { fontFamily: 'Poppins-Bold', fontSize: 18, color: colors.black() },
  detailImage: { width: '100%', height: 250, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  detailContent: { padding: 24 },
  detailTitle: { fontFamily: 'Poppins-Bold', fontSize: 26, color: colors.black() },
  detailCategory: { fontFamily: 'Poppins-SemiBold', fontSize: 16, color: colors.blue(), marginBottom: 15 },
  divider: { height: 1, backgroundColor: colors.grey(0.1), marginBottom: 20 },
  descTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, color: colors.black(), marginBottom: 8 },
  detailDescription: { fontFamily: 'Poppins-Regular', fontSize: 14, color: colors.grey(), lineHeight: 22 },
  tipItem: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  tipText: { fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.black() },
  footerButton: { backgroundColor: colors.blue(), margin: 24, paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  footerButtonText: { color: 'white', fontFamily: 'Poppins-Bold', fontSize: 16 }
});