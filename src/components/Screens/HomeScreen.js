import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import Usuario from '../../../Modelos/Usuario';
import { supabase } from '../../../services/supabase';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


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
        <TouchableOpacity onPress={handleLogout} style={styles.iconeNotificacao}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.containerPesquisa}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquisar livros..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.botaoPesquisa}>
          <Ionicons name="search-outline" size={24} color="#34495e" />
        </TouchableOpacity>
      </View>

      
      {/* Conteúdo Principal */}
      <ScrollView style={styles.conteudo}>
        {/* Banner Promocional */}
        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x150' }}
            style={styles.imagemBanner}
          />
          <Text style={styles.textoBanner}>Promoção: Leve 3, Pague 2!</Text>
        </View>

        {/* Categorias Principais */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Categorias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Literatura', 'Ficção', 'Não-Ficção', 'E-books', 'Audiobooks'].map((categoria, indice) => (
              <TouchableOpacity key={indice} style={styles.botaoCategoria}>
                <Text style={styles.textoBotaoCategoria}>{categoria}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Livros Populares */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Populares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { 
                id: 1,
                titulo: 'Harry Potter e a Pedra Filosofal',
                autor: 'J. K. Rowling',
                imagem: require('../../assets/81ibfYk4qmL._SY466_.jpg') 
              },
              { 
                id: 2,
                titulo: '1984',
                autor: 'George Orwell', 
                imagem: 'https://via.placeholder.com/100' 
              },
              { 
                id: 3, 
                titulo: 'O Pequeno Príncipe', 
                autor: 'Antoine de Saint-Exupéry', 
                imagem: 'https://via.placeholder.com/100' 
              },

            ].map((livro) => (
              <TouchableOpacity key={livro.id} style={styles.cartaoLivro}>
                <Image 
                    //source={{ uri: livro.imagem }} qnd for usar com link, alterar de volta
                    source={typeof livro.imagem === 'string' ? { uri: livro.imagem } : livro.imagem}
                    //esse novo source é pra conseguir passar o caminho da imagem nas pastas
                    style={styles.imagemLivro} 
                />
                <Text style={styles.tituloLivro}>{livro.titulo}</Text>
                <Text style={styles.autorLivro}>{livro.autor}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.rodape}>
              <TouchableOpacity style={styles.itemRodape} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={24} color="#fff" />
                <Text style={styles.textoRodape}>Início</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemRodape} onPress={() => navigation.navigate('Buscar')}>
                <Ionicons name="search-outline" size={24} color="#fff" />
                <Text style={styles.textoRodape}>Buscar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemRodape} onPress={() => navigation.navigate('MinhaLista')}>
                <Ionicons name="book-outline" size={24} color="#fff" />
                <Text style={styles.textoRodape}>Minha Lista</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemRodape} onPress={() => navigation.navigate('Perfil')}>
                <Ionicons name="person-outline" size={24} color="#fff" />
                <Text style={styles.textoRodape}>Perfil</Text>
              </TouchableOpacity>
            </View>

    </View> //View Principal
  
  );//return

};// const HomeScreen

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
    backgroundColor: '#2c3e50',
    
    elevation: 2,
  },
  textoUsuario: {
    //nova cor:
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600', //antigo: 'bold'
  },
  iconeNotificacao: {
    padding: 8,
    
  },
  textoSair: {
    color: '#FFFFFF', //antigo: "#FF0000"
    //novo:
    fontSize: 14,
  },
  containerPesquisa: {
    //novo:
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  inputPesquisa: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#34495e',
  
  },
  botaoPesquisa: {
    padding: 12,
  },
  conteudo: {
    flex: 1,
  },
  banner: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#34495e',
  },
  imagemBanner: {
    width: '100%',
    height: 150,
  },
  textoBanner: {
    color: '#fff',
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secao: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  botaoCategoria: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  textoBotaoCategoria: {
    fontSize: 14,
    color: '#34495e',
  },
  cartaoLivro: {
    width: 100,
    marginRight: 16,
    alignItems: 'center',
  },
  imagemLivro: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  tituloLivro: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  autorLivro: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#bdc3c7',
    backgroundColor: '#2c3e50',
  },
  itemRodape: {
    alignItems: 'center',
  },
  textoRodape: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeScreen;

