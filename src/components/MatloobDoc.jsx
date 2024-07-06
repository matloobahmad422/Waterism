import { Button, TextInput, View, Image } from "react-native";
import { useState } from "react";
import { firestoreConfig } from "../database/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function MatloobDoc() {
  const [logPassword, setLogPassword] = useState("");
  const [logUsername, setLogUsername] = useState("");
  function onLoginPress() {
    addDoc(collection(firestoreConfig, "wellcome"), {
      Username: logUsername,
    });
  }
  return (
    <View className="flex-1 bg-slate-600">
      <View>
        <FontAwesome
          name="circle"
          size={170}
          color="red"
          style={{ marginTop: -40, marginLeft: -40 }}
        />
        <FontAwesome
          name="circle"
          size={170}
          color="red"
          style={{ marginTop: -100, marginLeft: -80 }}
        />
        <Image
          source={require("../../assets/logo.png.png")}
          className="h-20 w-20 rounded-3xl ml-36"
        />
      </View>
      <View className="mx-3 mt-20">
        <TextInput
          placeholder="Username"
          className="mt-20 pl-10 border-2 justify-center p-2 bg-slate-300 "
          onChangeText={setLogUsername}
        />
        <TextInput
          placeholder="Password"
          className="mt-10 pl-10 border-2 justify-center p-2 bg-slate-300"
          onChange={setLogPassword}
        />
      </View>
      <View className="my-10 mx-3">
        <Button title="Login" onPress={onLoginPress} />
      </View>
    </View>
  );
}
