import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../assets/theme";
import WorkoutCard from "../components/WorkoutCard";

export default function Discover() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eksplorasi Latihan</Text>
      <ScrollView contentContainerStyle={styles.list}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white(), paddingHorizontal: 24, paddingTop: 20 },
  title: { fontFamily: 'Poppins-Bold', fontSize: 22, marginBottom: 20 },
  list: { gap: 16 }
});