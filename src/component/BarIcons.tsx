import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity, View } from "react-native";

type BarIconsProps = {
    text: string,
    icon: IconDefinition,
    onClick: ()=>void
}

export default function BarIcons({text, icon, onClick}:BarIconsProps) {
    return(
        <TouchableOpacity onPress={onClick}>
            <View className="flex flex-col justify-center items-center w-20">
                <View className="flex justify-center items-center h-16 w-16 bg-neutral-800 rounded-2xl">
                <FontAwesomeIcon icon={icon} color="white" size={24}/>
                </View>
                <Text className="text-center text-zinc-50 text-base mt-2">{text}</Text>
            </View>
        </TouchableOpacity>
    );
}