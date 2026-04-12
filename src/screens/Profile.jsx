import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/theme";
import { User } from "lucide-react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <User color={colors.grey()} size={60} />
      </View>
      <Text style={styles.userName}>Pejuang Fit</Text>
      <Text style={styles.userBio}>Konsistensi adalah kunci.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white(), alignItems: 'center', justifyContent: 'center' },
  avatarContainer: { width: 100, height: 100, borderRadius: 50, backgroundColor: colors.grey(0.1), alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  userName: { fontFamily: 'Poppins-Bold', fontSize: 20, color: colors.black() },
  userBio: { fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.grey() }
});