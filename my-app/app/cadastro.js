import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.imagem} />
        <Text style={styles.titulo}>Insira alguns dados básicos:</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.captionInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.captionInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          secureTextEntry={true}
        />
        <Text style={styles.captionInput}>Crie uma senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Text style={styles.captionInput}>Repita a senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/')}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#0F4B3D",
    textAlign: 'center',
    width: 300,
    marginBottom: 20
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
    marginBottom: -35,
    marginTop: -50,
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
    backgroundColor: '#ECF8DE',
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#80CC28',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 40,
    width: '85%',
    textAlign: 'center',
    height: 48
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
});
