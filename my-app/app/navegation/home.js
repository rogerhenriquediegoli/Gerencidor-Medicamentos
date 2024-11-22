import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [medicines, setMedicines] = useState([
        { id: 1, name: 'Paracetamol', dosage: '500 mg', frequency: '8 em 8 horas' },
        { id: 2, name: 'Ibuprofeno', dosage: '200 mg', frequency: '12 em 12 horas' },
        // Add more medicine data as needed
    ]);

    const handleLogout = () => {
        console.log('Logout pressed');
        router.push('/');
    };

    const handleComplete = (id) => {
        console.log(`Concluir medicamento ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Deletar medicamento ${id}`);
        setMedicines(prevMedicines => prevMedicines.filter(medicine => medicine.id !== id));
    };
    const handleSeeMore = (id) => {
        router.push(`../details/${id}`);

    };
    
    

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Image 
                        source={require('../../assets/images/sair-logo.png')}
                        style={styles.logoutImage}
                    />
                </TouchableOpacity>

                <Image 
                    source={require('../../assets/images/logo.png')} 
                    style={styles.image} 
                />
                <Text style={styles.titulo}>Boas-vindas!</Text>
                <View style={styles.linha}></View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.infoButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.infoIcon}>ℹ️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addIcon}>+</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>{`
Tutorial - U&R Med

Para começar a usar o U&R Med, siga estes passos para cadastrar sua prescrição:

1. Nome do Medicamento
Insira o nome completo do medicamento.

2. Dosagem
Informe a dosagem recomendada, como "500 mg" ou "1 comprimido".

3. Frequência
Defina a frequência de uso (ex.: a cada 8 horas, uma vez ao dia).

4. Data e Horário de Início
Escolha a data e horário da primeira dose. O U&R Med programará os alertas.

5. Confirmação
Após inserir tudo, confirme. A cada alerta, confirme que tomou para seguir para a próxima dose.

Correção de Erros
Para corrigir dosagem ou horário, delete o cadastro e adicione novamente com as informações certas.
                            `}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalCloseButton}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Text style={styles.sectionTitle}>Meus Medicamentos</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar medicamento"
                    value={searchText}
                    onChangeText={setSearchText}
                />

                {filteredMedicines.map(medicine => (
                    <View key={medicine.id} style={styles.medicineCard}>
                        <View style={styles.medicineHeader}>
                            <Text style={styles.medicineName}>{medicine.name}</Text>
                            <TouchableOpacity style={styles.viewMoreButton} onPress={() => handleSeeMore(medicine.id)}>
                                <Text style={styles.viewMoreText}>Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.medicineDetail}>Dosagem: {medicine.dosage}</Text>
                        <Text style={styles.medicineDetail}>Frequência: {medicine.frequency}</Text>
                        <View style={styles.cardButtons}>
                            <TouchableOpacity style={styles.completeButton} onPress={() => handleComplete(medicine.id)}>
                                <Text style={styles.buttonText}>Concluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(medicine.id)}>
                                <Text style={styles.buttonText}>Deletar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

// Add styles here...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8DE',
        paddingHorizontal: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: -50,
        marginTop: -30,
        marginBottom: -45,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
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
    titulo: {
        fontSize: 24,
        color: "#80CC28",
        margin: 10,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 0,
    },
    infoButton: {
        backgroundColor: 'transparent',
    },
    infoIcon: {
        fontSize: 25,
        color: '#6B6E71',
        marginTop: -6
    },
    addButton: {
        backgroundColor: '#80CC28',
        padding: 10,
        borderRadius: 5,
        width: 30,
        height: 30
    },
    addIcon: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: -8
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        color: '#6B6E71',
        textAlign: 'justify',
        marginBottom: 20,
    },
    modalCloseButton: {
        color: '#0B3B60',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F4B3D',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    searchInput: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        marginBottom: 30,
    },
    medicineCard: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    medicineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    medicineName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    viewMoreButton: {
        paddingHorizontal: 10,
    },
    viewMoreText: {
        color: '#5a5a5a',
        fontSize: 14,
    },
    medicineDetail: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    cardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    completeButton: {
        backgroundColor: '#80CC28',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: '#D32F2F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});