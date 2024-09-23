import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutPage({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/guy3.png")}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 2)", "rgba(0, 0, 0, 0.0)"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradientOverlay}
      />

      <SafeAreaView>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => navigation.goBack()}>
            Back
          </Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>About Us</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.alb}>
            <View style={styles.textGroup}>
              <Text style={styles.nameStuff}>Dean</Text>
              <Text style={styles.desStuff}>Teenage Weapon maker</Text>
            </View>
            <Text style={styles.al}>Hired</Text>
          </View>

          <View style={styles.desc}>
            <ScrollView style={styles.scrollContainer}>
              <View style={styles.sidetoside}>
                <Text style={styles.description}>
                  Dean grew up in a tough neighborhood, where survival often
                  meant getting creative. From a young age, he showed an
                  incredible talent for crafting and tinkering, often
                  repurposing scrap metal and old machinery into makeshift
                  gadgets. His fascination with weapons began when he found an
                  old, broken firearm and managed to fix it, impressing the
                  local gang with his skills.
                  {"\n\n"}
                  Recognizing his potential, a notorious crew took him under
                  their wing. They became his family, teaching him the ropes of
                  weapon making while also introducing him to the world of
                  crime. Dean quickly became the go-to guy for custom gear,
                  blending his inventive spirit with the crew’s needs. Despite
                  his age, he approaches weapon making with a mix of precision
                  and artistry, always looking for ways to enhance functionality
                  and style.
                  {"\n\n"}
                  Though he's deeply loyal to his crew, Dean often grapples with
                  the moral implications of his work. He dreams of one day using
                  his skills for something greater, but for now, he’s content
                  being the inventive teen in the shadows, crafting the tools
                  that help his crew thrive. His passion for creation drives
                  him, even as he wrestles with the consequences of his choices.
                  {"\n\n"}
                  In the quiet moments, Dean sketches designs for weapons that
                  could change the game, imagining a future where his creations
                  serve a higher purpose. He hopes to channel his talent into
                  building tools that protect rather than harm. As he navigates
                  the complexities of loyalty, creativity, and morality, Dean
                  remains determined to find a way to reconcile his love for
                  invention with his desire to make a difference in the world
                  around him.
                </Text>
              </View>
            </ScrollView>
            <View style={styles.description2}>
              <Text style={styles.label}>Health</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "70%" }]} />
              </View>
              <Text style={styles.value}>70/100</Text>

              <Text style={styles.label}>Power</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "50%" }]} />
              </View>
              <Text style={styles.value}>50/100</Text>

              <Text style={styles.label}>Experience</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "80%" }]} />
              </View>
              <Text style={styles.value}>80/100</Text>

              <Text style={styles.label}>Strength</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "50%" }]} />
              </View>
              <Text style={styles.value}>50/100</Text>

              <Text style={styles.label}>Charm</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "20%" }]} />
              </View>
              <Text style={styles.value}>20/100</Text>

              <Text style={styles.label}>Stealth</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "45%" }]} />
              </View>
              <Text style={styles.value}>45/100</Text>

              <Text style={styles.label}>Combat</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: "65%" }]} />
              </View>
              <Text style={styles.value}>65/100</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: Platform.OS === "ios" ? "80%" : "80%",
    top: Platform.OS === "ios" ? 30 : 10,
  },
  gradientOverlay: {
    position: "absolute",
    top: Platform.OS === "ios" ? -165 : -130,
    left: 0,
    right: 0,
    bottom: 0,
  },
  desc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollContainer: {
    top: Platform.OS === "ios" ? -10 : -5,
    height: Platform.OS === "ios" ? 500 : 500,
    paddingVertical: Platform.OS === "ios" ? 5 : 5,
    paddingHorizontal: 5,
    backgroundColor: "black",
  },
  content: {
    alignItems: "center",
    height: Platform.OS === "ios" ? 200 : 400,
    top: Platform.OS === "ios" ? -140 : 10,
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    top: Platform.OS === "ios" ? -220 : -100,
    left: Platform.OS === "ios" ? 10 : 15,
    backgroundColor: "red",
    width: Platform.OS === "ios" ? 70 : 65,
    height: Platform.OS === "ios" ? 70 : 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  titleContainer: {
    marginTop: Platform.OS === "ios" ? 130 : 100,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    top: Platform.OS === "ios" ? -340 : -190,
  },
  alb: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 345,
    gap: 75,
    marginBottom: 15,
  },
  textGroup: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  nameStuff: {
    fontSize: 18,
    lineHeight: 17,
    textAlign: "left",
    color: "#fff",
    fontWeight: "bold",
  },
  desStuff: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: "left",
    color: "#fff",
    marginTop: Platform.OS === "ios" ? 5 : 5,
  },
  al: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    padding: 10,
    color: "#fff",
    backgroundColor: "red",
    overflow: "hidden",
    borderRadius: 15,
    marginBottom: 15,
    flex: 1,
  },
  sidetoside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: "left",
    color: "#fff",
    marginBottom: 15,
    flex: 2,
  },
  description2: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: "left",
    color: "#fff",
    marginBottom: 15,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  barContainer: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
  },
  bar: {
    height: "100%",
    backgroundColor: "red",
    borderRadius: 10,
  },
  value: {
    textAlign: "right",
  },
});
