import { StatusBar } from "expo-status-bar";
import {FlatList, SafeAreaView, StyleSheet, Text, View, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ListPage({ navigation }) {
  return (
    <LinearGradient
      colors={['#B2CACF', '#87B7CC', '#59A5CA']}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}   
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
      <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Back
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                styles.item,
                { backgroundColor: pressed ? "#3b5998" : "#00bfff" },
              ]}
              onPress={() => alert(`You pressed ${item.title}`)}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" },
  { id: "7", title: "Item 7" },
  { id: "8", title: "Item 8" },
  { id: "9", title: "Item 9" },
  { id: "10", title: "Item 10" },
  { id: "11", title: "Item 11" },
  { id: "12", title: "Item 12" },
  { id: "13", title: "Item 13" },
  { id: "14", title: "Item 14" },
  { id: "15", title: "Item 15" },
  { id: "16", title: "Item 16" },
  { id: "17", title: "Item 17" },
  { id: "18", title: "Item 18" },
  { id: "19", title: "Item 19" },
  { id: "20", title: "Item 20" },
  { id: "21", title: "Item 21" },
];

const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'flex-start', 
    paddingLeft: 15,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 18,
    color: "#fff", 
    textAlign: "center",
  },
});

