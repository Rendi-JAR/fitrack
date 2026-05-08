import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
// Pastikan import SafeAreaView dari library safe-area-context
import { SafeAreaView } from "react-native-safe-area-context"; 
import { Settings, ArrowLeft } from "lucide-react-native";
import { colors } from "../../assets/theme";
import WorkoutCard from "../components/WorkoutCard";
import { workoutData } from "../data/workoutData";

export default function Profile({ navigation }) {
  // Simulasi data aktivitas terakhir
  const recentActivity = workoutData.slice(0, 2);

  return (
    // SafeAreaView adalah kunci agar konten tidak ngelebihin border/nabrak status bar
    <SafeAreaView style={styles.container}>
      {/* Header dengan Tombol Kembali dan Settings */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Settings color={colors.black()} size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bagian Foto dan Nama Profil */}
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400' }} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileName}>SAFRILRE</Text>
          <Text style={styles.profileSub}>Pejuang Fit Sejati</Text>
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Statistik Kebugaran */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Latihan</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3.5K</Text>
            <Text style={styles.statLabel}>Kkal</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>450</Text>
            <Text style={styles.statLabel}>Menit</Text>
          </View>
        </View>

        {/* Daftar Aktivitas Terakhir */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Aktivitas Terakhir</Text>
          <View style={{ paddingHorizontal: 24 }}>
            {recentActivity.map((workout) => (
              <WorkoutCard 
                key={workout.id}
                image={workout.image}
                category={workout.category}
                title={workout.title}
                duration={workout.duration}
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
  container: { 
    flex: 1, 
    backgroundColor: colors.white() 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 24, 
    paddingTop: 10, 
    paddingBottom: 10 
  },
  profileSection: { 
    alignItems: 'center', 
    marginTop: 20, 
    paddingHorizontal: 24 
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 15 
  },
  profileName: { 
    fontFamily: 'Poppins-Bold', 
    fontSize: 22, 
    color: colors.black() 
  },
  profileSub: { 
    fontFamily: 'Poppins-Medium', 
    fontSize: 14, 
    color: colors.grey(), 
    marginBottom: 20 
  },
  editButton: { 
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    backgroundColor: colors.grey(0.08), 
    borderRadius: 20 
  },
  editButtonText: { 
    fontFamily: 'Poppins-SemiBold', 
    fontSize: 14, 
    color: colors.black() 
  },
  statsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 30, 
    paddingHorizontal: 24 
  },
  statItem: { 
    alignItems: 'center', 
    width: 80 
  },
  statNumber: { 
    fontFamily: 'Poppins-Bold', 
    fontSize: 20, 
    color: colors.blue() 
  },
  statLabel: { 
    fontFamily: 'Poppins-Medium', 
    fontSize: 12, 
    color: colors.grey() 
  },
  statDivider: { 
    width: 1, 
    height: 40, 
    backgroundColor: colors.grey(0.2), 
    marginHorizontal: 15 
  },
  activitySection: { 
    paddingBottom: 40 
  },
  sectionTitle: { 
    fontFamily: 'Poppins-Bold', 
    fontSize: 18, 
    color: colors.black(), 
    paddingHorizontal: 24, 
    marginBottom: 15 
  }
});