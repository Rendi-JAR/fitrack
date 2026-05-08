import React, { useState } from "react"; // Tambahkan useState
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Tambahkan SafeAreaView
import { Search, ArrowLeft } from "lucide-react-native";
import { colors } from "../../assets/theme";
import WorkoutCard from "../components/WorkoutCard";
import { workoutData } from "../data/workoutData";

const popularTags = ["Bakar Lemak", "Otot Perut", "Yoga Santai", "Kardio", "Pemula"];

export default function Discover({ navigation }) {
  // STATE PENCARIAN
  const [searchQuery, setSearchQuery] = useState("");

  // LOGIKA FILTER PENCARIAN (Mencari berdasarkan judul atau kategori)
  const searchedWorkouts = workoutData.filter((item) => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // BUNGKUS DENGAN SAFEAREAVIEW AGAR RAPI
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 15 }}>
          <ArrowLeft color={colors.black()} size={24} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Jelajah</Text>
        
        <View style={styles.searchBar}>
          <Search size={18} color={colors.grey(0.5)} />
          <TextInput 
            placeholder="Cari program latihan..." 
            style={styles.searchInput} 
            placeholderTextColor={colors.grey(0.5)}
            // HUBUNGKAN TEXTINPUT DENGAN STATE
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Tag Populer (Bisa di-klik untuk mengisi kolom pencarian otomatis) */}
        <View style={styles.tagsSection}>
          <Text style={styles.sectionTitle}>Pencarian Populer</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 10 }}>
            {popularTags.map((tag, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.tagButton}
                onPress={() => setSearchQuery(tag)} // Klik tag langsung mengisi pencarian
              >
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.listSection}>
          {/* Tampilkan jumlah hasil pencarian */}
          <Text style={styles.sectionTitle}>
            {searchQuery === "" ? `Semua Kelas (${workoutData.length})` : `Hasil Pencarian (${searchedWorkouts.length})`}
          </Text>
          <View style={{ paddingHorizontal: 24 }}>
            {/* TAMPILKAN DATA YANG SUDAH DI-FILTER */}
            {searchedWorkouts.map((workout) => (
              <WorkoutCard 
                key={workout.id}
                image={workout.image}
                category={workout.category}
                title={workout.title}
                duration={workout.duration}
                // Bisa diklik masuk ke detail juga
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
  container: { flex: 1, backgroundColor: colors.white() },
  header: { paddingHorizontal: 24, paddingTop: 10, paddingBottom: 15 },
  headerTitle: { fontFamily: 'Poppins-Bold', fontSize: 24, color: colors.black(), marginBottom: 15 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.grey(0.05), borderRadius: 15, paddingHorizontal: 15, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.black() },
  tagsSection: { marginBottom: 25, paddingTop: 10 },
  sectionTitle: { fontFamily: 'Poppins-Bold', fontSize: 18, color: colors.black(), paddingHorizontal: 24, marginBottom: 15 },
  tagButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, borderWidth: 1, borderColor: colors.grey(0.15), backgroundColor: colors.white() },
  tagText: { fontFamily: 'Poppins-Medium', fontSize: 13, color: colors.grey(0.8) },
  listSection: { paddingBottom: 40 }
});