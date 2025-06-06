import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";

const router = useRouter();

export default function arun() {
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            router.push("/details");
          }}
        />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <Text style={styles.mytext}>Arun</Text>
      <Button
        onPress={() => {
          console.log(arun);
        }}
      >
        Arun
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mytext:{
    width:100,
    height:48,
    color:"teal"
  }
});
