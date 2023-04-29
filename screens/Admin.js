// Import av komponenter samt stilmall
import React, { useState } from "react";
import {
      View,
      Text,
      ActivityIndicator,
      Pressable,
      ScrollView,
      Modal,
      TextInput,
      Alert,
} from "react-native";
import styles from "../styles";
import Header from "./Header";
import Footer from "./Footer";

function Admin({ navigation }) {
      // Använder en loadingscreen medan API:et anropas
      const [isLoading, setLoading] = useState(true);

      // Alla katter sparas i cats
      const [cats, setCats] = useState([]);

      // Modalens state
      const [modalVisible, setModalVisible] = useState(false);

      // Inputtext vid edit och create hanteras med useState
      const [catId, onChangecatId] = useState();
      const [catName, onChangecatName] = useState();
      const [catAge, onChangecatAge] = useState();
      const [catBreed, onChangecatBreed] = useState();
      const [catColor, onChangecatColor] = useState();
      const [catSex, onChangecatSex] = useState();
      const [catDOB, onChangecatDOB] = useState();

      //Inladdning av API:et (READ)
      function loadAPI() {
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

      // CREATE-funktion - gör en POST med datan och lägger till katten. Sen laddas API:et om för att inkludera nya katten
      function createCat() {
            fetch("https://good-puce-pigeon-coat.cyclic.app/cats/", {
                  method: "POST",
                  headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                        name: catName,
                        age: catAge,
                        breed: catBreed,
                        sex: catSex,
                        DOB: catDOB,
                        color: catColor,
                  }),
            }).then(loadAPI());
      }

      // EDIT-funktion - parametern är id:t på posten för att kunna editera rätt post. Sedan sker en POST med datan och editerar katten.
      // Sen laddas API:et om för att ha korrekta poster
      function editCat(catId) {
            fetch("https://good-puce-pigeon-coat.cyclic.app/cats/" + catId, {
                  method: "POST",
                  headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                        name: catName,
                        age: catAge,
                        breed: catBreed,
                        sex: catSex,
                        DOB: catDOB,
                        color: catColor,
                  }),
            }).then(loadAPI());
      }

      // DELETE-funktion - parametrar är id:et på posten för att kunna radera rätt post.
      // Namnet på katten för att göra dynamiska informationsrutor till användaren.
      function deleteCat(catId, catName) {
            Alert.alert("Delete", "Do you wanna delete " + catName + "?", [
                  { text: "NO" },
                  {
                        text: "YES",
                        onPress: () => {
                              fetch("https://good-puce-pigeon-coat.cyclic.app/cats/" + catId, {
                                    method: "DELETE",
                                    headers: {
                                          Accept: "application/json",
                                          "Content-Type": "application/json",
                                    },
                              })
                                    .then(loadAPI())
                                    .then(Alert.alert(catName + " was deleted!")); // Meddelar användaren att katten blev korrekt borttagen
                        },
                  },
            ]);
      }
      // Om det är true att det laddas så ska det ske en fetch av API:et
      if (isLoading) {
            loadAPI();
      }

      // Returnerar vyn, en lista av katterna med olika knappar för de olika funktionerna.
      // Vid editering samt skapande av ny katt sker detta via en Modalruta.
      return (
            <View style={styles.container}>
                  <Header />

                  <ScrollView style={styles.adminContainer}>
                        <View style={styles.createContainer}>
                              <Pressable
                                    onPress={() => {
                                          // Nollställer värdena för att skapa en ny katt.
                                          onChangecatId(null);
                                          onChangecatName("");
                                          onChangecatAge("");
                                          onChangecatBreed("");
                                          onChangecatColor("");
                                          onChangecatSex("");
                                          onChangecatDOB("");
                                          setModalVisible(true); // Visar modalrutan med input-boxar
                                    }}
                                    style={styles.createBtn}
                              >
                                    <Text style={styles.createBtnText}>Add a cat</Text>
                              </Pressable>
                        </View>
                        {
                              isLoading == true && (
                                    <ActivityIndicator />
                              ) /* Ifall API:et laddas så visas en snurrande ring */
                        }

                        <Modal
                              animationType="slide"
                              transparent={true}
                              visible={modalVisible}
                              onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                              }}
                        >
                              <View style={styles.centeredView}>
                                    <View style={styles.adminModalView}>
                                          <ScrollView style={styles.adminScrollContainer}>
                                                <Text style={styles.adminModalText}>
                                                      {
                                                            catName != ""
                                                                  ? catName
                                                                  : "New Cat" /* Skriver ut kattnamnet om man editerar, vid nyskapande 
                                                                              skrivs new cat ut och ändras till kattnamnet.  */
                                                      }
                                                </Text>
                                                <TextInput
                                                      value={catName}
                                                      onChangeText={onChangecatName}
                                                      style={styles.adminInputbox}
                                                      placeholder="Name"
                                                />
                                                <TextInput
                                                      onChangeText={onChangecatAge}
                                                      value={catAge}
                                                      keyboardType="numeric"
                                                      style={styles.adminInputbox}
                                                      placeholder="Age"
                                                />
                                                <TextInput
                                                      value={catBreed}
                                                      onChangeText={onChangecatBreed}
                                                      style={styles.adminInputbox}
                                                      placeholder="Breed"
                                                />
                                                <TextInput
                                                      value={catColor}
                                                      onChangeText={onChangecatColor}
                                                      style={styles.adminInputbox}
                                                      placeholder="Color"
                                                />
                                                <TextInput
                                                      value={catSex}
                                                      onChangeText={onChangecatSex}
                                                      style={styles.adminInputbox}
                                                      placeholder="Gender"
                                                />
                                                <TextInput
                                                      onChangeText={onChangecatDOB}
                                                      value={catDOB}
                                                      keyboardType="numeric"
                                                      style={styles.adminInputbox}
                                                      placeholder="Date Of Birth"
                                                />

                                                <Pressable
                                                      onPress={() => {
                                                            // Om catId är null betyder det att det ska skapas en ny katt. Om inte så ska det ske en editering.
                                                            if (catId == null) {
                                                                  createCat();
                                                            } else {
                                                                  editCat(catId);
                                                            }
                                                            setModalVisible(!modalVisible); // Sätter modalrutan till osynlig igen.
                                                      }}
                                                >
                                                      <Text style={styles.adminModalBtn}>Save</Text>
                                                </Pressable>
                                          </ScrollView>
                                    </View>
                              </View>
                        </Modal>

                        {cats.map((cat, index) => (
                              // Mappar ut alla katter med knapparna för editering samt borttagning.
                              <View key={index} style={styles.adminCatContainer}>
                                    <Pressable>
                                          <Text
                                                style={styles.adminCatName}
                                                onPress={() =>
                                                      navigation.navigate("Detail", { cat })
                                                } /*Skickar vidare användaren till detaljer om katten om man vill se dem. */
                                          >
                                                {cat.name}
                                          </Text>
                                    </Pressable>
                                    <View style={styles.adminChangeBtns}>
                                          <Pressable
                                                onPress={() => {
                                                      // Använder useState för att sätta in nuvarande info om katten
                                                      onChangecatId(cat._id);
                                                      onChangecatName(cat.name);
                                                      onChangecatAge(cat.age);
                                                      onChangecatBreed(cat.breed);
                                                      onChangecatColor(cat.color);
                                                      onChangecatSex(cat.sex);
                                                      onChangecatDOB(cat.DOB);
                                                      setModalVisible(true); // Visar modalrutan
                                                }}
                                          >
                                                <Text style={styles.adminBtnBox}>Edit</Text>
                                          </Pressable>
                                          <Pressable
                                                onPress={
                                                      () =>
                                                            deleteCat(
                                                                  cat._id,
                                                                  cat.name
                                                            ) /* Tar bort katten med detta Id:et. */
                                                }
                                          >
                                                <Text style={styles.adminBtnBox}>Remove</Text>
                                          </Pressable>
                                    </View>
                              </View>
                        ))}
                  </ScrollView>
                  <Footer />
            </View>
      );
}

export default Admin;
