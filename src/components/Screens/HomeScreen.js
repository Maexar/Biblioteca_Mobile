import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import Usuario from '../../../Modelos/Usuario';
import { supabase } from '../../../services/supabase';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { searchBookByTitle } from '../../../services/APIs/googleBooksApi';



const HomeScreen = ({ navigation, route }) => {
  const [userName, setNomeUsuario] = React.useState('');
  const userData = route.params?.userData;
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [showAdminOptions, setShowAdminOptions] = React.useState(false);
  const [livros, setLivros] = React.useState([]);

  useEffect(() => {
    if (userData) {
      setNomeUsuario(userData.nome);
      setIsAdmin(userData.admin);
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
          .select('nome, admin')
          .eq('email', user.email)
          .single();
        console.log("ADM", data.admin)
        if (error) throw error;
        if (data) {
          setNomeUsuario(data.nome);
          console.log("ADM", data.admin)
          setIsAdmin(data.admin || false);
        }
      }
    } catch (error) {
      console.log('Erro ao buscar dados do usuário:', error);
    }
  };


  const handleLogout = () => {
    navigation.replace('Login');
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  const extrairDataPublicacao = (publishedDate) => {
    if (!publishedDate) return 'Data não disponível';
    
    // Se for apenas o ano (formato "YYYY")
    if (publishedDate.length === 4) {
      return `01/01/${publishedDate}`;
    }
    
    // Se for data completa (formato "YYYY-MM-DD")
    try {
      const data = new Date(publishedDate);
      if (isNaN(data.getTime())) {
        return 'Data não disponível';
      }
      return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Erro ao converter data:', error);
      return 'Data não disponível';
    }
  };

  //Para implementações futuras, mudar isso aqui pra trazer direto do Supabase
  const carregarLivros = async () => {
    const livros = [
      { 
        id: 1,
        titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
        autor: 'J.R.R. Tolkien',
      },
      { 
        id: 2,
        titulo: '1984',
        autor: 'George Orwell',
      },
      { 
        id: 3,
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
      },
    ];

     try {
    const livrosComCapas = await Promise.all(
      livros.map(async (livro) => {
        const dadosGoogle = await searchBookByTitle(livro.titulo);
        return {
          ...livro,
          imagem: dadosGoogle?.thumbnail || 'https://via.placeholder.com/100',
          descricao: dadosGoogle?.description || 'Descrição não disponível',
          genero: dadosGoogle?.categories?.[0] || 'Gênero não especificado',
          paginas: dadosGoogle?.pageCount || 'Número de páginas não disponível',
          dataPublicacao: extrairDataPublicacao(dadosGoogle?.publishedDate),
          disponivel: true,
        };
      })
    );

    setLivros(livrosComCapas);
  } catch (error) {
    console.error('Erro ao carregar livros:', error);
    // Mantém o fallback, mas com mensagens mais informativas
    setLivros(livros.map(livro => ({
      ...livro,
      imagem: 'https://via.placeholder.com/100',
      descricao: 'Não foi possível carregar a descrição',
      genero: 'Gênero não disponível',
      paginas: 'Não informado',
      dataPublicacao: 'Data não disponível',
      disponivel: true,
    })));
  }

  };
  const AdminMenu = ({ userData, navigation }) => (
    <View style={styles.adminMenu}>
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.replace('SignUp', {userData})}>
        <Text>Cadastrar Usuário</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('CadastroMidia')}>
        <Text>Cadastrar Mídia</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('RelatorioMidia')}>
        <Text>Relatório de Mídia</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('RelatorioEmprestimo')}>
        <Text>Relatório de Empréstimo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('EmprestarLivro')}>
        <Text>Emprestar Livro</Text>
      </TouchableOpacity>
    </View>
  );

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textoUsuario}>Bem-vindo, {userName}</Text>
        <View style={styles.headerButtons}>
          {isAdmin && (
            <TouchableOpacity 
              onPress={() => setShowAdminOptions(!showAdminOptions)}
              style={styles.adminButton}>
              <Text style={styles.textoSair}>ADM</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <TouchableOpacity onPress={handleLogout} style={styles.iconeNotificacao}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
        </TouchableOpacity>
        
      </View>
      {showAdminOptions && isAdmin && <AdminMenu userData={userData} navigation={navigation} />}

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

        {/* Livros Populares */}
        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Populares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {livros.map((livro) => (
              <TouchableOpacity 
                key={livro.id} 
                style={styles.cartaoLivro}
                onPress={() => navigation.navigate('Livro', { livro })}
              >
                <Image 
                  source={{ uri: livro.imagem }}
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

  adminButton: {
    padding: 8,
    backgroundColor: '#242424',
    borderRadius: 5,
  },
  adminMenu: {
    position: 'absolute',
    right: 20,
    top: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    zIndex: 1000,
  },

  menuItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

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

