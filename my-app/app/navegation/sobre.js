import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icons
import { router } from 'expo-router';

export default function Sobre() {
    const [whoVisible, setWhoVisible] = useState(false);
    const [appVisible, setAppVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    const renderButton = (text, isVisible, setVisible, description) => (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setVisible(!isVisible)}
            >
                <Text style={styles.buttonText}>{text}</Text>
                <Icon
                    name={isVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={30}
                    color="#fff"
                />
            </TouchableOpacity>
            {isVisible && (
                <View style={styles.textContainer}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            )}
        </>
    );

    const handleLogout = () => {
        console.log('Logout pressed');
        // Using navigation to go back to the login page
        router.push('/'); // Assumes you have a "Login" screen in your stack
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {/* Logout button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Image 
                        source={require('../../assets/images/sair-logo.png')} // Configure the path
                        style={styles.logoutImage}
                    />
                </TouchableOpacity>

                <Image 
                    source={require('../../assets/images/logo.png')} 
                    style={styles.image} 
                />
                <Text style={styles.titulo}>Dúvidas Frequentes</Text>
                <View style={styles.linha}></View>

                {renderButton(
                    'Quem somos',
                    whoVisible,
                    setWhoVisible,
                    `
U&R Med
 
Somos uma dupla de estudantes do curso técnico em Desenvolvimento de Sistemas, apaixonados por tecnologia e saúde. 

Acreditamos que a inovação pode transformar a forma como as pessoas gerenciam seus medicamentos, trazendo mais segurança e praticidade ao dia a dia. 

Com o U&R Med, queremos contribuir para um futuro onde a tecnologia e a saúde andem juntas.`
                )}
                {renderButton(
                    'Sobre o App',
                    appVisible,
                    setAppVisible,
                    `
O U&R Med foi criado para automatizar a gestão de medicamentos, tornando o processo mais prático para o usuário. Com ele, você poderá:
 
-> Registrar sua prescrição: Insira os dados de sua prescrição e o U&R Med cuidará do resto.

-> Alertas automáticos: O app programa automaticamente os horários de suas dosagens. Você só precisa confirmar que tomou a medicação para que o app atualize e programe a próxima dose.

-> Controle simples e eficiente: A interface intuitiva permite que você acompanhe facilmente seus tratamentos, sem complicações.

Com o U&R Med, o gerenciamento de medicamentos é simples, seguro e automatizado, garantindo que você nunca perca uma dose importante.
`
                )}
                {renderButton(
                    'Fale conosco',
                    contactVisible,
                    setContactVisible,
                    `
Se você tiver alguma dúvida ou feedback, sinta-se à vontade para entrar em contato conosco pelo e-mail suporte@example.com.
                    `
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8DE',
        paddingHorizontal: 20,
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
    linha: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#80CC28',
        padding: 10,
        borderRadius: 5,
        marginBottom: 25,
        width: '100%',
        height: 80,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textContainer: {
        backgroundColor: '#D1D1D6',
        padding: 15,
        borderRadius: 8,
        marginTop: -5,
        marginBottom: 30,
    },
    description: {
        fontSize: 16,
        color: '#333333',
        textAlign: 'justify',
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: -50,
        marginTop: -30,
        marginBottom: -45,
    },
    titulo: {
        fontSize: 24,
        color: "#80CC28",
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});
