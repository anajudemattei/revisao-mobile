import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function CardComida({ foto, nome, preco }) {
    return (
        <View style={styles.itemBox}>
            <Image source={foto} style={styles.image} />
            <Text style={styles.itemName}>{nome}</Text>
            <Text style={styles.itemPreco}>{preco}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: "#5a2c0057",
        padding: 10,
        borderRadius: 15,
        alignItems: "center",
        width: 150,
        height: 190,
        justifyContent: "center",
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000000af",
    },
    itemPreco: {
        fontSize: 13,
        color: "#f5f5f5a1",
    },
});