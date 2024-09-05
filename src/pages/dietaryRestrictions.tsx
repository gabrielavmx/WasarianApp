import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RadioButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

export default function DietaryRestrictions() {
    const [selectedRestriction, setSelectedRestriction] = useState('none');
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#059669', // Altere para a cor desejada
        },
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
                                status={selectedRestriction === 'none' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedRestriction('none')}
                            />
                            <Text className="text-neutral-50 ml-2">Nenhuma</Text>
                        </View>
                        <View className="flex flex-row items-center mb-2">
                            <RadioButton
                                value="vegetarian"
                                status={selectedRestriction === 'vegetarian' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedRestriction('vegetarian')}
                            />
                            <Text className="text-neutral-50 ml-2">Vegetariano</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="vegan"
                                status={selectedRestriction === 'vegan' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedRestriction('vegan')}
                            />
                            <Text className="text-neutral-50 ml-2">Vegano</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="intolerancia"
                                status={selectedRestriction === 'intolerancia' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedRestriction('intolerancia')}
                            />
                            <Text className="text-neutral-50 ml-2">Intolerância</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="alergia"
                                status={selectedRestriction === 'alergia' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedRestriction('alergia')}
                            />
                            <Text className="text-neutral-50 ml-2">Alergia</Text>
                        </View>
                    </View>
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