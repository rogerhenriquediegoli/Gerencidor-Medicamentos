import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Details() {
    const [medicine, setMedicine] = useState(null);
    const router = useRouter();

    // Extract 'id' from the query parameters
    const { id } = router.query;

    useEffect(() => {
        // Simulate fetching data
        const medicines = [
            { id: '1', name: 'Paracetamol', dosage: '500 mg', frequency: '8 em 8 horas' },
            { id: '2', name: 'Ibuprofeno', dosage: '200 mg', frequency: '12 em 12 horas' },
            // Add your medicine data
        ];

        // Find the selected medicine by ID
        const selectedMedicine = medicines.find(medicine => medicine.id === id);
        setMedicine(selectedMedicine);
    }, [id]);

    if (!medicine) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>{medicine.name}</Text>
            <Text>{medicine.dosage}</Text>
            <Text>{medicine.frequency}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ECF8DE',
    },
});
