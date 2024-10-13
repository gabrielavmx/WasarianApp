import { Alert, Button, Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AnimatedSearch from "../component/AnimatedSearch";
import ButtonSearch from "../component/buttonSearch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEVICE_IP } from "../config";

export default function MealRegistration() {

    const [textQntd, setTextQntd] = useState('');
    const [textTipo, setTextTipo] = useState('');
    const [SearchFilterIngredients, setSearchFilterIngredients] = useState<string[]>([]);
    const [text, setText] = useState('');

    const sendDataToServer = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            const response = await fetch(`${DEVICE_IP}/meal/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_meta: null,
                    tipo_refeicao: textTipo,
                    caloria: parseFloat(textQntd),
                    data: new Date().toISOString().split('T')[0],
                    descricao: SearchFilterIngredients.join(', '),
                }),
            });

            const responseData = await response.json();
            console.log('Resposta do servidor:', responseData);

            if (response.ok) {
                Alert.alert('Sucesso', 'Dados enviados com sucesso!');
                setTextTipo('');
                setTextQntd('');
                setSearchFilterIngredients([]);
            } else {
                Alert.alert('Erro', 'Falha ao enviar dados.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao conectar ao servidor.');
        }
    };

    return(
        <ScrollView className="h-full bg-neutral-900 w-full">
            <View className="flex items-center pt-16">
                <Text className="text-neutral-50 text-2xl font-bold">Registro de Refeições</Text>
            </View>

            <View className=" flex items-start justify-center px-6 mt-8">
                <View>
                    <Text className="text-neutral-50 font-bold px-5 mb-1 text-xl">Tipo de Refeições</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 my-2 w-80 rounded-2xl h-12 px-4 ml-4"
                        value={textTipo}
                        onChangeText={setTextTipo}
                        placeholder="Janta"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                    />
                </View>

                <View>
                    <Text className="text-neutral-50 px-5 font-bold mb-1 mt-3 text-xl">Quantidade (em calorias)</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 my-2 w-80 rounded-2xl h-12 px-4 ml-4"
                        value={textQntd}
                        onChangeText={setTextQntd}
                        placeholder="500"
                        keyboardType="numeric"
                        placeholderTextColor="#fafafa"
                    />
                </View>
                <AnimatedSearch text="Ingredientes" selectedValue={SearchFilterIngredients}>
                    <View className="flex flex-row mt-6 items-center w-full flex-wrap" style={{ gap: 12 }}>
                        <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Proteínas" />
                        <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Farinhas" />
                        <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Laticínios" />
                        <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Carboidratos" />
                        <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Vegetais" />
                        <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Frutas" />
                    </View>
                </AnimatedSearch>
                 <View className="py-6 w-full px-8 flex items-center justify-center">
                    <TouchableOpacity className="w-full flex items-center justify-center" onPress={sendDataToServer}>
                        <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
                            <Text className="text-neutral-50 text-lg font-extrabold mr-2">Enviar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
