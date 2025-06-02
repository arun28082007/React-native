// app/index.js
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const router = useRouter();

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">You clicked {count} times</Text>
            <Button mode="contained" onPress={() => setCount(count + 1)}>
                Click me!
            </Button>

            <Button mode="contained-tonal"
                onPress={() => {
                    router.push("/details");
                }}
            >
                Details page
            </Button>

            <Button mode="elevated"
                onPress={() => {
                    router.push("/arun");
                }}
            >
                Arun page
            </Button>
            <Button 
                icon="home"
                mode="contained"
                onPress={() => console.log("Pressed")}
            >
                Press me
            </Button>
            <Button mode="outlined"
                onPress={() => {
                    router.push("/ani");
                }}
            >
                Animation page
            </Button>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 20
    }
});
