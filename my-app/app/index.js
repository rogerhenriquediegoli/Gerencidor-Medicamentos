import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Login() {

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.imagem} />
        <Text style={styles.titulo}>Faça login em sua conta</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.captionInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.captionInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a sua senha"
          secureTextEntry={true}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/navegation')} // Navigate to 'Home' screen
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.linkCadastro}>
          <Text>Ainda não tem conta? </Text>
          <Text
            style={[styles.linkText, { color: '#34C759', fontWeight: 'bold' }]}
            onPress={() => router.push('/cadastro')} // Navigate to 'Cadastro' screen
          >
            Faça seu cadastro!
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#0F4B3D",
    marginBottom: 30,
  },
  captionInput: {
    color: "#0F4B3D",
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    width: '85%',
  },
  imagem: {
    width: 280,
    height: 280,
    marginBottom: 15,
  },
  input: {
    width: '85%',
    height: 47,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ECF8DE',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 90,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#80CC28',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center',
    width: '85%',
    height: 48,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  linkCadastro: {
    color: '#0B3B60',
    marginTop: 15,
    fontSize: 16,
  },
});
