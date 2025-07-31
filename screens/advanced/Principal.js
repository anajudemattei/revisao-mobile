import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Principal() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>API Integration</Text>
            <Text style={styles.description}>
                Página principal onde vai ter as comidas!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        lineHeight: 24,
    },
});
