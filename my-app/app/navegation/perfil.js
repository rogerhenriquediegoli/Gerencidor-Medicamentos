import { StyleSheet, Text, View, Image } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu perfil</Text>
            <Image style={styles.image} />

            <Text style={styles.textsCenter}>Informações pessoais</Text>
                <Text style={styles.depoimentoText}>Joana Magalhães Souza</Text>
                <Text style={[styles.depoimentoText, styles.depoimentoTextSecundario]}>28/05/1990</Text>
                <Text style={[styles.depoimentoText, styles.depoimentoTextSecundario]}>São Paulo</Text>
            <Text style={styles.line}></Text>

            <Text style={styles.textsCenter}>Histórico médico</Text>
            <Text style={styles.depoimentoText}>• Bronquite</Text>
            <Text style={styles.depoimentoText}>• Sinusite</Text>
            <Text style={{marginTop: 230}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    depoimentoTextSecundario: {
        fontWeight: 'normal', // Remover o negrito para este estilo
    },
    
    titulo: {
        fontSize: 24,
        color: "#339CFF",
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginVertical: 10,
    },
    textsCenter: {
        color: '#339CFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    line: {
        borderBottomColor: "#90989F",
        borderBottomWidth: 1,
        marginVertical: 10,
        width: '100%',
        alignSelf: 'center',
    },
    depoimentoText: {
        fontSize: 16,
        color: '#6B6E71',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
});
