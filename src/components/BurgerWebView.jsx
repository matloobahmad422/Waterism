import { WebView } from "react-native-webview";
import { View } from "react-native";
export default function BurgerWebView() {
  return (
    <View style={{ flex: 1 }}>
      <WebView style={{ flex: 1 }} source={{ uri: "https://youtube.com." }} />
    </View>
  );
}
