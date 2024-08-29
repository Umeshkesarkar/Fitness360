import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const YourComponent = () => {
  const [cards, setCards] = useState([
    { 
      title: "Diet For Gym Beginners",
    //   subtitle: "7- Day Diet For Gym Beginners",
      details: "When you start your fitness journey it is really important to understand that your body is fueled by the nutrition you provide it. That’s why we cannot stress enough on the importance of a healthy and balanced diet. ",
      imageUrl: require('./img1.jpg') 
    },
    { 
      title: "Diet Plan For Fat Loss",
    //   subtitle: "Sport involving the performance of exercises requiring physical strength, flexibility, balance, and control.",
      details: "Health and fitness should be lifestyle choices. For those who want to lose weight, do it for your health and wellness and not to abide by the beauty standards of the society. ",
      imageUrl: require('./img2.jpg') 
    },
    { 
      title: "Diet Plan For Bulking",
    //   subtitle: "Physical, mental, and spiritual practice that aims to transform body and mind.",
      details: "A lot of people feel losing weight is the biggest fitness challenge. You would be surprised to know that people who want to gain weight in a healthy way also have a hard time. ",
      imageUrl: require('./img3.jpg') 
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
        <Text style={styles.heading}>Meal Plan</Text>
        <Text style={styles.heading1}>Lets plan the Meal</Text>

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
