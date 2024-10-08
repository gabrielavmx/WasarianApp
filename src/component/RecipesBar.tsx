import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

type RecipesBarProps = {
    tempo: string,
    receita: string,
    imagem: string
}

export default function RecipesBar({tempo, receita, imagem}: RecipesBarProps) {
    return(
        <TouchableOpacity>
            <View className="w-40 bg-neutral-800 p-4 rounded-2xl">
                <Image source={{ uri: imagem }} className="w-full h-24 rounded-2xl"/>
                <Text className="text-neutral-50 pt-2">{tempo}</Text>
                <Text className="text-base text-neutral-50">{receita}</Text>
            </View>
        </TouchableOpacity>
    )
}