import { Text, TouchableOpacity, View } from "react-native";

type RecipesBarProps = {
    tempo: string,
    receita: string
}

export default function RecipesBar({tempo, receita}: RecipesBarProps) {
    return(
        <TouchableOpacity>
            <View className="w-40 bg-neutral-800 p-4 rounded-2xl">
                <View className="bg-blue-400 w-full h-24 rounded-2xl"></View>
                <Text className="text-neutral-50 pt-2">{tempo}</Text>
                <Text className="text-base text-neutral-50">{receita}</Text>
            </View>
        </TouchableOpacity>
    )
}