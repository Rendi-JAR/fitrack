import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Timer, ChevronRight } from "lucide-react-native";
import { colors } from "../../assets/theme";

// Menerima data melalui PROPS
export default function WorkoutCard({ image, category, title, duration }) {
  return (
    <TouchableOpacity style={styles.workoutCard} activeOpacity={0.8}>
      <Image style={styles.cardImage} source={{ uri: image }} />
      <View style={styles.cardContent}>
        <Text style={styles.cardCategory}>{category}</Text>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.cardInfoRow}>
          <Timer size={14} color={colors.grey()} />
          {/* Menampilkan props duration */}
          <Text style={styles.cardInfoText}>{duration}</Text>
        </View>
      </View>
      <View style={styles.iconArrow}>
        <ChevronRight color={colors.blue()} size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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