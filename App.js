// Importerar navigationshjälp samt alla vyer
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Cats from "./screens/Cats";
import Detail from "./screens/Detail";
import Login from "./screens/Login";
import Admin from "./screens/Admin";

export default function App() {
      // Skapar en navigationsstack
      const Stack = createNativeStackNavigator();

      // Stylar upp headerna i appen, samt sätter titeln till namn som visar vad sidan är om
      return (
            <NavigationContainer>
                  <Stack.Navigator
                        screenOptions={{
                              headerStyle: {
                                    backgroundColor: "#fcfaf1",
                              },
                              headerTintColor: "#164c5c",
                              headerTitleStyle: {
                                    fontWeight: "bold",
                              },
                        }}
                  >
                        <Stack.Screen
                              name="Home"
                              component={Home}
                              options={{
                                    title: "Home",
                              }}
                        />
                        <Stack.Screen
                              name="Cats"
                              component={Cats}
                              options={{
                                    title: "My Cats",
                              }}
                        />
                        <Stack.Screen
                              name="Detail"
                              component={Detail}
                              options={({ route }) => ({
                                    title: route.params.cat.name,
                              })}
                        />
                        <Stack.Screen
                              name="Login"
                              component={Login}
                              options={{
                                    title: "Login",
                              }}
                        />
                        <Stack.Screen
                              name="Admin"
                              component={Admin}
                              options={{
                                    title: "Admin of the Cats",
                              }}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}
