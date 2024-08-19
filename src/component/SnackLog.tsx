import { faArrowRight, faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {formatDate} from "date-fns";
import { Text, TouchableOpacity, View } from "react-native";

type SnackLogProps={
    dataEmPortugues: Date,
    text: string,
    icon: IconDefinition
    end?: boolean
    onClick: ()=>void
}

export default function SnackLog({dataEmPortugues, text, icon, end=false, onClick}:SnackLogProps){
    const formatedDate = formatDate(dataEmPortugues,"dd/MM/yyyy");
    const border = end?"":"border-b pb-4 border-neutral-700";
    return(
        <TouchableOpacity onPress={onClick} className={"flex justify-between items-center flex-row w-full mb-4 "+border}>
            <View className="flex flex-row gap-6 justify-center items-center">
                <FontAwesomeIcon icon={icon} color="white" size={30}/>
                <View className="">
                    <Text className="text-neutral-50 text-base">{text}</Text>
                    <Text className="text-neutral-50 opacity-50">{formatedDate}</Text>
                </View>
                
            </View>
            <FontAwesomeIcon color="white" icon={faChevronRight}/>
        </TouchableOpacity>
    )
}