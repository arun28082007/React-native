import { View, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";

const router = useRouter();

export default function arun() {
    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
