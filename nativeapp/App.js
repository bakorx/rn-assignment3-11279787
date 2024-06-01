import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const data = [
  {
    id: 1,
    title: "Exercise",
    tasks: 12,
    categoryImage: require("./assets/images/exercise.png"),
  },
  {
    id: 2,
    title: "Study",
    tasks: 12,
    categoryImage: require("./assets/images/learning.png"),
  },
  {
    id: 3,
    title: "Relax",
    tasks: 8,
    categoryImage: require("./assets/images/learning.png"),
  },
  {
    id: 4,
    title: "Walk",
    tasks: 2,
    categoryImage: require("./assets/images/learning.png"),
  },
  {
    id: 5,
    title: "Read",
    tasks: 5,
    categoryImage: require("./assets/images/learning.png"),
  },
  {
    id: 6,
    title: "Swim",
    tasks: 1,
    categoryImage: require("./assets/images/learning.png"),
  },
];

const Category = ({ title, taskNumber, categoryImage }) => (
  <View style={styles.categoryContainer}>
    <Image source={categoryImage} style={styles.categoryImage} />
    <Text style={styles.categoryTitle}>{title}</Text>
    <Text style={styles.categoryTaskNumber}>{taskNumber} tasks</Text>
  </View>
);

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
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 40 }}>
        Categories
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Category
            title={item.title}
            taskNumber={item.tasks}
            categoryImage={item.categoryImage}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
      />
      {/* Sliding container with specified styles */}
      <View style={styles.slidingContainer}></View>
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
  categoryContainer: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    width: 245,
    marginLeft: 10,
    height: 250,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  categoryTaskNumber: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  slidingContainer: {
    width: 396,
    height: 1,
    top: 249,
    left: 20,
    gap: 0,
    opacity: 0,
    position: 'absolute',
  },
  categoryImage: {
    width: 100, 
    height: 100, 
    marginBottom: 10, 
  },
});
