import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import GoalsInfo from "../component/GoalsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Goal() {
    return(
        <ScrollView className="h-full bg-neutral-900 w-full">
            <View className="flex items-center pt-16">
                <Text className="text-neutral-50 text-2xl font-bold">Metas Ativas</Text>
            </View>
            <View className="mx-6">
           <GoalsInfo title="Consumo de Calorias" goal="3000" progress="1000g"></GoalsInfo>
           <GoalsInfo title="Consumo de Calorias" goal="3000" progress="1000g"></GoalsInfo>
           <GoalsInfo title="Consumo de Calorias" goal="3000" progress="1000g"></GoalsInfo>
           </View>

           <View className="py-5 w-full px-8 flex items-center justify-center">
                        <TouchableOpacity className="w-full flex items-center justify-center">
                            <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
                                <Text className="text-neutral-50 text-lg font-extrabold mr-2">Adicionar Meta</Text>
                                <FontAwesomeIcon icon={faPlus} color="#fafafa"/>
                            </View>
                        </TouchableOpacity>
                    </View>
           
            
        </ScrollView>
    );
}