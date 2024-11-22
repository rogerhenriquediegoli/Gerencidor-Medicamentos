import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Details() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    // Mock data for demonstration
    const [medicine, setMedicine] = useState({
        id: id,
        name: 'Paracetamol',
        period: 'De 05/09/2025 à 10/10/2025',
        frequency: '5ml à cada 8 horas / 3 vezes ao dia',
        takes: [
            { takeNumber: 1, date: '22/11/2024', time: '08:00', notifications: 1, status: 'Pendente' },
            { takeNumber: 2, date: '22/11/2024', time: '16:00', notifications: 2, status: 'Pendente' },
            { takeNumber: 3, date: '22/11/2024', time: '00:00', notifications: 0, status: 'Pendente' },
        ],
    });

    // Function to toggle the status of a take
    const toggleStatus = (index) => {
        setMedicine((prevMedicine) => {
            const updatedTakes = prevMedicine.takes.map((take, i) =>
                i === index
                    ? { ...take, status: take.status === 'Pendente' ? 'Concluído' : 'Pendente' }
                    : take
            );
            return { ...prevMedicine, takes: updatedTakes };
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={() => router.push('../navegation')}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>

                {/* Medicine Details */}
                <View style={styles.line}></View>
                <Text style={styles.medicineName}>{medicine.name}</Text>
                <Text style={styles.medicineDetail}>Período: {medicine.period}</Text>
                <Text style={styles.medicineDetail}>Frequência: {medicine.frequency}</Text>
                <View style={styles.line}></View>

                {/* Takes */}
                <Text style={styles.sectionTitle}>Doses</Text>
                {medicine.takes.map((take, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardNumber}>{`${take.takeNumber}ª Dose`}</Text>
                            <Text style={styles.cardNotification}>
                                {`${take.notifications} Notificação${take.notifications > 1 ? 's' : ''}`}
                            </Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardDetailLeft}>DATA: {take.date}</Text>
                            <Text style={styles.cardDetailRight}>HORA: {take.time}</Text>
                        </View>
                        {/* Status Button */}
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                take.status === 'Concluído' ? styles.completedButton : styles.remainingButton,
                            ]}
                            onPress={() => toggleStatus(index)}
                        >
                            <Text style={styles.statusButtonText}>{take.status}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8DE',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    backButton: {
        alignSelf: 'flex-end',
        marginBottom: -30,
    },
    backButtonText: {
        fontSize: 50,
        color: '#80CC28',
        marginBottom: -30,
    },
    medicineName: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#0F4B3D',
        textAlign: 'left',
        marginBottom: 10,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginVertical: 10,
    },
    medicineDetail: {
        fontSize: 16,
        color: '#6B6E71',
        marginVertical: 5,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0F4B3D',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cardNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardNotification: {
        fontSize: 16,
        color: '#6B6E71',
    },
    cardDetails: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingTop: 10,
        marginTop: 0,
    },
    cardDetailLeft: {
        fontSize: 16,
        color: '#333',
        marginBottom: -22,
        alignSelf: 'flex-start',
    },

    cardDetailRight: {
        fontSize: 16,
        color: '#333',
        alignSelf: 'flex-end',
    },
    statusButton: {
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
    },
    completedButton: {
        backgroundColor: '#80CC28',
    },
    remainingButton: {
        backgroundColor: 'orange',
    },
    statusButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
