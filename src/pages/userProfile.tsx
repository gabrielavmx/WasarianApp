import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BarIcons from "../component/BarIcons";
import { faBan, faBurger, faGlassWaterDroplet, faMugHot, faPenToSquare, faPersonRunning, faPlus, faUtensils, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import SnackLog from "../component/SnackLog";

type userProfileProps = {navigation:any}

export default function UserProfile({ navigation }:userProfileProps) {

    return (
        <ScrollView className="h-full bg-neutral-900 w-full">
        <View className="flex items-center pt-24">
            {/* Nome e foto */}
            <View className="h-20 w-20 bg-green-500 mb-3 rounded-lg"></View>
            <View className="flex gap-1 items-center">
                <View className="flex flex-row gap-x-2 items-center">
                    <Text className=" text-neutral-50 font-bold text-2xl">Nome de Usuário</Text>
                    <TouchableOpacity>
                        <FontAwesomeIcon color="grey" icon={faPenToSquare}/>
                    </TouchableOpacity>
                </View>
                <Text className="text-neutral-50 opacity-60">Membro desde 2020</Text>
            </View>

            {/* Sugestões */}
            <View className="flex justify-start items-start w-full px-8">
                <Text className="text-neutral-50 font-bold text-2xl mt-8 mb-4">Sugestões</Text>
                <View className="flex flex-row items-start justify-between w-full">
                    <BarIcons onClick={()=>{}} text="Refeições" icon={faUtensils}></BarIcons>

                    <BarIcons onClick={()=>{navigation.navigate('WaterConsumption')}} text="Consumo de Água" icon={faGlassWaterDroplet}></BarIcons>

                    <BarIcons onClick={()=>{}} text="Restrição Alimentar" icon={faBan}></BarIcons>

                    <BarIcons onClick={()=>{}} text="Metas" icon={faPersonRunning}></BarIcons>
                </View>
            </View>

            {/*Registros*/}
            <View className="flex justify-start items-start w-full px-8 mt-8">
                <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-2xl text-neutral-50 font-bold">Registro de Refeições</Text>
                    <TouchableOpacity className="flex flex-row p-2 justify-center items-center gap-1">
                    <Text className="text-neutral-50 opacity-50">Novo</Text>
                    <FontAwesomeIcon color="grey" icon={faPlus}/>
                    </TouchableOpacity>
                </View>
                <View className="mt-4">
                    <SnackLog onClick={()=>{}} text="Café da Manhã - 500kcal" icon={faMugHot} dataEmPortugues={new Date()}></SnackLog>

                    <SnackLog onClick={()=>{}} text="Almoço - 800kcal" icon={faBurger} dataEmPortugues={new Date()}></SnackLog>

                    <SnackLog onClick={()=>{}} text="Janta - 1050kcal" icon={faWineGlass} dataEmPortugues={new Date()} end></SnackLog>
                </View>
                <TouchableOpacity className="flex items-center mt-1">
                <Text className="text-neutral-50 opacity-50 text">Ver Ultimas Refeições</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}