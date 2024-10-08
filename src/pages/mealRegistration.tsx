import { ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AnimatedSearch from "../component/AnimatedSearch";
import ButtonSearch from "../component/buttonSearch";

export default function MealRegistration() {

    const [textQntd, setTextQntd] = useState('');
    const [textTipo, setTextTipo] = useState('');
    const [SearchFilterIngredients, setSearchFilterIngredients] = useState<string[]>([]);
   

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
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <Text className="text-neutral-50 px-5 font-bold mb-1 mt-3 text-xl">Tipo de Refeições</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 my-2 w-80 rounded-2xl h-12 px-4 ml-4"
                        value={textQntd}
                        onChangeText={setTextQntd}
                        placeholder="500g"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                        secureTextEntry={true}
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
            </View>
        </ScrollView>
    )
}