import { ScrollView, View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { Timer, Flame, Play, ChevronRight } from "lucide-react-native";

// Mengimpor file Header yang baru saja dibuat
import HeaderDashboard from "./HeaderDashboard";

export default function ListWorkout() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
      
      {/* Memanggil komponen HeaderDashboard */}
      <HeaderDashboard />

      {/* Komponen Hero: Target Latihan Hari Ini */}
      <View style={styles.heroSection}>
        <ImageBackground
          style={styles.heroImage}
          resizeMode="cover"
          imageStyle={{ borderRadius: 24 }}
          source={{
            uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
          }}
        >
          <View style={styles.heroOverlay}>
            <View>
              <Text style={styles.badgeText}>🔥 Target Hari Ini</Text>
              <Text style={styles.heroTitle}>Full Body HIT Workout</Text>
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

      {/* Komponen Kategori Latihan */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Pilih Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingHorizontal: 24 }}>
          <TouchableOpacity style={[styles.categoryBtn, { backgroundColor: colors.blue() }]} activeOpacity={0.7}>
            <Text style={[styles.categoryBtnText, { color: colors.white() }]}>Cardio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.7}>
            <Text style={styles.categoryBtnText}>Strength</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.7}>
            <Text style={styles.categoryBtnText}>Yoga</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.7}>
            <Text style={styles.categoryBtnText}>Pilates</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Komponen Daftar Kelas Rekomendasi */}
      <View style={styles.verticalListContainer}>
        <View style={styles.listHeader}>
          <Text style={[styles.sectionTitle, {marginBottom: 5}]}>Rekomendasi Kelas</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.seeAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardList}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.workoutCard} activeOpacity={0.8}>
            <Image
              style={styles.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardCategory}>Kekuatan Otot</Text>
              <Text style={styles.cardTitle}>Angkat Beban Pemula</Text>
              <View style={styles.cardInfoRow}>
                <Timer size={14} color={colors.grey()} />
                <Text style={styles.cardInfoText}>30 Menit</Text>
              </View>
            </View>
            <View style={styles.iconArrow}>
                <ChevronRight color={colors.blue()} size={20} />
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.workoutCard} activeOpacity={0.8}>
            <Image
              style={styles.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardCategory}>Fleksibilitas</Text>
              <Text style={styles.cardTitle}>Yoga Pagi Menenangkan</Text>
              <View style={styles.cardInfoRow}>
                <Timer size={14} color={colors.grey()} />
                <Text style={styles.cardInfoText}>20 Menit</Text>
              </View>
            </View>
            <View style={styles.iconArrow}>
                <ChevronRight color={colors.blue()} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

