import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LivroScreen = ({ route, navigation }) => {
  // Recebe os dados do livro passados via navegação
  const { livro } = route.params;

  const handleSolicitarEmprestimo = () => {
    // Lógica para solicitar empréstimo será implementada depois
    console.log('Solicitar empréstimo');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoVoltar}>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.tituloCabecalho}>Detalhes do Livro</Text>
      </View>

      {/* Capa do Livro */}
      <View style={styles.containerCapa}>
        <Image source={{ uri: livro.imagem }} style={styles.imagemCapa} />
      </View>

      {/* Informações do Livro */}
      <View style={styles.containerInformacoes}>
        <Text style={styles.tituloLivro}>{livro.titulo}</Text>
        <Text style={styles.autorLivro}>{livro.autor}</Text>

        {/* Detalhes do Livro */}
        <View style={styles.containerDetalhes}>
          <View style={styles.itemDetalhe}>
            <Text style={styles.rotuloDetalhe}>Gênero</Text>
            <Text style={styles.valorDetalhe}>{livro.genero}</Text>
          </View>
          <View style={styles.itemDetalhe}>
            <Text style={styles.rotuloDetalhe}>Páginas</Text>
            <Text style={styles.valorDetalhe}>{livro.paginas}</Text>
          </View>
          <View style={styles.itemDetalhe}>
            <Text style={styles.rotuloDetalhe}>Data de Publicação</Text>
            <Text style={styles.valorDetalhe}>{livro.dataPublicacao}</Text>
          </View>
        </View>

        {/* Descrição do Livro */}
        <View style={styles.containerDescricao}>
          <Text style={styles.tituloDescricao}>Descrição</Text>
          <Text style={styles.textoDescricao}>{livro.descricao}</Text>
        </View>

        {/* Status do Livro */}
        <View style={styles.containerStatus}>
          <Text style={styles.textoStatus}>
            Status: {livro.disponivel ? 'Disponível' : 'Indisponível'}
          </Text>
        </View>

        {/* Botão de Empréstimo */}
        <TouchableOpacity
          style={[
            styles.botaoEmprestimo,
            !livro.disponivel && styles.botaoDesabilitado,
          ]}
          onPress={handleSolicitarEmprestimo}
          disabled={!livro.disponivel}
        >
          <Text style={styles.textoBotaoEmprestimo}>
            {livro.disponivel ? 'Solicitar Empréstimo' : 'Indisponível'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2c3e50',
  },
  botaoVoltar: {
    marginRight: 16,
  },
  tituloCabecalho: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  containerCapa: {
    alignItems: 'center',
    padding: 16,
  },
  imagemCapa: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  containerInformacoes: {
    padding: 16,
  },
  tituloLivro: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  autorLivro: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  containerDetalhes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemDetalhe: {
    alignItems: 'center',
  },
  rotuloDetalhe: {
    fontSize: 14,
    color: '#666',
  },
  valorDetalhe: {
    fontSize: 16,
    fontWeight: '600',
  },
  containerDescricao: {
    marginBottom: 16,
  },
  tituloDescricao: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  textoDescricao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  containerStatus: {
    marginBottom: 16,
  },
  textoStatus: {
    fontSize: 16,
    fontWeight: '600',
  },
  botaoEmprestimo: {
    backgroundColor: '#2c3e50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoDesabilitado: {
    backgroundColor: '#95a5a6',
  },
  textoBotaoEmprestimo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LivroScreen;