import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../assets/theme";
import { Timer, ChevronRight } from "lucide-react-native";

export default function WorkoutCard({ image, category, title, duration, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image style={styles.cardImage} source={{ uri: image }} />
      <View style={styles.cardContent}>
        <Text style={styles.cardCategory}>{category}</Text>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.infoRow}>
          <Timer size={14} color={colors.grey(0.6)} />
          <Text style={styles.infoText}>{duration}</Text>
        </View>
      </View>
      <View style={styles.arrowCircle}>
        <ChevronRight color={colors.blue()} size={18} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: colors.white(), borderRadius: 20, padding: 12, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: colors.grey(0.05) },
  cardImage: { width: 80, height: 80, borderRadius: 15 },
  cardContent: { flex: 1, marginLeft: 15 },
  cardCategory: { fontFamily: 'Poppins-SemiBold', fontSize: 12, color: colors.blue() },
  cardTitle: { fontFamily: 'Poppins-Bold', fontSize: 15, color: colors.black() },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  infoText: { fontFamily: 'Poppins-Medium', fontSize: 12, color: colors.grey(0.6) },
  arrowCircle: { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.blue(0.05), justifyContent: 'center', alignItems: 'center' }
});