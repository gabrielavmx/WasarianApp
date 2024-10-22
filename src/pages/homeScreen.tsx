import { faBurger, faCarrot, faFilter, faLeaf, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useEffect, useCallback } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import BarIcons from "../component/BarIcons";
import RecipesBar from "../component/RecipesBar";
import axios from "axios";
import _ from "lodash";

type HomeScreenProps = { navigation: any };

const EDAMAM_API_ID = '1a535c76';
const EDAMAM_API_KEY = '0ef665692af369fb69f558ff46e6593e';

type Recipe = {
  label: string;
  image: string;
  totalTime: number;
};

type RecipeHit = {
  recipe: Recipe;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [textSearch, setTextSearch] = useState('');
  const [recipes, setRecipes] = useState<RecipeHit[]>([]);

  const fetchRecipes = async (query: string) => {
    if (query.trim().length === 0) {
      setRecipes([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${EDAMAM_API_ID}&app_key=${EDAMAM_API_KEY}`
      );
      setRecipes(response.data.hits); 
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };
  const debouncedFetchRecipes = useCallback(_.debounce(fetchRecipes, 500), []);
  useEffect(() => {
    debouncedFetchRecipes(textSearch);

    return () => {
      debouncedFetchRecipes.cancel();
    };
  }, [textSearch, debouncedFetchRecipes]);

  return (
    <ScrollView className="bg-neutral-900 h-full w-full">
      <View className=" px-4 flex flex-row items-center justify-start pt-16">
        <Image className="h-10 w-10" source={require('../img/icon.png')} />
        <Text className="text-base text-neutral-50 pt-2">Bem-Vindo ao Wasarian!</Text>
      </View>

      <View className="px-6">
        <Text className="text-neutral-50 text-2xl font-bold">Descubra novas receitas saudáveis!</Text>
        <View className="flex flex-row justify-center items-center pt-8">
          <TextInput
            className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
            value={textSearch}
            onChangeText={setTextSearch}
            placeholder="Ex: Strogonoff"
            keyboardType="default"
            placeholderTextColor="#fafafa"
          />
          <TouchableOpacity onPress={() => { navigation.navigate('SnackSearch') }}>
            <View className="pb-3">
              <View className="h-12 w-12 ml-4 bg-neutral-50 rounded-full items-center justify-center">
                <FontAwesomeIcon icon={faFilter} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-base text-neutral-50 font-bold px-6 py-4">Receita em Destaque</Text>
      <View className="bg-neutral-800 flex-1 h-90 rounded-2xl mx-6 py-4 px-4">
        <Image
          className="w-full h-40 rounded-2xl"
          source={require('../img/salada_arroz.jpg')}
          resizeMode="cover"
        />
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="font-bold text-base text-neutral-50 pt-2">Salada de Arroz</Text>
            <Text className="text-base text-neutral-50">Salada, Prato Principal</Text>
          </View>
          <TouchableOpacity className="pt-2">
            <View className="bg-emerald-400 h-10 rounded-3xl flex items-center justify-center px-4">
              <Text className="text-neutral-900 text-base font-bold">Teste Agora</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-8 pt-6">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-neutral-50 text-base font-bold">Explore por Categorias</Text>
          <TouchableOpacity>
            <Text className="text-neutral-50 text-base opacity-50">Ver Tudo</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-between pt-4">
          <BarIcons onClick={() => { }} text="Salada" icon={faLeaf}></BarIcons>
          <BarIcons onClick={() => { }} text="Lanche" icon={faBurger}></BarIcons>
          <BarIcons onClick={() => { }} text="Jantar" icon={faUtensils}></BarIcons>
          <BarIcons onClick={() => { }} text="Sopa" icon={faCarrot}></BarIcons>
        </View>
      </View>

      {/* Mostrar as receitas buscadas */}
      {recipes.length > 0 ? (
        <View className="pt-6 flex flex-row items-center justify-center flex-wrap pb-6" style={{ gap: 18 }}>
          {recipes.map((recipe, index) => (
            <RecipesBar
              key={index}
              receita={recipe.recipe.label}
              tempo={`${Math.round(recipe.recipe.totalTime)} min`}
              imagem={recipe.recipe.image}
            />
          ))}
        </View>
      ) : (
        <Text className="text-base text-neutral-50 px-6 py-4">Nenhuma receita encontrada. Tente uma nova busca!</Text>
      )}
    </ScrollView>
  );
}
