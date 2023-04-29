// Importerar alla komponenter och stilmall
import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

function Footer() {
      // Returnerar footern
      return (
            <View style={styles.footerContainer}>
                  <Text style={styles.footerText}>&copy; 2023 by Madeleine</Text>
            </View>
      );
}

export default Footer;
