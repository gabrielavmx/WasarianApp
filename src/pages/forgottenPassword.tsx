import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import axios from "axios";
import React from "react";
import { DEVICE_IP } from '../config.js';

type ForgottenPasswordProps = { navigation: any };

export default function ForgottenPassword({ navigation }: ForgottenPasswordProps) {
  const [textEmail, setTextEmail] = useState('');

  const handleSendLink = async () => {
    try {
      const response = await axios.post(`${DEVICE_IP}/forgotpassword/reset`, { email: textEmail });
      Alert.alert('Sucesso', 'Um link de redefinição de senha foi enviado para o seu e-mail.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao enviar link de redefinição de senha:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar enviar o link de redefinição de senha. Por favor, tente novamente.');
    }
  };

  return (
    <ScrollView className="bg-neutral-900 h-full w-full">
      <View className="flex items-start justify-center pt-24">
        <Text className="text-3xl text-neutral-50 font-bold px-6">Redefina Sua Senha</Text>
        <Text className="text-base text-neutral-50 px-6 py-4">
          Insira o endereço de e-mail vinculado à sua conta do Wasarian para enviarmos um e-mail.
        </Text>

        <Text className="text-base font-bold text-neutral-50 px-6">Endereço de e-mail</Text>
        <View className="flex flex-row items-center pt-8 px-6">
          <FontAwesomeIcon icon={faEnvelope} color="#fafafa" size={24} style={{ paddingVertical: 12 }} />
          <TextInput
            className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
            value={textEmail}
            onChangeText={setTextEmail}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#fafafa"
          />
        </View>
        <TouchableOpacity>
          <Text className="px-6 text-neutral-50 text-base underline underline-offset-4">Precisa de ajuda?</Text>
        </TouchableOpacity>

        <View className="py-8 w-full px-8 flex items-center justify-center">
          <TouchableOpacity className="w-full flex items-center justify-center" onPress={handleSendLink}>
            <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
              <Text className="text-neutral-50 text-lg font-extrabold mr-2">Enviar Link</Text>
              <FontAwesomeIcon icon={faLink} color="#fafafa" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
