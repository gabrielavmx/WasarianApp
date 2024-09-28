import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

type FoodBarProps = {
    title: string,
    subtitle: string
}

export default function FoodBar({title, subtitle}:FoodBarProps){
    return(
        <TouchableOpacity className="mx-1.5">
            <View className="bg-neutral-800 w-44 h-72 rounded-3xl p-4">
                <View className="bg-green-400 w-full h-32 rounded-2xl"/>
                <Text className="text-neutral-50 text-base font-bold mt-2">{title}</Text>
                <Text className="text pt-1 text-neutral-50 opacity-50">{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}