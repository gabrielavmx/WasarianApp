import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RadioButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import ButtonSearch from "../component/buttonSearch";
import React from "react";

export default function DietaryRestrictions() {
    const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#059669', 
        },
    };

    // ffunção para adicionar ou remover restrições
    const toggleRestriction = (value: string) => {
        if (value === 'none') {
            // se o nenhum estiver clicado, deixa d selecionar os outros
            setSelectedRestrictions(['none']);
        } else {
            setSelectedRestrictions((prevState) => {
                if (prevState.includes('none')) {
                    prevState = prevState.filter((item) => item !== 'none');
                }

                if (prevState.includes(value)) {
                    return prevState.filter((item) => item !== value);
                } else {
                    return [...prevState, value];
                }
            });
        }
    };

    return (
        <PaperProvider theme={theme}>
            <ScrollView className="h-full w-full bg-neutral-900">
                <View className="flex items-center pt-20 px-4">
                    <Text className="text-neutral-50 text-2xl font-bold">
                        Restrições Alimentares
                    </Text>
                </View>

                <View className="flex justify-center items-center mt-8 p-4 mx-4 bg-neutral-800 rounded-3xl">
                    <Text className="text-neutral-50 text-xl font-bold mb-4">
                        Adicionar Restrições
                    </Text>
                    <Text className="text-neutral-50 text-base flex items-start w-full">
                        Tipo de Restrição
                    </Text>
                    <View className="flex flex-row mt-4 w-full flex-wrap" style={{ gap: 10 }}>
                        <View className="flex flex-row items-center mb-2">
                            <RadioButton
                                value="none"
                                status={selectedRestrictions.includes('none') ? 'checked' : 'unchecked'}
                                onPress={() => toggleRestriction('none')}
                            />
                            <Text className="text-neutral-50 ml-2">Nenhuma</Text>
                        </View>
                        <View className="flex flex-row items-center mb-2">
                            <RadioButton
                                value="vegetarian"
                                status={selectedRestrictions.includes('vegetarian') ? 'checked' : 'unchecked'}
                                onPress={() => toggleRestriction('vegetarian')}
                            />
                            <Text className="text-neutral-50 ml-2">Vegetariano</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="vegan"
                                status={selectedRestrictions.includes('vegan') ? 'checked' : 'unchecked'}
                                onPress={() => toggleRestriction('vegan')}
                            />
                            <Text className="text-neutral-50 ml-2">Vegano</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="intolerancia"
                                status={selectedRestrictions.includes('intolerancia') ? 'checked' : 'unchecked'}
                                onPress={() => toggleRestriction('intolerancia')}
                            />
                            <Text className="text-neutral-50 ml-2">Intolerância</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="alergia"
                                status={selectedRestrictions.includes('alergia') ? 'checked' : 'unchecked'}
                                onPress={() => toggleRestriction('alergia')}
                            />
                            <Text className="text-neutral-50 ml-2">Alergia</Text>
                        </View>
                    </View>
                </View>

                <View>
                    {selectedRestrictions.includes("alergia") &&
                    <View className="mt-8 p-4 mx-4 bg-neutral-800 rounded-3xl"> 
                        <Text className="text-neutral-50 text-xl font-bold mb-4 mt-2">Alergias</Text>
                    <View className="flex flex-row justify-center items-center bg-neutral-800 rounded-3xl flex-wrap" style={{ gap: 10 }}>
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Ovos" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Leite" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Frutos do Mar" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Amendoim" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Soja" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Peixe" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Nozes" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Trigo" />
                        </View>
                    </View>}

                    {selectedRestrictions.includes("intolerancia") &&
                    <View className="mt-8 p-4 mx-4 bg-neutral-800 rounded-3xl"> 
                        <Text className="text-neutral-50 text-xl font-bold mb-4 mt-2">Intolerâncias</Text>
                        <View className="flex flex-row justify-center items-center  flex-wrap" style={{ gap: 10 }}>
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Lactose" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Glúten" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Frutose" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Sacarose" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Milho" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Chocolate" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Peixe" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Nozes" />
                        <ButtonSearch onClick={setSelectedRestrictions} selectedValues={selectedRestrictions} text="Ovos" />
                    </View></View>}
                </View>

                <View className="py-6 w-full px-8 flex items-center justify-center">
                    <TouchableOpacity className="w-full flex items-center justify-center">
                        <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
                            <Text className="text-neutral-50 text-lg font-extrabold mr-2">Salvar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
