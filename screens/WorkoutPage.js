import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  {
    id: 1,
    image: require("./Beginnerkit.jpg"),
    name: "Beginner Kit",
    description: "Perfect for beginners to start their fitness journey.",
  },
  {
    id: 2,
    image: require("./Fullworkout.jpg"),
    name: "Intermediate Kit",
    description: "Ideal for those who have some experience in fitness training.",
  },
  {
    id: 3,
    image: require("./yoga.jpg"),
    name: "Yoga Kit",
    description: "Ideal for those who want to enhance flexibility and mindfulness.",
  },
];

const WorkoutPage = () => {
  const handleImageClick = (item) => {
    console.log("Image clicked:", item.name);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome Back Umesh</Text>
        <Text style={styles.subheading}>Time to crush your workout!</Text>
        
        {data.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleImageClick(item)} style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default WorkoutPage;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productDetails: {
    padding: 15,
    alignItems: 'center',
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
