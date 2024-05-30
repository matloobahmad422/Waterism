import { FlatList, View } from "react-native";
import BurgerPepsi from "../components/BurgerPepsi";
import DatePickerModal from "../components/DatePickerModal";
export default function Home() {
  const BurgerPepsiCountData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const _renderItem = ({ Item }) => <BurgerPepsi />;
  return (
    <View className="flex">
      <FlatList
        numColumns={3}
        data={BurgerPepsiCountData}
        renderItem={_renderItem}
        style={{
          marginLeft: 30,
          padding: 30,
          marginTop: 100,
        }}
      />
      <DatePickerModal />
    </View>
  );
}
