import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// IMPORT SAFEAREAVIEW
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { ArrowLeft, CheckCircle2 } from 'lucide-react-native';
import { colors } from '../../assets/theme';

export default function DetailWorkout({ route, navigation }) {
  // Menangkap data workout yang dikirim
  const { workout } = route.params;

  return (
    // BUNGKUS DENGAN SAFEAREAVIEW AGAR AMAN DARI BORDER ATAS
    <SafeAreaView style={styles.detailContainer}>
      {/* Header Detail */}
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <ArrowLeft color={colors.black()} size={24} />
        </TouchableOpacity>
        <Text style={styles.detailHeaderText}>Detail Latihan</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Image source={{ uri: workout.image }} style={styles.detailImage} />
        
        <View style={{ padding: 24 }}>
          <Text style={styles.detailTitle}>{workout.title}</Text>
          <Text style={styles.detailCategory}>{workout.category} • {workout.duration}</Text>
          
          <View style={styles.divider} />
          <Text style={styles.descTitle}>Tips Pro Fitrack:</Text>
          
          {workout.tips && workout.tips.map((item, index) => (
            <View key={index} style={styles.tipItem}>
              <CheckCircle2 color={colors.blue()} size={18} />
              <Text style={styles.tipText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Mulai Latihan Sekarang</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailContainer: { 
    flex: 1, 
    backgroundColor: colors.white() 
  },
  detailHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    height: 60, 
    borderBottomWidth: 1, 
    borderBottomColor: colors.grey(0.1),
    backgroundColor: colors.white() 
  },
  detailHeaderText: { 
    fontFamily: 'Poppins-Bold', 
    fontSize: 18, 
    color: colors.black() 
  },
  detailImage: { 
    width: '100%', 
    height: 250, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  detailTitle: { 
    fontFamily: 'Poppins-Bold', 
    fontSize: 24, 
    color: colors.black() 
  },
  detailCategory: { 
    fontFamily: 'Poppins-SemiBold', 
    fontSize: 16, 
    color: colors.blue(), 
    marginBottom: 20 
  },
  divider: { 
    height: 1, 
    backgroundColor: colors.grey(0.1), 
    marginBottom: 20 
  },
  descTitle: { 
    fontFamily: 'Poppins-Bold', 
    fontSize: 18, 
    color: colors.black(), 
    marginBottom: 10 
  },
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
    flex: 1 
  },
  footerButton: { 
    backgroundColor: colors.blue(), 
    margin: 24, 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center', 
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
  },
  footerButtonText: { 
    color: colors.white(), 
    fontFamily: 'Poppins-Bold', 
    fontSize: 16 
  }
});