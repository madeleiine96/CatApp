// Import av komponenter samt stilmall
import React from "react";
import { View, Image } from "react-native";
import styles from "../styles";

function Header() {
      // returnerar Headerns innehåll som är en logotyp
      return (
            <View style={styles.header}>
                  <Image source={require("../assets/cat.png")} style={styles.headerImg} />
            </View>
      );
}

export default Header;
