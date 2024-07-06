// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";

import { auth } from "../database/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email === "") {
      alert("Please enter email first");
      return; // do not run the code after it
    }
    if (password === "") {
      alert("Please enter password first");
      return; // do not run the code after it
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        onHomePagePress();
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
        setEmail("");
        setPassword("");
      });
  };
  function onHomePagePress() {
    navigation.navigate("HomePage");
  }

  function onGoToRegisterPress() {
    navigation.navigate("Register");
  }

  return (
    <View className="flex-1 bg-white">
      <View style={{ height: "20%", width: "20%" }}>
        <Image
          source={require("../../assets/design.png.png")}
          className="h-40 w-40"
        />
      </View>
      <View
        style={{
          height: "15%",
          width: "15%",
          marginLeft: 135,
        }}
      >
        <Image
          source={require("../../assets/logo.png.png")}
          className="h-20 w-20"
        />
      </View>
      <View className="flex-1 justify-center p-4 mb-40 bg-white">
        <Text className="text-2xl font-bold mb-4 text-center">Login</Text>

        <TextInput
          className="border p-2 mb-4 rounded"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          className="border p-2 mb-4 rounded"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title="Login" onPress={handleLogin} />

        <TouchableOpacity
          onPress={onGoToRegisterPress}
          className="flex self-end py-2"
        >
          <Text className="underline text-blue-500">
            Don't Have an account? Register!
          </Text>
        </TouchableOpacity>

        {loading ? (
          <View
            style={{ backgroundColor: "rgba(200,0,0,0.5)" }}
            className="w-screen h-screen justify-center items-center absolute"
          >
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default Login;
