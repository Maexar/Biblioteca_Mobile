import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import Usuario from '../../../Modelos/Usuario';
import { supabase } from '../../../services/supabase';
<<<<<<< HEAD
=======
import { Image } from 'react-native';
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)

const HomeScreen = ({ navigation, route }) => {
  const [userName, setNomeUsuario] = React.useState('');
  const userData = route.params?.userData;

  useEffect(() => {
    if (userData) {
      setNomeUsuario(userData.nome);
    } else {
      buscaDadosUsuario();
    }
  }, [userData]);

  const buscaDadosUsuario = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('Usuario')
          .select('nome')
          .eq('email', user.email)
          .single();
      
        if (error) throw error;
        if (data) setNomeUsuario(data.nome);
      }
    } catch (error) {
      console.log('Erro ao buscar dados do usuário:', error);
    }
  };


  const handleLogout = () => {
    navigation.replace('Login');
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoUsuario}>Bem-vindo, {userName}</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.botaoSair}>
          <Text style={styles.textoSair}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerPesquisa}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquisar livros..."
          placeholderTextColor="#666"
        />
      </View>

      <ScrollView>

        <View style={styles.containerCategorias}>
          <Text style={styles.tituloSecao}>Categorias</Text>
          <View style={styles.botoesCategoria}>
            <TouchableOpacity style={styles.botaoCategoria}>
              <Text style={styles.textoBotaoCategoria}>Literatura</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCategoria}>
              <Text style={styles.textoBotaoCategoria}>Ficção</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCategoria}>
              <Text style={styles.textoBotaoCategoria}>Não-Ficção</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerListagem}>
          <Text style={styles.tituloSecao}>Adicionados Recentemente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {/* inicio cartao livro*/}
            <View style={styles.cartaoLivro}>
<<<<<<< HEAD
              <View style={styles.capaLivro}></View>
              <Text style={styles.tituloLivro}>Nome do Livro</Text>
=======
              <Image source={require('../../assets/81ibfYk4qmL._SY466_.jpg')} style={styles.capaLivro} />
              <Text style={styles.tituloLivro}>Harry Potter e a Pedra Filosofal</Text>
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
              <Text style={styles.autorLivro}>Autor</Text>
            </View>
            {/* fim cartao livro*/}

            {/* inicio cartao livro*/}
            <View style={styles.cartaoLivro}>
              <View style={styles.capaLivro}></View>
              <Text style={styles.tituloLivro}>Nome do Livro</Text>
              <Text style={styles.autorLivro}>Autor</Text>
            </View>
            {/* fim cartao livro*/}

          </ScrollView>
        </View>

        <View style={styles.containerListagem}>
          <Text style={styles.tituloSecao}>Populares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {/* inicio cartao livro*/}
            <View style={styles.cartaoLivro}>
              <View style={styles.capaLivro}></View>
              <Text style={styles.tituloLivro}>Nome do Livro</Text>
              <Text style={styles.autorLivro}>Autor</Text>
            </View>
            {/* fim cartao livro*/}

          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
   // antiga backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4A90E2',
    // antiga backgroundColor: '#fff',
    elevation: 2,
  },
  textoUsuario: {
    //nova cor:
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600', //antigo: 'bold'
  },
  botaoSair: {
    padding: 8,
    //novo:
    backgroundColor: '#F39C12',
    borderRadius: 5,
  },
  textoSair: {
    color: '#FFFFFF', //antigo: "#FF0000"
    //novo:
    fontSize: 14,
  },
  containerPesquisa: {
    //novo:
    backgroundColor: '#FFFFFF',
    margin: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8ECEF',
  },
  inputPesquisa: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    //novo:
    color: '#2C3E50',
  },
  containerCategorias: {
    padding: 16,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  botoesCategoria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  botaoCategoria: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  textoBotaoCategoria: {
    color: '#fff',
    fontWeight: 'bold',
  },
  containerListagem: {
    padding: 16,
  },
  cartaoLivro: {
    width: 120,
    marginRight: 16,
  },
  capaLivro: {
    width: 120,
    height: 180,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  tituloLivro: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  autorLivro: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;