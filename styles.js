// Import för at kunna skapa stilmallen.
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      // Container som stilar samtliga vyer.
      container: {
            flex: 1,
            backgroundColor: "#fcfaf1",
            justifyContent: "space-between",
      },

      // HEADER STILREGLER
      header: {
            alignItems: "center",
            backgroundColor: "#164c5c",
      },
      headerImg: {
            width: 100,
            height: 100,
            marginVertical: 24,
      },
      headerBtn: {
            marginTop: 12,
      },
      // FOOTER STILREGLER
      footerContainer: {
            backgroundColor: "#164c5c",
            height: 70,
            justifyContent: "center",
            alignItems: "center",
      },
      footerText: {
            fontSize: 16,
            color: "#fcfaf1",
      },
      // HOME-PAGE STILREGLER
      homeContainer: {
            marginHorizontal: 24,
            marginVertical: 44,
      },
      heading: {
            fontSize: 30,
            marginBottom: 18,
            color: "#242424",
            fontWeight: "bold",
      },
      homeText: {
            fontSize: 20,
            color: "#242424",
            marginBottom: 40,
            lineHeight: 30,
      },

      primaryBtn: {
            width: "90%",
            margin: 12,
            backgroundColor: "#164c5c",
            borderRadius: 10,
            alignSelf: "center",
      },

      primaryBtnText: {
            fontSize: 18,
            color: "#fcfaf1",
            textAlign: "center",
            textTransform: "uppercase",
            marginVertical: 12,
            letterSpacing: 1,
      },

      // Login-button on Home-Page below footer
      loginContainer: {
            backgroundColor: "#164c5c",
            alignItems: "center",
      },
      loginText: {
            color: "#164c5c",
            marginBottom: 16,
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
            backgroundColor: "#fcfaf1",
            paddingVertical: 10,
            paddingHorizontal: 55,
            borderRadius: 10,
      },
      // CAT-PAGE STILREGLER
      catsContainer: {
            marginVertical: 25,
      },
      catsText: {
            fontSize: 24,
            color: "#164c5c",
            margin: 24,
            lineHeight: 30,
      },
      // DETAIL-PAGE STILREGLER
      detailContainer: {
            marginHorizontal: 35,
      },
      detailList: {
            fontSize: 28,
            color: "#164c5c",
      },
      detailHeader: {
            fontSize: 34,
            color: "#164c5c",
            fontWeight: "bold",
            marginBottom: 20,
      },

      // LOGIN-PAGE
      loginpageContainer: {
            alignItems: "center",
            marginVertical: 90,
      },
      loginpageInput: {
            height: 50,
            margin: 12,
            borderBottomWidth: 2,
            borderColor: "#164c5c",
            padding: 15,
            width: "70%",
            fontSize: 16,
            color: "#164c5c",
      },
      loginpageBtnText: {
            fontSize: 16,
            color: "#fcfaf1",
            textAlign: "center",
            marginVertical: 15,
      },
      loginpageBtn: {
            width: "70%",
            margin: 12,
            backgroundColor: "#164c5c",
            borderRadius: 10,
      },

      // ADMIN-PAGE
      adminContainer: {
            marginVertical: 18,
      },
      createContainer: {
            alignItems: "flex-end",
            marginTop: 32,
            marginRight: 12,
            marginBottom: 32,
      },
      createBtn: {
            backgroundColor: "#164c5c",
            alignItems: "center",
            width: "40%",
            borderRadius: 10,
      },
      createBtnText: {
            color: "#fcfaf1",
            fontSize: 20,
            margin: 12,
      },

      adminCatName: {
            color: "#fcfaf1",
            fontSize: 30,
            width: 120,
            textDecorationLine: "underline", // Visar att det är en länk
      },
      adminBtnBox: {
            color: "#fcfaf1",
            fontSize: 20,
            padding: 12,
            borderWidth: 2,
            borderColor: "#fcfaf1",
            borderRadius: 10,
            marginVertical: 10,
            width: 120,
            textAlign: "center",
      },
      adminCatContainer: {
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#164c5c",
            width: "80%",
            marginBottom: 32,
            marginHorizontal: "10%",
            borderRadius: 40,
            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 20,
            paddingHorizontal: 15,
      },

      // MODAL-VY

      centeredView: {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
      },
      adminModalView: {
            backgroundColor: "#fcfaf1",
            borderRadius: 20,
            width: "90%",
            alignItems: "center",
            shadowColor: "#164c5c",
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
            elevation: 10,
      },

      adminInputbox: {
            color: "#164c5c",
            fontSize: 20,
            padding: 12,
            borderWidth: 2,
            borderColor: "#164c5c",
            marginVertical: 10,
            borderRadius: 15,
      },

      adminScrollContainer: {
            width: "70%",
            marginVertical: 40,
      },
      adminModalText: {
            textAlign: "center",
            fontSize: 26,
            color: "#164c5c",
            marginBottom: 12,
            fontWeight: "bold",
      },
      adminModalBtn: {
            color: "#fcfaf1",
            fontSize: 20,
            padding: 12,
            backgroundColor: "#164c5c",
            marginVertical: 10,
            borderRadius: 15,
            textAlign: "center",
      },
});

export default styles;
