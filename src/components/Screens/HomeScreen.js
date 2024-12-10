import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import Usuario from '../../../Modelos/Usuario';
import { supabase } from '../../../services/supabase';

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

        <View style={styles.containerLivrosRecentes}>
          <Text style={styles.tituloSecao}>Adicionados Recentemente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* exemplo de card d livro */}
            <View style={styles.cartaoLivro}>
              <View style={styles.capaLivro}></View>
              <Text style={styles.tituloLivro}>Nome do Livro</Text>
              <Text style={styles.autorLivro}>Autor</Text>
            </View>
            
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  textoUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoSair: {
    padding: 8,
  },
  textoSair: {
    color: '#FF0000',
  },
  containerPesquisa: {
    padding: 16,
  },
  inputPesquisa: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
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
  containerLivrosRecentes: {
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