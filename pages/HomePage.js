import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Animated,
  Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

export default function HomePage({ navigation }) {
  const [fontsLoaded] = useFonts({
    SedgwickAveDisplay: require("../assets/SedgwickAveDisplay-Regular.ttf"),
  });

  const cloud1Animation = useRef(new Animated.Value(0)).current;
  const cloud2Animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloud1Animation, {
          toValue: 100,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(cloud1Animation, {
          toValue: 0,
          duration: 5000,
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
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

  }, [cloud1Animation, cloud2Animation]);

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
        <Image
          source={require("../assets/guy.png")}
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
          <Text style={styles.outlineText}>Welcome Back</Text>
          {/* <Text style={styles.text}>Welcome Back</Text> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("About")}
          >
            <Text style={styles.buttonText}>About Page</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("List")}
          >
            <Text style={styles.buttonText}>List Page</Text>
          </TouchableOpacity>
        </View>

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
    fontSize: 44,
    left: 30,
    fontFamily: "SedgwickAveDisplay",
    color: "#000",
    marginBottom: 20,
    zIndex: 10,
  },
  content: {
    alignItems: "center",
    marginBottom: 300,
    left: Platform.OS === 'ios' ? -40 : -50,
    zIndex: 10, 
  },
  outlineText: {
    fontSize: 44,
    fontFamily: "SedgwickAveDisplay",
    color: "#AD453B",
    position: "absolute",
    top: Platform.OS === 'ios' ? -80 : -130,
    left: Platform.OS === 'ios' ? 25 : 30, 
    zIndex: 1,
    textShadowColor: "grey",
    textShadowOffset: { width: 2, height: 2 },
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
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    zIndex: 10,
  },
  image: {
    position: "absolute",
    width: 600,
    height: 600,
    right: -203,
    bottom: 0,
    zIndex: 1,
    //https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
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
    width: 500,
    height: 450,
    top: 10,
    left: -100,
    zIndex: 1,
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
    width: 600,
    height: 550,
    top: 100,
    left: -200,
    zIndex: 2,
  },
  cloud2: {
    top: 458,
  },
});
