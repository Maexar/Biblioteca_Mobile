import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const SkipButton = ({...props}) => (
    <TouchableOpacity {...props} style={styles.skipButton}>
      <Text style={styles.buttonText}>Pular</Text>
    </TouchableOpacity>
  );

  const NextButton = ({...props}) => (
    <TouchableOpacity {...props} style={styles.nextButton}>
      <Text style={styles.buttonText}>Próximo</Text>
    </TouchableOpacity>
  );

  const DoneButton = ({...props}) => (
    <TouchableOpacity {...props} style={styles.doneButton}>
      <Text style={styles.buttonText}>Finalizar</Text>
    </TouchableOpacity>
  );

  const BackButton = ({ isFirstPage, ...props }) => {
    if (isFirstPage) return null;
    return (
      <TouchableOpacity {...props} style={styles.backButton}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      onPageChange={(pageIndex) => setCurrentPage(pageIndex)}
      pages={[

        
        {
          backgroundColor: '#87CEEB',
          image: <Image source={('../../assets/pc_livro.png')} style={styles.image} />,
          title: 'Bem-vindo à BiblioMob!',
          subtitle: 'Gerencie seus livros e membros facilmente',
        },
        {
          backgroundColor: '#6495ED',
          image: <Image source={('../../assets/livros.png')} style={styles.image} />,
          title: 'Controle de Empréstimos',
          subtitle: 'Rastreie empréstimos e devoluções com facilidade',
        },
        {
          backgroundColor: '#4169E1',
          image: <Image source={('../../assets/nuvemLivro.png')} style={styles.image} />,
          title: 'Penalidades',
          subtitle: 'Notifique membros sobre devoluções atrasadas',
        },
      ]}
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      BackButtonComponent={(props) => <BackButton isFirstPage={currentPage === 0} {...props} />}
    />
  );
};

const styles = StyleSheet.create({
  skipButton: {
    marginLeft: 20,
    marginBottom: 20,
  },
  nextButton: {
    marginRight: 20,
    marginBottom: 20,
  },
  doneButton: {
    marginRight: 20,
    marginBottom: 20,
  },
  backButton: {
    marginLeft: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default OnboardingScreen;