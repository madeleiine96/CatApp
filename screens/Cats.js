// Importerar komponenter och stilmall som används samt olika vyer
import React, { useState } from "react";
import { Pressable, Text, ActivityIndicator, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles";

function Cats({ navigation }) {
      // Använder en loadingscreen medan API:et anropas
      const [isLoading, setLoading] = useState(true);

      const [cats, setCats] = useState([]);

      // Om det är true at det laddas så ska det ske en fetch
      if (isLoading) {
            fetch("https://good-puce-pigeon-coat.cyclic.app/cats")
                  .then((response) => response.json())
                  .then((json) => {
                        setLoading(false);
                        setCats(json);
                  })
                  .catch((error) => {
                        console.error(error);
                  });
      }
      // returnerar hela vyn och skickar vidare en katt till detailjsidan
      return (
            <View style={styles.container}>
                  <Header />
                  <ScrollView style={styles.catsContainer}>
                        {isLoading == true && <ActivityIndicator />}

                        <Text style={styles.catsText}>
                              Click on a cat's name to get more information about them
                        </Text>
                        {cats.map((cat, index) => (
                              <View key={index}>
                                    <Pressable
                                          onPress={() => navigation.navigate("Detail", { cat })}
                                          style={styles.primaryBtn}
                                    >
                                          <Text style={styles.primaryBtnText}>{cat.name}</Text>
                                    </Pressable>
                              </View>
                        ))}
                  </ScrollView>
                  <Footer />
            </View>
      );
}

export default Cats;
