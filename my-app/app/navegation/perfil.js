import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Perfil() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleLogout = () => {
        console.log('Logout pressed');
        // Add your logout logic here (e.g., navigation or clearing tokens)
    };

    return (
        <View style={styles.container}>
            {/* Logout button */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Image 
                        source={require('../../assets/images/sair-logo.png')} // Configure the path
                        style={styles.logoutImage}
                    />
            </TouchableOpacity>
            <Text style={styles.titulo}>Meu perfil</Text>
            <View style={styles.linha}></View>
            <Text style={styles.textsCenter}>Informações pessoais</Text>
            <Text style={styles.depoimentoText}>Joana Magalhães Souza</Text>
            <Text style={styles.email}>joanamagalhaes10@gmail.com</Text>
            
            {/* Password Field */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    value="password123" // Use actual password state here if needed
                    secureTextEntry={!passwordVisible}
                    editable={false}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Icon
                        name={passwordVisible ? 'visibility' : 'visibility-off'}
                        size={24}
                        color="#80CC28"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Editar perfil</Text>
            </TouchableOpacity>
            <View style={styles.linha}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8DE',
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
    },
    linha: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: -10,
    },
    titulo: {
        fontSize: 30,
        color: "#80CC28",
        margin: 10,
        marginTop: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textsCenter: {
        color: '#80CC28',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    depoimentoText: {
        fontSize: 18,
        color: '#6B6E71',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    email: {
        fontSize: 17,
        color: '#6B6E71',
        marginBottom: 10,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#80CC28',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
        width: '85%',
        height: 48,
        alignSelf: 'center'
    },
    passwordContainer: {
        flexDirection: 'row',
        width: '65%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#D1D1D6',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 15,
        marginTop: -2
    },
    passwordInput: {
        flex: 1,
        color: '#6B6E71',
        fontSize: 17,
        paddingVertical: 10,
        textAlign: 'center'
    },
    logoutButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 40,
        height: 40,
    },
    logoutImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
