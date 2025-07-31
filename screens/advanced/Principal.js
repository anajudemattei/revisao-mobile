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
                        <CardComida foto={require("../../images/combo.jpg")} nome="Combo de Hamburger" preco="R$ 79,90" />
                        <CardComida foto={require("../../images/quesadillas.jpg")} nome="Quesadillas" preco="R$ 12,90" />
                        <CardComida foto={require("../../images/frango-frito.jpg")} nome="Frango Frito" preco="R$ 12,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Massas</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/carbonara.jpg")} nome="Carbonara" preco="R$ 49,90" />
                        <CardComida foto={require("../../images/lasanha.jpg")} nome="Lasanha" preco="R$ 39,90" />
                        <CardComida foto={require("../../images/almondegas.jpg")} nome="Almondegas" preco="R$ 29,90" />
                        <CardComida foto={require("../../images/esfiha.jpg")} nome="Esfiha" preco="R$ 9,90" />
                        <CardComida foto={require("../../images/mac-and-cheese.jpg")} nome="Mac and Cheese" preco="R$ 29,90" />
                        <CardComida foto={require("../../images/torta.jpg")} nome="Torta de Frango" preco="R$ 10,90" />
                        <CardComida foto={require("../../images/nhoque.jpg")} nome="Nhoque" preco="R$ 40,90" />
                        <CardComida foto={require("../../images/macarrao-frango.jpg")} nome="Macarrão com frango" preco="R$ 34,90" />
                        <CardComida foto={require("../../images/macarrao-camarao.jpg")} nome="Macarrão com camarão" preco="R$ 37,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Pratos Prontos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/creme-de-milho.jpg")} nome="Creme de milho" preco="R$ 28,90" />
                        <CardComida foto={require("../../images/feijoada.jpg")} nome="Feijoada" preco="R$ 30,90" />
                        <CardComida foto={require("../../images/salada.jpg")} nome="Salada Cesar" preco="R$ 29,90" />
                        <CardComida foto={require("../../images/panqueca.jpg")} nome="Panqueca" preco="R$ 24,90" />
                        <CardComida foto={require("../../images/yaskisoba.jpg")} nome="Yaskisoba" preco="R$ 32,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Doces</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/brownie.jpg")} nome="Brownie" preco="R$ 10,90" />
                        <CardComida foto={require("../../images/churros.jpg")} nome="Churros" preco="R$ 15,90" />
                        <CardComida foto={require("../../images/macarrons.jpg")} nome="Macarrons" preco="R$ 29,90" />
                        <CardComida foto={require("../../images/morango-do-amor.jpg")} nome="Morango do amor" preco="R$ 10,90" />
                        <CardComida foto={require("../../images/cookie.jpg")} nome="Cookie" preco="R$ 17,90" />
                        <CardComida foto={require("../../images/pudim.jpg")} nome="Pudim" preco="R$ 17,90" />
                        <CardComida foto={require("../../images/mousse-maracuja.jpg")} nome="Mousse de maracuja" preco="R$ 17,90" />
                        <CardComida foto={require("../../images/palha-italiana.jpg")} nome="Palha Italiana" preco="R$ 17,90" />
                        <CardComida foto={require("../../images/donuts.jpg")} nome="Donuts" preco="R$ 17,90" />
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Bebidas</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/coca-cola.jpg")} nome="Coca Cola" preco="R$ 7,90" />
                        <CardComida foto={require("../../images/guarana.jpg")} nome="Guarana" preco="R$ 6,90" />
                        <CardComida foto={require("../../images/soda.jpg")} nome="Soda" preco="R$ 5,90" />
                        <CardComida foto={require("../../images/suco-morango.jpg")} nome="Suco de Morango" preco="R$ 18,90" />
                        <CardComida foto={require("../../images/suco-manga.jpg")} nome="Suco de Manga" preco="R$ 15,90" />
                        <CardComida foto={require("../../images/suco-kiwi.jpg")} nome="Suco de Kiwi" preco="R$ 19,90" />
                        <CardComida foto={require("../../images/suco-maracuja.jpg")} nome="Suco de Maracuja" preco="R$ 18,90" />
                        <CardComida foto={require("../../images/suco-melancia.jpg")} nome="Suco de Melancia" preco="R$ 14,90" />
                        <CardComida foto={require("../../images/suco-laranja.jpg")} nome="Suco de Laranja" preco="R$ 15,90" />
                        
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Clássicos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas2}>
                        <CardComida foto={require("../../images/hamburger.jpg")} nome="Hamburger" preco="R$ 42,90" />
                        <CardComida foto={require("../../images/hotdog.jpg")} nome="Hot Dog" preco="R$ 19,90" />
                        <CardComida foto={require("../../images/lasanha.jpg")} nome="Lasanha" preco="R$ 39,90" />
                        <CardComida foto={require("../../images/pastel.jpg")} nome="Pastel" preco="R$ 19,90" />
                        <CardComida foto={require("../../images/batata.jpg")} nome="Porção de batata" preco="R$ 23,90" />
                        <CardComida foto={require("../../images/batata-chedar.jpg")} nome="Batata com chedar e bacon" preco="R$ 30,90" />
                        <CardComida foto={require("../../images/combo-kfc.jpg")} nome="Combo de Hamburger KFC" preco="R$ 89,90" />
                        <CardComida foto={require("../../images/tacos.jpg")} nome="Tacos" preco="R$ 12,90" />
                        <CardComida foto={require("../../images/salgados.jpg")} nome="Salgadinhos" preco="R$ 75,90" />

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
