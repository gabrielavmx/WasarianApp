
import { useState } from "react";
import { Text, View } from "react-native";
import ButtonSearch from "../component/buttonSearch";
import AnimatedSearch from "../component/AnimatedSearch";

export default function SnackSearch(){
    const[SearchFilterRestritions,setSearchFilterRestritions] = useState<string>("")
    const[SearchFilterIngredients,setSearchFilterIngredients] = useState<string>("")
    const[SearchFilterCozine,setSearchFilterCozine] = useState<string>("")
    return(
        <View className="bg-neutral-900 h-full w-full flex items-center pt-24">
            <View>
                <Text className="flex items-center justify-center w-full text-neutral-50 text-2xl font-bold">Pesquisa de Alimentos</Text>
            </View>
            {/*RESTRIÇOES ALIMENTARES*/}
            <AnimatedSearch text="Restrições Alimentares" selectedValue={SearchFilterRestritions}>
                <View className="flex flex-row mt-6 justify-between items-center w-full">
                    <ButtonSearch onClick={()=>setSearchFilterRestritions("Sem Glutem")} text="Não Contém Glutem"></ButtonSearch>
                    <ButtonSearch onClick ={()=>setSearchFilterRestritions("Baixo em Açucar")} text="Baixo em Açucar"></ButtonSearch>
                </View>
            </AnimatedSearch>

            {/*FAIXA DE CALORIAS*/}
            <AnimatedSearch text="Faixa de Calorias">
                <View className="flex flex-row mt-6 justify-between items-center w-full">
                    
                </View>
            </AnimatedSearch>

            {/*INGREDIENTES*/}
            <AnimatedSearch text="Ingredientes" selectedValue={SearchFilterIngredients}>
                <View className="flex flex-wrap flex-row mt-6 justify-center items-center w-full" style={{rowGap:40}}>
                    
                </View>
            </AnimatedSearch>
            {/*COZINHA*/}
            <AnimatedSearch text="Cozinha" selectedValue={SearchFilterCozine}>
                <View className="flex flex-row mt-6 justify-between items-center w-full">
                    <ButtonSearch onClick={()=>setSearchFilterCozine("Nordestina")} text="Nordestina"></ButtonSearch>
                    <ButtonSearch onClick ={()=>setSearchFilterCozine("Mineira")} text="Mineira"></ButtonSearch>
                    <ButtonSearch onClick ={()=>setSearchFilterCozine("Amazonense")} text="Amazonense"></ButtonSearch>
                </View>
            </AnimatedSearch>
            {/*VALOR NUTRICIONAL*/}
        </View>
    );
}