import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { useState } from "react";
import { ScrollView, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from "react-native";
import { PieChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para obter o ID do usuário
import { DEVICE_IP } from '../config.js';


export default function WaterConsumption() {
    const [text, setText] = useState('');
    const screenWidth = Dimensions.get('window').width;

    const sendDataToServer = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            const response = await fetch(`${DEVICE_IP}/water/add`, {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario: userId,
                agua_consumida: text,
            }),
            });

            const responseData = await response.json();
            console.log('Resposta do servidor:', responseData);

            if (response.ok) {
                Alert.alert('Sucesso', 'Dados enviados com sucesso!');
                setText(''); // Limpa o campo de texto após enviar
            } else {
                Alert.alert('Erro', 'Falha ao enviar dados.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao conectar ao servidor.');
        }
    };

    const data = [
        {
            name: "Ingerido",
            population: 60,  // 1.5L de 2.5L é 60%
            color: "#059669",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Restante",
            population: 40,
            color: "#86efac",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    return (
        <ScrollView className="h-full bg-neutral-900">
            <View className="flex items-center pt-16 px-4">
                <View className="flex flex-row items-center">
                    <Text className="text-neutral-50 font-bold text-2xl pr-4">Consumo de Água</Text>
                    <FontAwesomeIcon color="#fafafa" icon={faDroplet} />
                </View>

                <View className="flex items-center justify-center mt-8 py-4 rounded-3xl bg-neutral-800 w-full">
                    <Text className="text-2xl text-neutral-50 font-bold">Ingestão de Hoje</Text>
                    <Text className="text-neutral-50 opacity-60 text-2xl">1,5 L / 2,5 L</Text>

                    <PieChart
                        data={data}
                        width={screenWidth - 100} // Ajuste a largura do gráfico para a largura da tela
                        height={220}
                        chartConfig={{
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        }}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"10"}
                    />
                </View>

                <View className="flex items-center justify-center bg-neutral-800 rounded-3xl py-4 mt-6 w-full">
                    <Text className="text-neutral-50 text-2xl font-bold">Lembrete</Text>
                    <Text className="text-neutral-50 text-base px-4">Mantenha-se hidratado! Beba um copo de água a cada hora.</Text>
                </View>

                <View className="flex items-center bg-neutral-800 rounded-3xl py-4 my-6 w-full px-4">
                    <Text className="text-neutral-50 text-2xl font-bold mb-4">Registro de Ingestão de Água</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-900 mb-3 w-full rounded-2xl h-10 px-4 flex items-center justify-center"
                        value={text}
                        onChangeText={setText}  // Atualiza o estado com o texto digitado
                        placeholder="Digite aqui"  // Texto exibido quando o campo está vazio
                        keyboardType="decimal-pad"  // Tipo de teclado a ser exibido
                        placeholderTextColor={"#fafafa"}
                    />
                    <TouchableOpacity className="flex items-center w-full" onPress={sendDataToServer}>
                        <View className=" flex items-center border-4 border-emerald-500 rounded-xl py-2 w-full">
                            <Text className="text-emerald-500 text-xl">Adicionar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
