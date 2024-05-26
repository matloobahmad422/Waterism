import { TouchableOpacity, View, Image } from "react-native";
import burger from "../../assets/burger.jpg";
import pepsi from "../../assets/pepsi.jpg";
import React, { useState } from "react";
export default function BurgerPepsi() {
  const [tappedBurgerPepsi, setTappedBurgerPepsi] = useState(pepsi);
  function onBurgerPepsiPressed() {
    if (tappedBurgerPepsi === pepsi) {
      setTappedBurgerPepsi(burger);
    } else {
      setTappedBurgerPepsi(pepsi);
    }
  }
  return (
    <View>
      <TouchableOpacity onPress={onBurgerPepsiPressed}>
        <Image
          source={tappedBurgerPepsi}
          style={{
            height: 80,
            width: 80,
            marginVertical: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
