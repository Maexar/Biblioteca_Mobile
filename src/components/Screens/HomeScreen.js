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
        <Text style={styles.accountText}>Bem-vindo, {userName}</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar livros..."
          placeholderTextColor="#666"
        />
      </View>

      <ScrollView>
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <View style={styles.categoryButtons}>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Literatura</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Ficção</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Não-Ficção</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recentBooksContainer}>
          <Text style={styles.sectionTitle}>Adicionados Recentemente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Example book cards */}
            <View style={styles.bookCard}>
              <View style={styles.bookCover}></View>
              <Text style={styles.bookTitle}>Nome do Livro</Text>
              <Text style={styles.bookAuthor}>Autor</Text>
            </View>
            {/* Add more book cards as needed */}
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
  accountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#FF0000',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoriesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  recentBooksContainer: {
    padding: 16,
  },
  bookCard: {
    width: 120,
    marginRight: 16,
  },
  bookCover: {
    width: 120,
    height: 180,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;