import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutPage({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/girl.png")}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.0)"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -0.5 }}
        style={styles.gradientOverlay}
      />

      <SafeAreaView>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => navigation.goBack()}>
            Back
          </Text>
        </View>

        {/* Title outside ScrollView */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>About Us</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <View style={styles.sidetoside}>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </Text>
              <Text style={styles.description2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContainer: {
    paddingVertical: Platform.OS === "ios" ? 40 : 80,
    paddingHorizontal: 15,
  },
  content: {
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    position: "absolute",
    top: Platform.OS === "ios" ? 40 : 60,
    backgroundColor: "red",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  titleContainer: {
    marginTop: Platform.OS === "ios" ? 80 : 100,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  sidetoside: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    height: '100%',
    paddingHorizontal: 20, 
    gap: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: "left",
    color: "#fff",
    marginBottom: 15,
    flex: 1, 
  },
  description2: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: "left",
    color: "#fff",
    marginBottom: 15,
    flex: 1, 
  },
});
