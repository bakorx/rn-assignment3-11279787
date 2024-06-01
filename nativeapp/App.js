import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.headerRow}>
  <View>
    <Text style={styles.headerTitle}>Hello, Devs</Text>
    <Text>14 tasks today</Text>
  </View>
  <Image
    source={require("./assets/profile.jpg")}
    style={styles.profileImage}
  />
  <StatusBar style="auto" />
</View>

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
