import { Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import React from "react";

type GoalsInfoProps = {
    title: string,
    goal: string,
    progress: string
}

export default function GoalsInfo({ title, goal, progress }:GoalsInfoProps) {
    return(
        <View className="bg-neutral-800 flex-1 h-full w-full rounded-2xl mt-6 mb-1 p-4">
            <Text className="text-neutral-50 text-xl">{title}</Text>
            <Text className="text-neutral-50 text-base pt-3 pb-2">Meta: {goal}</Text>
            <Progress.Bar progress={0.3} width={null} height={28} color="rgb(5, 150, 105)" borderColor="#171717" unfilledColor="#171717" borderRadius={16}/>
            <Text className="text-neutral-50 text-base pt-2">Progresso: {progress}</Text>
        </View>
    )
}
