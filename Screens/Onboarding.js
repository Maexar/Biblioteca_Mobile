import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
    return (
      <Onboarding
        onSkip={() => navigation.replace('Home')}
        onDone={() => navigation.replace('Home')} 
        pages={[
          {
            backgroundColor: '#A8DADC',
            image: <Image source={require('../assets/pc_livro.png')} style={styles.image} />,
            title: 'Bem-vindo à Biblioteca',
            subtitle: 'Gerencie seus livros e membros facilmente',
          },
          {
            backgroundColor: '#457B9D',
            image: <Image source={require('../assets/livros.png')} style={styles.image}/>,
            title: 'Controle de Empréstimos',
            subtitle: 'Rastreie empréstimos e devoluções com facilidade',
          },
          {
            backgroundColor: '#DB7093',
            image: <Image source={require('../assets/nuvemLivro.png')} style={styles.image}/>,
            title: 'Penalidades',
            subtitle: 'Notifique membros sobre devoluções atrasadas',
          },
          
        ]}
      />
    );
  };

  const styles = StyleSheet.create({
    image: {
      width: 300, // Ajuste o tamanho de acordo com sua necessidade
      height: 300, // Ajuste o tamanho de acordo com sua necessidade
      resizeMode: 'contain', // Isso garante que a imagem mantenha suas proporções
    },
  });
  
  export default OnboardingScreen;