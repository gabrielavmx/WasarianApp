import { faBurger, faCarrot, faFilter, faLeaf, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import BarIcons from "../component/BarIcons";
import RecipesBar from "../component/RecipesBar"
import React from "react";

type HomeScreenProps = { navigation:any }

export default function HomeScreen({ navigation }:HomeScreenProps) {
const[textEmail, setTextEmail] = useState('')
    return(
        <ScrollView className="bg-neutral-900 h-full w-full">
            <View className=" px-4 flex flex-row items-center justify-start pt-16">
                <Image className="h-10 w-10" source={require('../img/icon.png')} />
                <Text className="text-base text-neutral-50 pt-2">Bem-Vindo ao Wasarian!</Text>
            </View>

            <View className="px-6">
                <Text className="text-neutral-50 text-2xl font-bold">Descubra novas receitas saudáveis!</Text>
                <View className="flex flex-row justify-center items-center pt-8">
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
                        value={textEmail}
                        onChangeText={setTextEmail}
                        placeholder="Ex: Strogonoff"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                    />
                    <TouchableOpacity onPress={()=>{navigation.navigate('SnackSearch')}}>
                        <View className="pb-3">
                            <View className="h-12 w-12 ml-4 bg-neutral-50 rounded-full items-center justify-center">
                            <FontAwesomeIcon icon={faFilter}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className="text-base text-neutral-50 font-bold px-6 py-4">Receita em Destaque</Text>
            <View className="bg-neutral-800 flex-1 h-90 rounded-2xl mx-6 py-4 px-4">
                <View className="bg-blue-500 w-full h-40 rounded-2xl" />
                <View className="flex flex-row items-center justify-between">
                    <View>
                        <Text className="font-bold text-base text-neutral-50 pt-2">Nome da Receita</Text>
                        <Text className="text-base text-neutral-50">Descrição e categoria</Text>
                    </View>
                    <TouchableOpacity className="pt-2">
                        <View className="bg-emerald-400 h-10 rounded-3xl flex items-center justify-center px-4"><Text className="text-neutral-900 text-base font-bold">Teste Agora</Text></View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="px-8 pt-6">
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-neutral-50 text-base font-bold">Explore por Categorias</Text>
                    <TouchableOpacity>
                        <Text className="text-neutral-50 text-base opacity-50">Ver Tudo</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex flex-row items-center justify-between pt-4">
                    <BarIcons onClick={()=>{}} text="Salada" icon={faLeaf}></BarIcons>
                    <BarIcons onClick={()=>{}} text="Lanche" icon={faBurger}></BarIcons>
                    <BarIcons onClick={()=>{}} text="Jantar" icon={faUtensils}></BarIcons>
                    <BarIcons onClick={()=>{}} text="Sopa" icon={faCarrot}></BarIcons>
                </View>
            </View>
            <View className="pt-6 flex flex-row items-center justify-center flex-wrap pb-6" style={{ gap: 18 }}>
                <RecipesBar receita="Sanduiche normal" tempo="15 min"></RecipesBar>
                <RecipesBar receita="Sanduiche normal" tempo="15 min"></RecipesBar>
                <RecipesBar receita="Sanduiche normal" tempo="15 min"></RecipesBar>
                <RecipesBar receita="Sanduiche normal" tempo="15 min"></RecipesBar>
                <RecipesBar receita="Sanduiche normal" tempo="15 min"></RecipesBar>
                <RecipesBar receita="Sanduiche normal" tempo="15 min"></RecipesBar>
            </View>
        </ScrollView>
    )
}