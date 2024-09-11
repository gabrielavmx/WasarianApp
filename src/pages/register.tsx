import React, { useState } from "react";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, Platform, ScrollView, Text, TextInput, View, TouchableOpacity } from "react-native";
import { DefaultTheme, PaperProvider, RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

type registerProps = { navigation:any }

export default function Register({ navigation }:registerProps){
    const [textEmail, setTextEmail] = useState('');
    const [textSenha, setTextSenha] = useState('');
    const [textNome, setTextNome] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#059669', // Altere para a cor desejada
        },
    };

    const onChangeDate = (event, selectedDate) => {
        if (selectedDate) {
            const currentDate = selectedDate;
            setShowDatePicker(Platform.OS === 'ios');
            setBirthDate(currentDate);
        } else {
            setShowDatePicker(false);
        }
    };

    const formatDate = (date) => {
        return date ? date.toLocaleDateString('pt-BR') : '';
    };

    return (
        <PaperProvider theme={theme}>
            <ScrollView className="bg-neutral-900 h-full w-full">
                <View className="flex items-center pt-20 px-4">
                    <Image className="" source={require('../img/icon.png')} />
                    <Text className="text-neutral-50 text-2xl font-bold pt-2">Wasarian</Text>
                    <Text className="text-neutral-50 text-base">Descubra receitas saudáveis e nutricionistas</Text>
                </View>

                <View className="px-10">

                    <View className="flex flex-row items-center pt-6">
                        <FontAwesomeIcon icon={faUser} color="#fafafa" size={24} style={{ paddingVertical: 12 }} />
                        <TextInput
                            className="text-neutral-50 text-base bg-neutral-800 mb-1 w-72 rounded-2xl h-12 px-4 ml-4"
                            value={textNome}
                            onChangeText={setTextNome}
                            placeholder="Nome"
                            keyboardType="default"
                            placeholderTextColor="#fafafa"
                        />
                    </View>

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
                            secureTextEntry
                        />
                    </View>

                    <Text className="text-neutral-50 text-base pt-6 font-bold">Selecione Seu Gênero</Text>
                    <View className="flex flex-row items-center justify-around pt-4">
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="Feminino"
                                status={selectedGender === 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedGender('feminino')}
                            />
                            <Text className="text-neutral-50 ml-2">Feminino</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <RadioButton
                                value="Masculino"
                                status={selectedGender === 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedGender('masculino')}
                            />
                            <Text className="text-neutral-50 ml-2">Masculino</Text>
                        </View>
                    </View>

                    <Text className="text-neutral-50 text-base pt-6 font-bold">Data de Nascimento</Text>
                    <View className="pt-4">
                        <TouchableOpacity className="bg-emerald-600 h-14 w-full rounded-2xl flex items-center justify-center" onPress={() => setShowDatePicker(true)}>
                            <Text className="text-base text-neutral-50 font-bold">Selecionar</Text>
                        </TouchableOpacity>
                        <Text className="text-neutral-50 text-base pt-4">Data Selecionada: {formatDate(birthDate)}</Text>
                    </View>

                    {showDatePicker && (
                        <DateTimePicker
                            value={birthDate}
                            mode="date"
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                </View>
                    
            <View className="py-8 w-full px-8 flex items-center justify-center">
                <TouchableOpacity className="w-full flex items-center justify-center" onPress={()=>{navigation.navigate('UserProfile')}}>
                    <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
                        <Text className="text-neutral-50 text-lg font-extrabold mr-2">Cadastrar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className="pt-4" onPress={()=>{navigation.navigate('Login')}} >
                    <Text className="text-neutral-50 text-base opacity-60 ">Já tem conta? Entrar</Text>
                </TouchableOpacity>
            </View>    
            </ScrollView>
        </PaperProvider>
    );
}
