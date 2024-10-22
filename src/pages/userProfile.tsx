import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BarIcons from "../component/BarIcons";
import { faBan, faGlassWaterDroplet, faPenToSquare, faPersonRunning, faPlus, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import SnackLog from "../component/SnackLog";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEVICE_IP } from '../config.js';

type userProfileProps = {navigation:any}

export default function UserProfile({ navigation }: userProfileProps) {
    const [userName, setUserName] = useState<string | null>(null);
    const [userSince, setUserSince] = useState<string | null>(null);
    const [lastMeals, setLastMeals] = useState<any[]>([]);

    const fetchUserData = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            if (userId) {
                const response = await fetch(`${DEVICE_IP}/userProfile/${userId}`);

                const text = await response.text();
                console.log('Resposta do servidor:', text); 
                const data = JSON.parse(text); 

                if (response.ok) {
                    setUserName(data.nome);
                    setUserSince(data.createdAt);
                } else {
                    console.error("Erro ao buscar dados do usuário:", data.message);
                }
            }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    };

    const fetchLastMeal = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            if (userId) {
                const response = await fetch(`${DEVICE_IP}/lastMeal/${userId}`);

                const text = await response.text();
                const data = JSON.parse(text);

                if (response.ok && Array.isArray(data)) {
                    setLastMeals(data.slice(0, 3));
                } else {
                    console.warn(data.message);
                }
            }
        } catch (error) {
            console.error("Nenhuma refeição encontrada", error);
        }
    };
    
    useEffect(() => {
        fetchUserData();
        fetchLastMeal();
    }, []);

    return (
        <ScrollView className="h-full bg-neutral-900 w-full">
            <View className="flex items-center pt-24">
                {/* Nome e foto */}
                <View className="h-20 w-20 bg-green-500 mb-3 rounded-lg"></View>
                <View className="flex gap-1 items-center">
                    <View className="flex flex-row gap-x-2 items-center">
                        {/* Exibe o nome do usuário ou um placeholder enquanto carrega */}
                        <Text className="text-neutral-50 font-bold text-2xl">{userName ? userName : "Carregando..."}</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('EditProfile')}}>
                            <FontAwesomeIcon color="grey" icon={faPenToSquare}/>
                        </TouchableOpacity>
                    </View>
                    {/* Exibe a data de criação do usuário */}
                    <Text className="text-neutral-50 opacity-60">{userSince ? `Membro desde ${new Date(userSince).getFullYear()}` : "Carregando..."}</Text>
                </View>

                {/* Sugestões */}
                <View className="flex justify-start items-start w-full px-8">
                    <Text className="text-neutral-50 font-bold text-2xl mt-8 mb-4">Sugestões</Text>
                    <View className="flex flex-row items-start justify-between w-full">
                        <BarIcons onClick={()=>{navigation.navigate('DietPlan')}} text="Refeições" icon={faUtensils}></BarIcons>
                        <BarIcons onClick={()=>{navigation.navigate('WaterConsumption')}} text="Consumo de Água" icon={faGlassWaterDroplet}></BarIcons>
                        <BarIcons onClick={()=>{navigation.navigate('DietaryRestrictions')}} text="Restrição Alimentar" icon={faBan}></BarIcons>
                        <BarIcons onClick={()=>{navigation.navigate('Goal')}} text="Metas" icon={faPersonRunning}></BarIcons>
                    </View>
                </View>

                {/* Registros */}
                <View className="flex justify-start items-start w-full px-8 mt-8">
                    <View className="flex flex-row items-center justify-between w-full">
                        <Text className="text-2xl text-neutral-50 font-bold">Registro de Refeições</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('MealRegistration')}} className="flex flex-row p-2 justify-center items-center gap-1">
                            <Text className="text-neutral-50 opacity-50">Novo</Text>
                            <FontAwesomeIcon color="grey" icon={faPlus}/>
                        </TouchableOpacity>
                    </View>
                    <View className="mt-4">
                        {Array.isArray(lastMeals) && lastMeals.length > 0 ? (
                            lastMeals.map((meal, index) => (
                                <SnackLog 
                                    key={index}
                                    onClick={() => {}} 
                                    text={`${meal.tipo_refeicao} - ${meal.caloria}kcal`} 
                                    icon={faUtensils} 
                                    dataEmPortugues={new Date(meal.data)} 
                                />
                            ))
                        ) : (
                            <Text className="text-neutral-50">Nenhuma refeição encontrada</Text>
                        )}
                    </View>
                    <TouchableOpacity className="flex items-center mt-1">
                        <Text className="text-neutral-50 opacity-50 text">Ver Ultimas Refeições</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
