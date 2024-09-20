import { SafeAreaView,StyleSheet,Text,View,Image,ScrollView,Button,Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from '@react-native-community/blur';



export default function AboutPage({ navigation }) {
  return (
    <LinearGradient
      colors={['#B2CACF', '#87B7CC', '#59A5CA']}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}   
      style={styles.gradient}
    >
      <SafeAreaView>
      <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Back
        </Text>
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
        <View style={styles.imageRow}>
          <Image source={require("../assets/girl.png")} style={styles.image} />
          <Image source={require("../assets/dog.png")} style={styles.image} />
          <Image source={require("../assets/dog.png")} style={styles.image} />
          </View>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        </ScrollView>
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
    // backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingVertical: Platform.OS === 'ios' ? 10 : 50,
    paddingHorizontal: 15,
  },
  content: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    top: Platform.OS === 'ios' ? 16 : 50,
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'flex-start',
    paddingLeft: 15,
    zIndex: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 20,
  },
  image: {
    borderColor: "grey",
    borderWidth: 2,
    width: Platform.OS === 'ios' ? 110 : 100,
    height: 190,
    borderRadius: 6, 
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#fff",
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
