import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const YourComponent = () => {
  const [cards, setCards] = useState([
    { 
      title: "Bootcamp",
      subtitle: "Group fitness classes that promote fat loss, camaraderie, and team effort",
      details: "A fitness boot camp is a type of group physical training program that may be conducted by gyms, personal trainers or other organizations. These programs are designed to build strength and fitness through a variety of types of exercise.",
      imageUrl: require('./Beginnerkit.jpg') 
    },
    { 
      title: "Gymnastics",
      subtitle: "Sport involving the performance of exercises requiring physical strength, flexibility, balance, and control.",
      details: "Gymnastics is a type of sport that includes physical exercises requiring balance, strength, flexibility, agility, coordination, artistry and endurance. The movements involved in gymnastics contribute to the development of the arms, legs, shoulders, back, chest, and abdominal muscle groups.",
      imageUrl: require('./Fullworkout.jpg') 
    },
    { 
      title: "Yoga",
      subtitle: "Physical, mental, and spiritual practice that aims to transform body and mind.",
      details: "Yoga stretches your muscles and opens the energy channels of your body. This results in increased flexibility in your body. This also lubricates your joints. It does not only help you physically but it also has mental health benefits.",
      imageUrl: require('./yoga.jpg') 
    }
  ]);

  const toggleExpand = (index) => {
    const newCards = [...cards];
    newCards[index].expanded = !newCards[index].expanded;
    setCards(newCards);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Heading text */}
        <Text style={styles.heading}>ANNOUNCEMENT</Text>
        <Text style={styles.heading1}>Our Latest Batches</Text>

        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => toggleExpand(index)}
            activeOpacity={0.8}
          >
            <View style={styles.card}>
              <Image source={card.imageUrl} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{card.title}</Text>
                {card.subtitle && <Text style={styles.subtitle}>{card.subtitle}</Text>}
                {card.expanded && <Text style={styles.details}>{card.details}</Text>}
                <Text style={styles.arrow}>{card.expanded ? "▼" : "▶"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default YourComponent;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
    color: '#000000',
  },
  heading1: {
    fontSize: 20,
    margin: 5,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  container: {
    margin: 10,
  },
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    alignItems:"center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
    alignItems:"center"
  },
  details: {
    fontSize: 18,
    marginTop: 5,
    color: "#fff",
  },
  arrow: {
    fontSize: 25,
    marginLeft: "auto",
    color: "#fff",
  },
});
