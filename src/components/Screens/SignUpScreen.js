import React, { useState, useEffect} from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'; // Importe o TextInputMask
import Endereco from '../../../Modelos/Endereco';
import Usuario from '../../../Modelos/Usuario';
import { supabase } from '../../../services/supabase';
import CryptoJS from 'react-native-crypto-js';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const userData = route.params?.userData;
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminNovoUsuario, setisAdminNovoUsuario] = useState(false);

  useEffect(() => {
    if (userData) {
      setIsAdmin(userData.admin);
    }
  }, [userData]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const criptografarSenha = (senha, chaveSecreta) => {
    return CryptoJS.AES.encrypt(senha, chaveSecreta).toString();
  };

  const chave = 'chave';

  const adicionarUsuario = async () => {
    try {
      const senhaCriptografada = criptografarSenha(senha, chave);

      const dataNascimentoDate = new Date(dataNascimento.split('/').reverse().join('-'));

      const dadosEndereco = {
        numero: numero,
        rua: rua,
        bairro: bairro,
        cidade: cidade
      };

      const { data: dataEndereco, error: errorEndereco } = await supabase
        .from('enderecos')
        .insert([dadosEndereco])
        .select();

      if (errorEndereco) throw errorEndereco;
      console.log(dataEndereco.id)
      const dadosUsuario = {
        nome: nome,
        email: email,
        senha: senhaCriptografada,
        endereco_id: dataEndereco[0].id,
        cpf: cpf,
        data_nascimento: dataNascimentoDate.toISOString(),
        data_criacao: new Date().toISOString(),
        admin: isAdminNovoUsuario
      };

      const { data: dataUsuario, error: errorUsuario } = await supabase
        .from('Usuario')
        .insert([dadosUsuario])
        .select();

      if (errorUsuario) throw errorUsuario;

      navigation.replace('Onboarding', { userData: dataUsuario });
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      Alert.alert('Erro', 'Não foi possível criar a conta. Tente novamente.');
    }
  };

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
      if(senha != confirmarSenha){
        Alert.alert('Erro', 'Senha de confirmação não corresponde');
        return;
      } 
      if (!rua) {
        Alert.alert('Erro', 'Por favor, insira a rua.');
        return;
      }
      if (!numero) {
        Alert.alert('Erro', 'Por favor, insira o número.');
        return;
      }
      if (!bairro) {
        Alert.alert('Erro', 'Por favor, insira o bairro.');
        return;
      }
      if (!cidade) {
        Alert.alert('Erro', 'Por favor, insira a cidade.');
        return;
      }
      adicionarUsuario();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta. Por favor, tente novamente.');
    }
  };

  const handleCancel = () => {
    if(isAdmin){
      navigation.navigate('Home', {userData: userData});
    }else{
      navigation.navigate('Login');
    }
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
        <View style={styles.containerFormulario}>
          <Text style={styles.titulo}>Criar Conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInputMask
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            type={'cpf'} 
          />

          <TextInputMask
            style={styles.input}
            placeholder="Data de Nascimento (DD/MM/AAAA)"
            value={dataNascimento}
            onChangeText={setDataNascimento}
            type={'datetime'} 
            options={{
              format: 'DD/MM/YYYY' 
            }}
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
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />

          {isAdmin && (
            <View style={styles.input}>
              <Text style={styles.label}>Administrador</Text>
              <Picker
                selectedValue={isAdminNovoUsuario}
                onValueChange={(itemValue) => setisAdminNovoUsuario(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Não" value="false" />
                <Picker.Item label="Sim" value="true" />
              </Picker>
            </View>
          )}

          <Text style={styles.subtitulo}>Endereço</Text>
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

          <TouchableOpacity style={styles.botao} onPress={criarConta}>
            <Text style={styles.textoCriarConta}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.textoCancelar}>Cancelar</Text>
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
  containerFormulario: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
  },
  subtitulo: {
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
  botao: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  textoCriarConta: {
    color: '#fff',
    fontSize: 16,
  },
  textoCancelar: {
    color: '#6495ED',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;