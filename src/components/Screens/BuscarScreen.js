import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BuscarScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  // Função para simular uma busca (substituir pela chamada de livro do supabase)
  const handleSearch = () => {
    // Simulação de resultados baseados na query
    const livrosMock = [
      { id: 1, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J. K. Rowling' },
      { id: 2, titulo: '1984', autor: 'George Orwell' },
      { id: 3, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry' },
    ];

    const filteredResults = livrosMock.filter((livro) =>
      livro.titulo.toLowerCase().includes(query.toLowerCase())
    );
    setResultados(filteredResults);
  };

  return (
    <View style={styles.container}>
      {/* Barra de Pesquisa */}
      <View style={styles.containerPesquisa}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Buscar livros..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.botaoPesquisa} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="#34495e" />
        </TouchableOpacity>
      </View>

      {/* Resultados da Busca */}
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cartaoLivro}
            onPress={() => navigation.navigate('Livro', { livro: item })}
          >
            <Text style={styles.tituloLivro}>{item.titulo}</Text>
            <Text style={styles.autorLivro}>{item.autor}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhum resultado encontrado.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  containerPesquisa: {
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
  cartaoLivro: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
  },
  tituloLivro: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  autorLivro: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  textoVazio: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#7f8c8d',
  },
});

export default BuscarScreen;