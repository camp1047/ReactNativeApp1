import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Animated,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import Svg, { Path } from "react-native-svg";
import { useFocusEffect } from "@react-navigation/native";

export default function HomePage({ navigation }) {
  const [fontsLoaded] = useFonts({
    SedgwickAveDisplay: require("../assets/SedgwickAveDisplay-Regular.ttf"),
  });

  const [alertVisible, setAlertVisible] = useState(false);

  const cloud1Animation = useRef(new Animated.Value(0)).current;
  const cloud2Animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloud1Animation, {
          toValue: 60,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(cloud1Animation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(cloud2Animation, {
          toValue: 150,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(cloud2Animation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [cloud1Animation, cloud2Animation]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setAlertVisible(false);
      };
    }, [])
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    // https://docs.expo.dev/versions/latest/sdk/linear-gradient/
    <LinearGradient
      colors={["#B2CACF", "#87B7CC", "#59A5CA"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <Animated.Image
          source={require("../assets/clouds1.png")}
          style={[
            styles.cloudImage,
            { transform: [{ translateX: cloud1Animation }] },
          ]}
          resizeMode="contain"
        />

        <View style={styles.dogContainer}>
          <TouchableOpacity
            onPress={() => setAlertVisible(!alertVisible)}
            activeOpacity={1}
          >
            <Image
              source={require("../assets/guy.png")}
              style={styles.dogImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Image
          source={require("../assets/doggy2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/star1.png")}
          style={styles.star}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/grassfield.png")}
          style={styles.grassfield}
          resizeMode="contain"
        />

        <Animated.Image
          source={require("../assets/clouds2.png")}
          style={[
            styles.cloudImage2,
            styles.cloud2,
            { transform: [{ translateX: cloud2Animation }] },
          ]}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.outlineText}>Wreck City</Text>
          {/* <Text style={styles.text}>Welcome Back</Text> */}

          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={styles.button1Container}
            activeOpacity={1}
          >
            <View style={styles.svgContainer}>
              <Svg viewBox="0 0 200 200" width={200} height={200}>
                <Path
                  fill="#F7CA3D"
                  borderColor="#fff"
                  borderWidth="3"
                  d="M29.9,-46.6C44.8,-37,67.1,-38.9,75.8,-31.3C84.6,-23.6,79.7,-6.4,71.8,6.4C63.8,19.3,52.9,27.8,44.8,40.7C36.6,53.7,31.3,70.9,21.1,75.5C11,80.1,-3.9,72,-13.1,61.6C-22.4,51.2,-26,38.4,-30,28.8C-34.1,19.2,-38.5,12.7,-47.3,2.1C-56.1,-8.4,-69.1,-23,-70.2,-36.9C-71.3,-50.7,-60.5,-63.9,-46.8,-74.1C-33.1,-84.2,-16.5,-91.2,-4.5,-84.2C7.5,-77.2,15,-56.1,29.9,-46.6Z"
                  transform="translate(100 100)"
                />
              </Svg>
              <Text style={styles.buttonText}>About Me</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("List")}
            style={styles.button2Container}
            activeOpacity={1}
          >
            <View style={styles.svgContainer}>
              <Svg viewBox="0 0 200 200" width={170} height={200}>
                <Path
                  fill="#000"
                  d="M38.7,-51.2C53.7,-50.7,71.7,-45.8,81.6,-34.3C91.6,-22.7,93.5,-4.5,82.1,5.4C70.7,15.3,45.9,16.8,32.7,23.6C19.4,30.5,17.8,42.7,9.8,54.8C1.8,66.9,-12.4,79,-21.9,75.7C-31.4,72.4,-36,53.8,-42.1,40.2C-48.1,26.5,-55.6,17.8,-61.5,6.1C-67.4,-5.5,-71.7,-20.1,-69.4,-34.4C-67.1,-48.7,-58.2,-62.7,-45.5,-64.2C-32.9,-65.7,-16.4,-54.7,-2.3,-51.2C11.9,-47.7,23.8,-51.6,38.7,-51.2Z"
                  transform="translate(100 100)"
                />
              </Svg>
              <Text style={styles.buttonText}>The Crew</Text>
            </View>
          </TouchableOpacity>
        </View>

        {alertVisible && (
          <View style={styles.overlay}>
            <View style={styles.alertContainer}>
              <Text style={styles.alertText}>What do you want?</Text>
              <Text style={styles.alertText}>
                You wanna see the rest of the crew?
              </Text>
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  style={styles.alertButton}
                  onPress={() => navigation.navigate("List")}
                >
                  <Text>Okay I'll Meet them</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setAlertVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 64,
    left: 30,
    fontFamily: "SedgwickAveDisplay",
    color: "#000",
    marginBottom: 20,
    zIndex: 10,
  },
  content: {
    alignItems: "center",
    marginBottom: 40,
    left: Platform.OS === "ios" ? -40 : -60,
    zIndex: 10,
  },
  outlineText: {
    height: Platform.OS === "ios" ? 94 : 200,
    fontSize: Platform.OS === "ios" ? 64 : 60,
    fontFamily: "SedgwickAveDisplay",
    color: "#E02A1A",
    position: "absolute",
    top: Platform.OS === "ios" ? -75 : -165,
    left: Platform.OS === "ios" ? -10 : 20,
    zIndex: 1,
    textShadowColor: "white",
    textShadowOffset: { width: 3, height: 4 },
    textShadowRadius: 1,
    zIndex: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    elevation: 3,
    borderColor: "#fff",
    borderWidth: 3,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 5,
  },
  button1Container: {
    top: Platform.OS === "ios" ? 10 : 25,
    left: Platform.OS === "ios" ? -30 : -15,
    alignItems: "center",
    justifyContent: "center",
  },
  button2Container: {
    top: Platform.OS === "ios" ? -45 : -45,
    left: Platform.OS === "ios" ? -30 : -45,
    alignItems: "center",
    justifyContent: "center",
  },
  svgContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    top: 70,
  },
  image: {
    position: "absolute",
    width: 400,
    height: 400,
    right: 93,
    bottom: -60,
    zIndex: 1,
    //https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
  },
  dogContainer: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  dogImage: {
    position: "absolute",
    width: 650,
    height: 650,
    right: -400,
    bottom: -630,
  },
  grassfield: {
    position: "absolute",
    width: 600,
    height: 600,
    right: -203,
    bottom: 0,
    zIndex: 0,
    //https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
  },
  cloudImage: {
    position: "absolute",
    width: 600,
    height: 550,
    top: 477,
    left: -100,
    zIndex: 2,
  },
  star: {
    position: "absolute",
    width: 300,
    height: 250,
    top: 20,
    left: -40,
    zIndex: 0,
  },
  cloudImage2: {
    position: "absolute",
    width: 500,
    height: 450,
    left: -100,
    zIndex: 0,
  },
  cloud2: {
    top: -15,
  },
  overlay: {
    //makes the background darker
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
    //makes the buttons in the alert box next to each other or on top
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
    borderRadius: 5,
    marginHorizontal: 5,
    width: 250,
    borderColor: "#000",
    borderWidth: 1,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
