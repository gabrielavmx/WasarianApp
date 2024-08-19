import { Text, TouchableOpacity, View } from "react-native";

type ButtonSearchProps ={
    text: string,
    onClick: ()=>void
}

export default function ButtonSearch({text, onClick}:ButtonSearchProps) {
    return(
        <TouchableOpacity onPress={onClick}>
            <View className="flex items-center justify-center h-12 w-42 rounded-3xl bg-neutral-200 px-4">
                <Text className="text-neutral-900 text-base">{text}</Text>
            </View>
        </TouchableOpacity>
    );
}