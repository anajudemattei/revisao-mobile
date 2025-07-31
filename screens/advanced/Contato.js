import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [avaliacao, setAvaliacao] = useState(0);

    const handleEnviar = () => {
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Telefone:", telefone);
        console.log("Mensagem:", mensagem);
        console.log("Avaliação:", avaliacao);
        alert("Formulário enviado com sucesso! Obrigado pelo contato.");
    };

    const renderEstrelas = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => setAvaliacao(index + 1)}
                style={styles.estrela}
            >
                <Text style={{ fontSize: 24, color: index < avaliacao ? "#faa250" : "#ccc" }}>
                    ★
                </Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
             <View style={styles.card}>
                <Text style={styles.title}>Teve algum problema ou quer deixar uma avaliação? Está no lugar certo!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Digite sua mensagem"
                    value={mensagem}
                    onChangeText={setMensagem}
                    multiline
                    numberOfLines={4}
                />
                <Text style={styles.label}>Avaliação:</Text>
                <View style={styles.estrelasContainer}>{renderEstrelas()}</View>
                <Button title="Enviar" onPress={handleEnviar} color="#faa250" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#faa250", 
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        color: "#333",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    estrelasContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    estrela: {
        marginHorizontal: 5,
    },
    card: {
        width: "60%", 
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        minHeight: 500, 
        alignItems: "center", 
        justifyContent: "center", 
    },
    title: {
        fontSize: 28, // Aumentado o tamanho da fonte
        fontWeight: "bold", // Aplicado negrito
        color: "#333",
        marginBottom: 20,
    },
});