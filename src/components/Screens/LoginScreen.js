import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../../../services/supabase';
import CryptoJS from 'react-native-crypto-js';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');


  function descriptografarSenha(senhaCriptografada, chave) {
    const bytes = CryptoJS.AES.decrypt(senhaCriptografada, chave);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

const chave = 'chave';

  async function lidarLogin() {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira o email.');
      return;
    }
    if (!senha) {
      Alert.alert('Erro', 'Por favor, insira a senha.');
      return;
    }
    if(senha && email){
      const { data, error, status } = await supabase
        .from('Usuario')
        .select('email, senha')
        .eq('email', email)
        .single()
        const senhaBanco = descriptografarSenha(data.senha, chave)
        if(senhaBanco == senha){
          navigation.replace('Home'); 
        }
        else{
          Alert.alert('Erro', 'Conta não existe');
        }
    }
  };

  const lidarRegistro = () => {
    navigation.replace('SignUp'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Biblioteca</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={lidarLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={lidarRegistro}>
        <Text style={styles.signUpText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    color: '#6495ED',
    marginTop: 20,
  },
});

export default LoginScreen;