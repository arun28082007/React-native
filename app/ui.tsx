import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//const colorScheme = useColorScheme();
//const isDarkMode = colorScheme === 'dark';

export default function Ui() {
    const [count, setCount] = useState(0);
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>ArDev</Text>
            </View>

            <View style={style.data}>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={style.mytext}>Hello arun! {count}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    data: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        //backgroundColor: isDarkMode ? 'black' : 'white',
    },

    button: {
        backgroundColor: "#ff7f50",
        width: 120,
        height: 50,
        borderRadius: 15,
        padding: 10,
        elevation: 20
    },

    mytext: {
        textAlign: "center",
        color: "#eee"
    },

    header: {
        height: 50,
        backgroundColor: "royalblue"
    },

    headerText: {
        paddingTop: 5,
        paddingLeft: 30,
        color: "white",
        fontSize: 30
    }
});
