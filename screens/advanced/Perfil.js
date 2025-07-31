import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { CardComida } from "../../components/CardComida";

export default function Perfil() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.profileContainer}>
                <Image
                    source={require("../../images/user.jpg")}
                    style={styles.image}
                />

                <Text style={styles.title}>
                    Seja bem vindo, User!
                </Text>

                <Text style={styles.description}>
                    Esta é a tela de perfil, onde você pode ver suas informações e gerenciar sua conta
                </Text>
            </View>

            <ScrollView 
                style={styles.container} 
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title2}>Peça Novamente!</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.comidas}>
                        <CardComida foto={require("../../images/coca-cola.jpg")} nome="Coca Cola" preco="R$ 7,90" />
                        <CardComida foto={require("../../images/esfiha.jpg")} nome="Esfiha" preco="R$ 9,90" />
                        <CardComida foto={require("../../images/hamburger.jpg")} nome="Hamburguer" preco="R$ 42,90" />
                        <CardComida foto={require("../../images/strogonoff.jpg")} nome="Strogonoff" preco="R$ 24,90" />
                        <CardComida foto={require("../../images/parmegiana.jpg")} nome="Parmegiana" preco="R$ 35,90" />
                        <CardComida foto={require("../../images/lasanha.jpg")} nome="Lasanha" preco="R$ 39,90" />
                        <CardComida foto={require("../../images/almondegas.jpg")} nome="Almondegas" preco="R$ 29,90" />
                    </View>
                </ScrollView>

                <View style={styles.devss}>
                    <View style={styles.devs}>
                        <Image
                            source={require("../../images/kevinn.jpg")}
                            style={styles.image}
                            />

                        <Image
                            source={{ uri: "https://avatars.githubusercontent.com/u/158210311?v=4" }}
                            style={styles.image}
                            />
                    </View>

                    <Text style={styles.title}>
                        Desenvolvedores: Kevin & Ana Ju
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: "center",
        marginTop: 70,
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        marginTop: 10,
    },
    contentContainer: {
        alignItems: "stretch",
        paddingVertical: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
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
    title2: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#black",
        marginLeft: 20,
        marginTop: 35,
    },
    comidas: {
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#FAA250",
        padding: 20,
        marginTop: 20,
        height: 245,
        width: "100%",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
    },
    devs: {
        alignItems: "center",
        marginTop: 70,
        display: "flex",
        gap: 70,
        flexDirection: "row",
    },
    devss: {
        alignItems: "center",
        marginTop: 70,
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
    },
});
