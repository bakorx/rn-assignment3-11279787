import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.headerTitle}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <Image
          source={require('./assets/images/profile.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.searchBar}>
        <Image
          source={require('./assets/icons/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity>
          <Image
            source={require('./assets/icons/slider.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
    paddingTop: 50, 
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28, 
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});
