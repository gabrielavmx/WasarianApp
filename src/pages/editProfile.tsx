import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function EditProfile() {

    const [textNome, setTextNome] = useState('');
    const [textSenha, setTextSenha] = useState('');
    const [textEmail, setTextEmail] = useState('');

    return(
        <ScrollView className="h-full bg-neutral-900 w-full">
            <View className="flex items-center pt-16">
                <Text className="text-2xl text-neutral-50 font-bold">Editar Perfil</Text>
            </View>

            <View>
                <View className="flex flex-wrap w-full items-center pt-6 mx-6">
                    <View className="flex flex-row justify-center">
                    <Text className="text-neutral-50 text-base">Nome</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
                        value={textNome}
                        onChangeText={setTextNome}
                        placeholder="Novo Nome"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                        secureTextEntry={true}
                    />
                </View>
                
                <View className="flex flex-row">
                    <Text className="text-neutral-50 text-base">Email</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
                        value={textEmail}
                        onChangeText={setTextEmail}
                        placeholder="Novo Nome"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                        secureTextEntry={true}
                    />
                </View>

                <View className="flex flex-row">
                    <Text className="text-neutral-50 text-base">Senha</Text>
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
                        value={textSenha}
                        onChangeText={setTextSenha}
                        placeholder="Novo Nome"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                        secureTextEntry={true}
                    />
                </View>

                </View>
            </View>
        </ScrollView>
    )
}