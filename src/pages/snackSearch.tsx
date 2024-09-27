import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ButtonSearch from "../component/buttonSearch";
import AnimatedSearch from "../component/AnimatedSearch";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type SnackSearchProps = { navigation:any }

export default function SnackSearch({ navigation }:SnackSearchProps) {
    const [SearchFilterRestritions, setSearchFilterRestritions] = useState<string[]>([]);
    const [SearchFilterIngredients, setSearchFilterIngredients] = useState<string[]>([]);
    const [SearchFilterCozine, setSearchFilterCozine] = useState<string[]>([]);
    const [caloriesRange, setCaloriesRange] = useState([300, 700]);
    const onCaloriesChange = (values: number[]) => {
        setCaloriesRange(values);
    };

    return (
        <ScrollView className="bg-neutral-900 h-full w-full">
            <View className="pt-16">
                <View className="flex flex-row items-center justify-between px-6">
                    <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
                        <FontAwesomeIcon color="#fafafa" size={20} icon={faChevronLeft}/>
                    </TouchableOpacity>
                    <Text className="text-neutral-50 text-2xl font-bold pr-14">
                    Pesquisa de Alimentos
                    </Text>
                </View>
                
                {/* RESTRIÇÕES ALIMENTARES */}
                <AnimatedSearch text="Restrições Alimentares" selectedValue={SearchFilterRestritions}>
                    <View className="flex flex-row mt-6 items-center w-full flex-wrap" style={{ gap: 10 }}>
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Ovos" />
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Glúten" />
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Frutos do Mar" />
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Lactose" />
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Amendoim" />
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Baixo em Açúcar" />
                        <ButtonSearch onClick={setSearchFilterRestritions} selectedValues={SearchFilterRestritions} text="Carne" />
                    </View>
                </AnimatedSearch>

                {/* FAIXA DE CALORIAS */}
                <AnimatedSearch text="Faixa de Calorias">
                    <View className="flex flex-col mt-6 justify-start items-start w-full">
                        <MultiSlider
                            values={[caloriesRange[0], caloriesRange[1]]}
                            onValuesChange={onCaloriesChange}
                            min={100}
                            max={1000}
                            step={10}
                            sliderLength={320}
                            selectedStyle={{
                                backgroundColor: "#10b981", // emerald 500
                            }}
                            markerStyle={{
                                backgroundColor: "#fff",
                                borderWidth: 2,
                                borderColor: "#000",
                                height: 20,
                                width: 20,
                            }}
                            pressedMarkerStyle={{
                                height: 30,
                                width: 30,
                            }}
                            containerStyle={{
                                height: 40,
                                width: "100%",
                            }}
                        />
                        <Text className="text-neutral-50 text-lg">
                            {`Calorias: ${caloriesRange[0]} - ${caloriesRange[1]}`}
                        </Text>
                    </View>
                </AnimatedSearch>

                {/* INGREDIENTES */}
                <AnimatedSearch text="Ingredientes" selectedValue={SearchFilterIngredients}>
                    <View className="flex flex-row mt-6 items-center w-full flex-wrap" style={{ gap: 10 }}>
                    <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Proteínas" />
                    <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Farinhas" />
                    <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Laticínios" />
                    <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Carboidratos" />
                    <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Vegetais" />
                    <ButtonSearch onClick={setSearchFilterIngredients} selectedValues={SearchFilterIngredients} text="Frutas" />
                    </View>
                </AnimatedSearch>

                {/* COZINHA */}
                <AnimatedSearch text="Cozinha" selectedValue={SearchFilterCozine}>
                    <View className="flex flex-row mt-6 items-center w-full flex-wrap" style={{ gap: 10 }}>
                        <ButtonSearch onClick={setSearchFilterCozine} selectedValues={SearchFilterCozine} text="Nordestina" />
                        <ButtonSearch onClick={setSearchFilterCozine} selectedValues={SearchFilterCozine} text="Paulista" />
                        <ButtonSearch onClick={setSearchFilterCozine} selectedValues={SearchFilterCozine} text="Mineira" />
                        <ButtonSearch onClick={setSearchFilterCozine} selectedValues={SearchFilterCozine} text="Amazonense" />
                    </View>
                </AnimatedSearch>

                <View className="py-6 w-full px-8 flex items-center justify-center">
                    <TouchableOpacity className="w-full flex items-center justify-center">
                        <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
                            <Text className="text-neutral-50 text-lg font-extrabold mr-2">Pesquisar</Text>
                            <FontAwesomeIcon color="#fafafa" icon={faSearch}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
