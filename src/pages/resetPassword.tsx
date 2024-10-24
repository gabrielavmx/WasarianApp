import { faEnvelope, faKey, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import axios from "axios";
import React from "react";
import { DEVICE_IP } from '../config.js';

type ResetPasswordProps = { navigation: any };

export default function ResetPassword({ navigation }: ResetPasswordProps) {
  const [textEmail, setTextEmail] = useState('');
  const [textCode, setTextCode] = useState('');
  const [textNewPassword, setTextNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const validateResponse = await axios.post(`${DEVICE_IP}/forgotpassword/validate-code`, {
        email: textEmail,
        code: textCode
      });

      if (validateResponse.status === 200) {
        const resetResponse = await axios.post(`${DEVICE_IP}/forgotpassword/reset-password`, {
          email: textEmail,
          code: textCode,
          newPassword: textNewPassword
        });

        if (resetResponse.status === 200) {
          Alert.alert('Sucesso', 'Sua senha foi redefinida com sucesso. Faça login com sua nova senha.');
          navigation.navigate('Login');
        }
      }
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      Alert.alert('Erro', 'Código inválido ou erro ao redefinir a senha. Por favor, tente novamente.');
    }
  };

  return (
    <ScrollView className="bg-neutral-900 h-full w-full">
      <View className="flex items-start justify-center pt-24">
        <Text className="text-3xl text-neutral-50 font-bold px-6">Redefina Sua Senha</Text>
        <Text className="text-base text-neutral-50 px-6 py-4">
          Insira o e-mail associado à sua conta, o código de verificação enviado para o e-mail, e a nova senha.
        </Text>

        {/* Campo de Email */}
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

        {/* Campo de Código */}
        <Text className="text-base font-bold text-neutral-50 px-6">Código de Verificação</Text>
        <View className="flex flex-row items-center pt-8 px-6">
          <FontAwesomeIcon icon={faKey} color="#fafafa" size={24} style={{ paddingVertical: 12 }} />
          <TextInput
            className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
            value={textCode}
            onChangeText={setTextCode}
            placeholder="Código de 6 dígitos"
            keyboardType="numeric"
            placeholderTextColor="#fafafa"
          />
        </View>

        {/* Campo de Nova Senha */}
        <Text className="text-base font-bold text-neutral-50 px-6">Nova Senha</Text>
        <View className="flex flex-row items-center pt-8 px-6">
          <FontAwesomeIcon icon={faKey} color="#fafafa" size={24} style={{ paddingVertical: 12 }} />
          <TextInput
            className="text-neutral-50 text-base bg-neutral-800 mb-3 w-72 rounded-2xl h-12 px-4 ml-4"
            value={textNewPassword}
            onChangeText={setTextNewPassword}
            placeholder="Nova Senha"
            secureTextEntry
            placeholderTextColor="#fafafa"
          />
        </View>

        {/* Botão de Redefinir Senha */}
        <View className="py-8 w-full px-8 flex items-center justify-center">
          <TouchableOpacity className="w-full flex items-center justify-center" onPress={handleResetPassword}>
            <View className="flex flex-row items-center bg-emerald-600 px-8 py-4 rounded-2xl w-full justify-center">
              <Text className="text-neutral-50 text-lg font-extrabold mr-2">Redefinir Senha</Text>
              <FontAwesomeIcon icon={faLink} color="#fafafa" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
