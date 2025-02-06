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
            <Text style={styles.rotuloDetalhe}>Ano</Text>
            <Text style={styles.valorDetalhe}>{livro.anoPublicacao}</Text>
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


export default LivroScreen;