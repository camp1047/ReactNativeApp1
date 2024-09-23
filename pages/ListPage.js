import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ListPage({ navigation }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleItemPress = (description) => {
    setSelectedDescription(description);
    setAlertVisible(true);
  };

  return (
    <LinearGradient
      colors={["#000", "#AD1414", "#000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => navigation.goBack()}>
            Back
          </Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Pressable
                style={({ pressed }) => [
                  styles.item,
                  { backgroundColor: pressed ? "#3b5998" : "#000" },
                ]}
                onPress={() => handleItemPress(item.description)}
              >
                <LinearGradient
                  colors={item.colors}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.gradientBehindImage}
                >
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="fill"
                  />
                </LinearGradient>
                <View style={styles.infoContainer}>
                  <View style={styles.sideContainer}>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.itemDescriptionText}>
                      {item.description}
                    </Text>
                  </View>
                  <Text style={styles.itemStatusText}>{item.stat}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {alertVisible && (
          <View style={styles.overlay}>
            <View style={styles.alertContainer}>
              <Text style={styles.alertText}>
                Criminal Description:
                {"\n\n"}
              </Text>

              <Text style={styles.alertText}>{selectedDescription}</Text>

              <View style={styles.optionsContainer}>
                <Pressable
                  style={styles.closeButton}
                  onPress={() => setAlertVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
        <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const data = [
  {
    id: "1",
    title: "Evelyn",
    image: require("../assets/girl2.png"),
    description:
      "Evelyn Hayes is the criminals' secret weapon, erasing all traces of their crimes with a cheerful grin. Fast, discreet, and leaving no evidence—except maybe a hint of bubblegum.",
    stat: "avaliable.",
    colors: ["#FF7E5F", "#FEB47B"],
  },
  {
    id: "2",
    title: "Joan",
    image: require("../assets/girl3.png"),
    description:
      "Joan Carter is the underworld’s top sniper—silent, focused, and always on target. With every shot a perfect hit, she lets her rifle speak for her. One shot, one kill—no mistakes.",
    stat: "avaliable.",
    colors: ["#F7CA3D", "#EB7400"],
  },
  {
    id: "3",
    title: "Rex",
    image: require("../assets/guy2.png"),
    description:
      "Rex is the loyal sidekick every villain loves—always ready for action with a playful grin. His enthusiasm and mischief add a fun twist to every scheme, making him a surprisingly useful ally.",
    stat: "avaliable.",
    colors: ["#FF512F", "#DD2476"],
  },
];

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    color: "#fff",
    marginBottom: Platform.OS === "ios" ? -65 : -20,
    top: Platform.OS === "ios" ? 5 : 55,
    left: Platform.OS === "ios" ? 10 : 15,
    padding: 10,
    backgroundColor: "red",
    width: Platform.OS === "ios" ? 75 : 75,
    height: Platform.OS === "ios" ? 75 : 75,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    zIndex: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    // top: Platform.OS === "ios" ? -60 : -10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    top: Platform.OS === "ios" ? 10 : 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    padding: 16,
    width: 350,
    minHeight: 450,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 5,
  },
  gradientBehindImage: {
    width: 300,
    height: 340,
    borderRadius: 8,
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 340,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 15,
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    flexShrink: 1,
    // marginBottom: 10,
    overflow: "hidden",
    alignSelf: "flex-start",
    marginBottom: 3,
  },
  itemDescriptionText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left",
  },
  itemStatusText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    textAlign: "right",
    flexShrink: 1,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 15,
    overflow: "hidden",
    alignSelf: "center",
    // marginBottom: 10,
  },
  sideContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    // marginBottom: 50,
    width: 190,
    // top: -15,
    flexShrink: 1,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // width: 345,
    gap: 5,
    marginBottom: 15,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  alertContainer: {
    //makes the alert box
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 10,
  },
  alertText: {
    fontSize: 16,
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    gap: 10,
    marginTop: 25,
  },
  alertButton: {
    color: "#000",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 5,
    width: 250,
    borderColor: "#000",
    borderWidth: 1,
  },
  closeButton: {
    color: "white",
    alignItems: "center",
    padding: 10,
    backgroundColor: "red",
    fontWeight: "bold",
    borderRadius: 5,
    marginHorizontal: 5,
    width: 250,
    borderWidth: 1,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
