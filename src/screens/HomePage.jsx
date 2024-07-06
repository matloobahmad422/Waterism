import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
export default function () {
  const imageA = {
    uri: "https://img.freepik.com/premium-photo/panoramic-cityscape-view-san-francisco-financial-downtown-day-time-from-rooftop-california-united-states-technologies-education-concept-academic-research-top-ranking-university-hologram_269648-13433.jpg?w=740",
  };

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#E0FFFF" }}>
      <View style={styles.topview}>
        <ImageBackground source={imageA} style={styles.imgbackview}>
          <Text style={styles.gradeview}>Grade</Text>
          <Text style={styles.upview}>Up</Text>

          <Text style={styles.headingview}>
            The Most Comprehensive Preparation and Testing App{" "}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.directionview}>
        <TouchableOpacity>
          <View style={styles.Viewitem}>
            <View style={styles.imgview}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5596.jpg?t=st=1719560369~exp=1719563969~hmac=b3cb2e54527bdad15edad83a7fb710dd8acf87bddf31e9017dc4646581026031&w=740",
                }}
                style={styles.imgprop}
              />
            </View>
            <Text style={styles.testview}>Test</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Viewitem}>
            <View style={styles.imgview}>
              <Image
                source={{
                  uri: "https://img.freepik.com/premium-photo/front-view-books-with-copy-space-education-day_23-2149241022.jpg?w=740",
                }}
                style={styles.imgprop}
              />
            </View>
            <Text style={styles.syllabusview}>Syllabus</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.directionview}>
        <TouchableOpacity>
          <View style={styles.Viewitem}>
            <View style={styles.imgview}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/afro-african-with-curly-hair-boy-reading-book_1308-135269.jpg?t=st=1719819577~exp=1719823177~hmac=a328b9190800a5210da817d7fff34fddb668aa7cc68d48a144bd96d67d877294&w=740",
                }}
                style={styles.imgprop}
              />
            </View>
            <Text style={styles.syllabusview}>Reading</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Viewitem}>
            <View style={styles.imgview}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/scene-with-many-kids-studying-classroom_1308-65612.jpg?t=st=1719819132~exp=1719822732~hmac=553114bf634f8c56829129b710d2de588ccd8ff8fb3767e9b9b9e3cf5a6ad3da&w=740",
                }}
                style={styles.imgprop}
              />
            </View>
            <Text style={styles.classview}>Attend Class</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.directionview}>
        <TouchableOpacity>
          <View style={styles.Viewitem}>
            <View style={styles.imgview}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4885.jpg?t=st=1719821252~exp=1719824852~hmac=f874498321f9caaea94a68b9244f2c92fbd1fe3f3d6901af931ccf0f6e7a9043&w=740",
                }}
                style={styles.imgprop}
              />
            </View>
            <Text style={styles.classview}>Task Assign</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Viewitem}>
            <View style={styles.imgview}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/mystery-box-collage_23-2150061728.jpg?t=st=1719823076~exp=1719826676~hmac=501ed783b212de1748baa2a9b6aa433036b5be99fd867883fc8ae6a86519fbfb&w=740",
                }}
                style={styles.imgprop}
              />
            </View>
            <Text style={styles.syllabusview}>Q.bank</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Viewitem: {
    height: "80%",
    width: 150,
    backgroundColor: "skyblue",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  topview: {
    height: "35%",
    width: "100%",
    backgroundColor: "#A5E9C3",
  },
  directionview: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
  },

  imgbackview: {
    height: "100%",
    width: "100%",
  },
  gradeview: {
    fontSize: 25,
    position: "absolute",
    left: 125,
    top: 130,
    color: "aqua",
    fontWeight: "bold",
  },
  upview: {
    fontSize: 25,
    position: "absolute",
    left: 195,
    top: 130,
    color: "red",
    fontWeight: "bold",
  },
  headingview: {
    position: "absolute",
    left: 15,
    right: 10,
    top: 170,
    fontSize: 25,
    fontWeight: "bold",
    color: "aqua",
  },
  testview: {
    fontSize: 18,
    position: "absolute",
    bottom: 0,
    left: 45,
    fontWeight: "bold",
  },
  syllabusview: {
    fontSize: 18,
    position: "absolute",
    bottom: 0,
    left: 35,
    fontWeight: "bold",
  },
  classview: {
    fontSize: 18,
    position: "absolute",
    bottom: 0,
    left: 25,
    fontWeight: "bold",
  },
  imgview: {
    marginLeft: 10,
    marginBottom: 20,
    marginRight: 20,
    paddingBottom: 10,
    marginTop: 10,
    borderRadius: 2,
  },
  imgprop: {
    height: 80,
    width: 130,
    borderRadius: 10,
  },
});
