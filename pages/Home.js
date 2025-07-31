import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DELIVERY</Text>
            <Text style={styles.subtitle}>Peça já!</Text>
            <Image
                source={require("../images/logo.png")}
                style={styles.image}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Drawer")}>
                <Text style={styles.buttonText}>Bem-vindo 🛍️🍟🍴</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF3E0",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#222",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        color: "#666",
        marginBottom: 30,
        textAlign: "center",
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 75,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: "#faa250",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    button: {
        backgroundColor: "#faa250",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});