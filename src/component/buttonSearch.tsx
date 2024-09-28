import React,{ useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ButtonSearchProps =
{
    text: string,
    onClick: (value: string[])=>void,
    selectedValues: string[]
}

export default function ButtonSearch({text, onClick, selectedValues}:ButtonSearchProps) {
    const [isSelected, setSelected] = useState<boolean>(false)
    const handleSelect = ()=>
    {
        setSelected(!isSelected) 
        if(isSelected) 
        {
            const newValues = selectedValues.filter((i) => i != text)
            onClick(newValues)
        }
        else 
        {
            onClick([text,...selectedValues])
        }
    }

    const stylosos = isSelected?"border-solid border-2 border-emerald-500":""

    return(
        <TouchableOpacity onPress={handleSelect}>
            <View className={"flex items-center justify-center h-12 w-42 rounded-2xl bg-neutral-200 px-4 "+stylosos}>
                <Text className="text-neutral-900 text-base">{text}</Text>
            </View>
        </TouchableOpacity>
    );
}