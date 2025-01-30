import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Bem-vindo à BiblioMob!',
    description: 'Gerencie seus livros e membros facilmente',
    image: require('../../assets/pc_livro.png'),
    backgroundColor: '#87CEEB',
  },
  {
    id: '2',
    title: 'Controle de Empréstimos',
    description: 'Rastreie empréstimos e devoluções com facilidade',
    image: require('../../assets/livros.png'),
    backgroundColor: '#6495ED',
  },
  {
    id: '3',
    title: 'Penalidades',
    description: 'Notifique membros sobre devoluções atrasadas',
    image: require('../../assets/nuvemLivro.png'),
    backgroundColor: '#4169E1',
  },
];

const OnboardingScreen = ({ navigation, route }) => {
  const userData = route.params?.userData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Home', {userData});
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
<<<<<<< HEAD
    navigation.replace('Home');
=======
    navigation.replace('Home', {userData});
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
  };

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        onScroll={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />

      <View style={styles.containerBotaoPular}>
        <TouchableOpacity style={styles.botaoPular} onPress={handleSkip}>
            <Text style={styles.textoBotao}>Pular</Text>
        </TouchableOpacity>
      </View>    

      <View style={styles.containerBotaoVoltar}>
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.botaoVoltar} onPress={handleBack}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.containerBotaoProximo}>
        <TouchableOpacity style={styles.botaoProximo} onPress={handleNext}>
          <Text style={styles.textoBotao}>{currentIndex === slides.length - 1 ? 'Finalizar' : 'Próximo'}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },

  containerBotaoPular: {
    position: 'absolute',
    top: 50,
    alignItems: 'flex-end',
    width: '90%',
  },

  containerBotaoProximo: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'flex-end',
    width: '90%',
  },

  containerBotaoVoltar: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'flex-start',
    width: '90%',
  },

  botaoVoltar: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
  },
  botaoPular: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  botaoProximo: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingScreen;