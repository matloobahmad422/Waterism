import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Register from "../screens/Register";
import Login from "../screens/Login";
import MatloobDoc from "../components/MatloobDoc";
import HomePage from "../screens/HomePage";
const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name={"Login"} component={Login} />
        <MainStack.Screen name={"HomePage"} component={HomePage} />
        <MainStack.Screen name={"Register"} component={Register} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
