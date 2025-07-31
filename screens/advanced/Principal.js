import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CardComida } from "../../components/CardComida";

export default function Principal() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView 
                style={styles.container} 
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>Mais Pedidos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/pizza.jpg")} nome="Pizza" preco="R$ 29,90" />
                        <CardComida foto={require("../../images/hamburger.jpg")} nome="Burger" preco="R$ 19,90" />
                        <CardComida foto={require("../../images/japa-barca.jpg")} nome="Barca Japa" preco="R$ 39,90" />
                        <CardComida foto={require("../../images/esfiha.jpg")} nome="Esfiha" preco="R$ 9,90" />
                        <CardComida foto={require("../../images/strogonoff.jpg")} nome="Strogonoff" preco="R$ 24,90" />
                        <CardComida foto={require("../../images/parmegiana.jpg")} nome="Parmegiana" preco="R$ 35,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Massas</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/carbonara.jpg")} nome="Carbonara" preco="R$ 49,90" />
                        <CardComida foto={require("../../images/lasanha.jpg")} nome="Lasanha" preco="R$ 39,90" />
                        <CardComida foto={require("../../images/almondegas.jpg")} nome="Almondegas" preco="R$ 29,90" />
                        <CardComida foto={require("../../images/esfiha.jpg")} nome="Esfiha" preco="R$ 9,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Bebidas</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/coca-cola.jpg")} nome="Coca Cola" preco="R$ 7,90" />
                        <CardComida foto={require("../../images/guarana.jpg")} nome="Guarana" preco="R$ 6,90" />
                        <CardComida foto={require("../../images/soda.jpg")} nome="Soda" preco="R$ 5,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Clássicos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas2}>
                        <CardComida foto={require("../../images/hamburger.jpg")} nome="Hamburger" preco="R$ 42,90" />
                        <CardComida foto={require("../../images/hotdog.jpg")} nome="Hot Dog" preco="R$ 19,90" />
                        <CardComida foto={require("../../images/lasanha.jpg")} nome="Lasanha" preco="R$ 39,90" />
                        <CardComida foto={require("../../images/pastel.jpg")} nome="Pastel" preco="R$ 19,90" />
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        marginTop: 70,
    },
    contentContainer: {
        alignItems: "stretch",
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#black",
        marginLeft: 20,
    },
    title2: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#black",
        marginLeft: 20,
        marginTop: 35,
    },
    description: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        lineHeight: 24,
    },
    comidas: {
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#FAA250",
        padding: 20,
        marginTop: 20,
        width: "100%",
        justifyContent: "center",
    },
    comidas2: {
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#FAA250",
        padding: 20,
        marginTop: 20,
        marginBottom: 80,
        width: "100%",
        justifyContent: "center",
    },
});
