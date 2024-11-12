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

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Home');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    navigation.replace('Home');
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

      <View style={styles.buttonSkipContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.buttonText}>Pular</Text>
        </TouchableOpacity>
      </View>    

      <View style={styles.buttonBackContainer}>
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.buttonNextContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>{currentIndex === slides.length - 1 ? 'Finalizar' : 'Próximo'}</Text>
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

  buttonSkipContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'flex-end',
    width: '90%',
  },

  buttonNextContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'flex-end',
    width: '90%',
  },

  buttonBackContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'flex-start',
    width: '90%',
  },

  backButton: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
  },
  skipButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingScreen;