import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import ButtonSearch from "./buttonSearch";
import React from "react";

type AnimatedSearchProps ={
    children: ReactNode,
    selectedValue?: string[],
    text: string
}

export default function AnimatedSearch({children, selectedValue, text}:AnimatedSearchProps) {

    const[open,setOpen] = useState<boolean>()

    {/*Animação da seta*/}
        const rotateAnim = useRef(new Animated.Value(0)).current;
        useEffect(() => {
            Animated.timing(rotateAnim, {
            toValue: open? 1 : 0,
            duration: 300, // Duração da animação
            useNativeDriver: true, // Usa a API nativa para desempenho
            }).start();
        }, [open])
        const rotate = rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-90deg'],
        });

    return(
        <View className="flex justify-start items-start w-full px-8 mt-8 border-b border-neutral-700 pb-6">
        <View className="flex flex-row justify-between items-center w-full max-w-screen">
            <Text className="text-neutral-50 text-xl font-bold">{text}</Text>

            <TouchableOpacity onPress={()=>setOpen(!open)} className="flex flex-row items-center justify-center">
                <Text className="w-20 mr-1 text-neutral-50 opacity-50 text-right" numberOfLines={1} ellipsizeMode="tail">
                    {selectedValue?.map((i, index) => {
                        const end = index + 1 != selectedValue.length ? ", ": ""
                        return(i+end)
                    } )}
                </Text>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <FontAwesomeIcon color="white" icon={faChevronRight}/>
                </Animated.View>
            </TouchableOpacity>
        </View>
        {
            open && 
            <View>
                {children}
            </View>
        }
    </View>
    );
}