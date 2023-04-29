// Import av komponenter samt stilmall och vyer
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

import styles from "../styles";
import Footer from "./Footer";
import Header from "./Header";

function Home({ navigation }) {
      // Skriver ut välkomnande text och info om appen. CTA att gå till kattsidan. Använder ScrollView för att få plats med all content. Loggain knapp i footern
      return (
            <View style={styles.container}>
                  <Header />
                  <ScrollView style={styles.homeContainer}>
                        <Text style={styles.heading}>Welcome to my cat app</Text>
                        <Text style={styles.homeText}>
                              i hate you now fight me sit on human they not getting up ever. If it
                              fits i sits chase the pig around the house. See owner, run in terror
                              always hungry my left donut is missing, as is my right so cats are the
                              world or love and coo around boyfriend who purrs and makes the perfect
                              moonlight eyes so i can purr and swat the glittery gleaming yarn to
                              poop stuck in paws jumping out of litter box and run around the house
                              scream meowing and smearing hot cat mud all over be superior present
                              belly, scratch hand when stroked.
                        </Text>

                        <Pressable
                              onPress={() => navigation.navigate("Cats")}
                              style={styles.primaryBtn}
                        >
                              <Text style={styles.primaryBtnText}>Read more about the cats</Text>
                        </Pressable>
                  </ScrollView>
                  <Footer />
                  <Pressable style={styles.loginContainer}>
                        <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>
                              Login
                        </Text>
                  </Pressable>
            </View>
      );
}

export default Home;
