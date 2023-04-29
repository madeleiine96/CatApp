// Import av komponenter och stilmall samt alla vyer
import React from "react";
import { View, Text } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles";

function Detail({ route }) {
      // Får tillgång till all information om en katt som skickades med som en parameter
      const { cat } = route.params;

      // Skriver ut informationen om en katt
      return (
            <View style={styles.container}>
                  <Header />
                  <View style={styles.detailContainer}>
                        <Text style={styles.detailHeader}>{cat.name}</Text>
                        <Text style={styles.detailList}>Age: {cat.age} years</Text>
                        <Text style={styles.detailList}>Breed: {cat.breed}</Text>
                        <Text style={styles.detailList}>Color: {cat.color}</Text>
                        <Text style={styles.detailList}>Gender: {cat.sex}</Text>
                        <Text style={styles.detailList}>Date of Birth: {cat.DOB}</Text>
                  </View>
                  <Footer />
            </View>
      );
}

export default Detail;
