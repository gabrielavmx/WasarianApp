import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

type loginProps = { navigation: any };

export default function Login({ navigation }: loginProps) {
    const [textEmail, setTextEmail] = useState('');
    const [textSenha, setTextSenha] = useState('');

    const handleLogin = async () => {
        
        try {
            console.log("Iniciando login com", textEmail, textSenha);

            const response = await fetch('http://192.168.0.2:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: textEmail, password: textSenha }),
            });

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const result = await response.json();
                if (response.status === 200) {
                    navigation.navigate('UserProfile', { userId: result.userId });
                } else {
                    Alert.alert('Login failed', result.message);
                }
            } else {
                console.error("Resposta recebida (bruto):", await response.text());
                throw new Error('Resposta não é um JSON válido');
            }
        } catch (error) {
            console.error("Erro durante o login:", error);
            Alert.alert('Ocorreu um erro', 'Por favor tente novamente');
        }
    };

    return (
        <ScrollView className="bg-neutral-900 h-full w-full">
            <View className="flex items-center pt-24">
                <Image className="" source={require('../img/icon.png')} />
                <Text className="text-neutral-50 text-2xl font-bold pt-2">Wasarian</Text>
                <Text className="text-neutral-50 text-base">Descubra receitas saudáveis e nutricionistas</Text>
            </View>

            <View className="px-10">
                <View className="flex flex-row items-center pt-8">
                    <FontAwesomeIcon icon={faEnvelope} color="#fafafa" size={24} style={{ paddingVertical: 12 }} />
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
                        value={textEmail}
                        onChangeText={setTextEmail}
                        placeholder="Email"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                    />
                </View>
                <View className="flex flex-row items-center pt-6">
                    <FontAwesomeIcon icon={faLock} color="#fafafa" size={24} style={{ paddingVertical: 12 }} />
                    <TextInput
                        className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
                        value={textSenha}
                        onChangeText={setTextSenha}
                        placeholder="Senha"
                        keyboardType="default"
                        placeholderTextColor="#fafafa"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <TouchableOpacity className="flex items-end px-10">
                <Text className="text-neutral-50 text-base">Esqueceu Sua Senha?</Text>
            </TouchableOpacity>

            <View className="py-8 w-full px-8 flex items-center justify-center">
                <TouchableOpacity className="w-full flex items-center justify-center" onPress={handleLogin}>
                    <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
                        <Text className="text-neutral-50 text-lg font-extrabold mr-2">Entrar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="pt-4" onPress={() => { navigation.navigate('Register') }} >
                    <Text className="text-neutral-50 text-base opacity-60 ">Criar Conta</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-center">
                <View className="flex-1 h-0.5 bg-gray-400 opacity-30" />
                <Text className="text-center text-white mx-4">INICIAR</Text>
                <View className="flex-1 h-0.5 bg-gray-400 opacity-30" />
            </View>
            <View>
                {/* AQUI VAI FICAR O ICONE DO FACEBOOK Q EU N CONSIGO COLOCAR */}
            </View>
        </ScrollView>
    );
}
