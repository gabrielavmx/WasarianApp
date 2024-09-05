import { ScrollView, Text, View } from "react-native";
import FoodBar from "../component/FoodBar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import DietOptions from "../component/DietOptions";

export default function DietPlan() {
    return (
        <ScrollView className="bg-neutral-900 h-full w-full">
            <View className="flex items-start justify-start pt-24">
                <View className="flex flex-row items-center justify-start">
                <Text className="text-neutral-50 text-2xl font-bold mr-2 ml-4">
                    Planos de Refeições
                </Text>
                <FontAwesomeIcon icon={faAppleWhole} color="#fafafa"></FontAwesomeIcon>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-8">
                    <FoodBar title="Salada" subtitle="Uma salada nutritiva e outras coisas ai"></FoodBar>
                    <FoodBar title="Sopa" subtitle="Uma sopa nutritiva e outras coisas ai"></FoodBar>
                    <FoodBar title="Carne" subtitle="Uma carne nutritiva e outras coisas ai"></FoodBar>
                    <FoodBar title="Frango" subtitle="Um frango nutritiva e outras coisas ai"></FoodBar>
                </ScrollView>
            </View>

            <View className="mx-4 mb-6">
                <Text className="text-neutral-50 text-2xl font-bold mt-6 mb-4">Opções De Refeições</Text>
                <DietOptions title="Frango Grelhado" sub="Calorias: 300 Proteínas:25g Carboidratos: 20g"></DietOptions>
                <DietOptions title="Carne Grelhado" sub="Calorias: 300 Proteínas:25g Carboidratos: 20g"></DietOptions>
                <DietOptions title="Cogumelo Grelhado" sub="Calorias: 300 Proteínas:25g Carboidratos: 20g"></DietOptions>
                <DietOptions title="Vegetais Grelhados" sub="Calorias: 300 Proteínas:25g Carboidratos: 20g"></DietOptions>
            </View>
        </ScrollView>
    );
}