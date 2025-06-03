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
            <Button
                icon="plus"        
                mode="contained" 
                onPress={() => setCount(count + 1)}
            >
                Click me! to increase
            </Button>
            <Button
                mode="contained-tonal"
                onPress={() => {
                    router.push("/details");
                }}
            >
                Fab page
            </Button>

            <Button
                mode="elevated"
                onPress={() => {
                    router.push("/arun");
                }}
            >
                Tab page
            </Button>
            <Button
                icon="google"
                mode="contained"
                onPress={() => console.log("Pressed")}
            >
                Press me to console log
            </Button>
            <Button
                mode="outlined"
                onPress={() => {
                    router.push("/ani");
                }}
            >
                Animation page
            </Button>
            <Button
                mode="contained"
                onPress={() => {
                    router.push("/ui");
                }}
            >
            Ui Design
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
