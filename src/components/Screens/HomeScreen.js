import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const userName = "Nome do Usuário"; // Simboliza o nome do usuário, pode ser substituído pelo dado real

  const handleLogout = () => {
    navigation.replace('Login'); // Redireciona para a tela de login ao sair
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.accountText}>Bem-vindo, {userName}</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
      {/* Conteúdo da HomeScreen pode ser adicionado aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  accountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#6495ED',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;