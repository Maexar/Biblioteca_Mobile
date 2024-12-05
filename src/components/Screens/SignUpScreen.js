import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Endereco from '../../../Modelos/Endereco';
import Usuario from '../../../Modelos/Usuario';
import { supabase } from '../../../services/supabase';
import CryptoJS from 'react-native-crypto-js';

const SignUpScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  function criptografarSenha(senha, chaveSecreta) {
      return CryptoJS.AES.encrypt(senha, chaveSecreta).toString();
  }
  

  const chave = 'chave';

  const adicionarUsuario = async() => {
    const senhaCriptografada = criptografarSenha(senha, chave)
    const { data, error } = await supabase.from("Usuario").insert([{nome: nome, email: email, senha: senhaCriptografada}])
    navigation.replace('Onboarding');
  }

  const criarConta = async () => {
    try {
      if (!nome) {
        Alert.alert('Erro', 'Por favor, insira o nome.');
        return;
      }
      if (!email || !validateEmail(email)) {
        Alert.alert('Erro', 'Por favor, insira um email válido.');
        return;
      }
      if (!senha || senha.length < 6) {
        Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
        return;
      }
      if (rua) {
        Alert.alert('Erro', 'Por favor, insira a rua.');
        return;
      }
      if (numero) {
        Alert.alert('Erro', 'Por favor, insira o número.');
        return;
      }
      if (bairro) {
        Alert.alert('Erro', 'Por favor, insira o bairro.');
        return;
      }
      if (cidade) {
        Alert.alert('Erro', 'Por favor, insira a cidade.');
        return;
      }
      adicionarUsuario()

    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta. Por favor, tente novamente.');
    }
  };

  const handleCancel = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Criar Conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
          />

          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <Text style={styles.subtitle}>Endereço</Text>
          <TextInput
            placeholder="Rua"
            value={rua}
            onChangeText={setRua}
            style={styles.input}
          />
          <TextInput
            placeholder="Número"
            value={numero}
            onChangeText={setNumero}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Bairro"
            value={bairro}
            onChangeText={setBairro}
            style={styles.input}
          />
          <TextInput
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={criarConta}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelText: {
    color: '#6495ED',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;