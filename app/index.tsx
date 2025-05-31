import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
        <Text>You clicked {count} times</Text>
            <Button onPress={() => setCount(count + 1)} title="Click me!" />
            <Link href="/details">View details</Link>
        </View>
    );
}

// React Native Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
