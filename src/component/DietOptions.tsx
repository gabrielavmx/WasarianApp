import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

type DietOptionsProps = {
    title: string,
    sub: string
}

export default function DietOptions({title, sub}:DietOptionsProps){
    return(
        <View className="bg-neutral-800 rounded-3xl w-full flex items-center justify-center px-4 py-4 my-3">
            <View className="flex items-start justify-start w-full">
                <Text className="text-neutral-50 text-xl font-bold mb-2">{title}</Text>
                <View className="bg-blue-500 w-full h-40 rounded-2xl"/>
                <Text className="text-neutral-50 text-base font-bold py-2">Informação Nutricional</Text>
                <Text className="text-neutral-50 opacity-50 mb-4">{sub}</Text>
            </View>
            <TouchableOpacity className="flex items-center w-full">
                <View className=" flex items-center border-4 border-emerald-500 rounded-xl py-2 w-full">
                    <Text className="text-emerald-500 text-xl">Adicionar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}