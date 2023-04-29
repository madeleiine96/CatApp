// Import av komponenter samt stilmall
import React, { useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import styles from "../styles";
import Header from "./Header";
import Footer from "./Footer";

function Login({ navigation }) {
      // Använder useState för att ha kontroll över användarnamn och lösenord.
      const [username, onChangeUser] = useState("Username");
      const [password, onChangePwd] = useState("Password");

      // Inloggningsformulär, är i nuläget inte aktivt, men stilad som att den är på riktig.
      return (
            <View style={styles.container}>
                  <Header />
                  <ScrollView>
                        <View style={styles.loginpageContainer}>
                              <TextInput
                                    value={username}
                                    onChangeText={onChangeUser}
                                    style={styles.loginpageInput}
                              />
                              <TextInput
                                    value={password}
                                    onChangeText={onChangePwd}
                                    secureTextEntry={true}
                                    style={styles.loginpageInput}
                              />
                              <Pressable style={styles.loginpageBtn}>
                                    <Text
                                          onPress={() => navigation.navigate("Admin")}
                                          style={styles.loginpageBtnText}
                                    >
                                          Login
                                    </Text>
                              </Pressable>
                        </View>
                  </ScrollView>
                  <Footer />
            </View>
      );
}

export default Login;
