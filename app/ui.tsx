// app/index.js
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const router = useRouter();

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.header}>My Notes</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.main1}>
                    <Text style={color="white"}>Main 1</Text>
                </View>
                <View style={styles.main2}>
                    <Text>Main 2</Text>
                </View>
            </View>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop:20,
    },
    top:{
        height:80,   
    },
    bottom:{
        flex:2,
        flexDirection:'row', 
        alignItems: "start",
    },
    main1:{
        backgroundColor:"teal",
        width:150,
        height:250,
        borderRadius:20,
        marginRight:20
    },
    main2:{
        backgroundColor:"royalblue",
        width:150,
        height:250,
        borderRadius:20,   
    },
    header:{
        fontSize:50,
    }
});
