import { View, Text, StyleSheet } from "react-native";

export default function arun() {
    return (
        <View style={styles.container}>
            <Text>arun</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
});
