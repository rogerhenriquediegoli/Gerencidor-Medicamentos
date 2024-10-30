import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.top}>
                    <Image source={require('../../assets/images/logo.png')}/>
                    <Text style={styles.titulo}>Boas-vindas!</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a especialidade"
                        secureTextEntry={true}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua localização"
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.depoimentos}>
                    <Text style={styles.depoimentosTitle}>Depoimentos</Text>

                    <View style={styles.depoimentoBlock}>
                        <Text style={styles.texts}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </Text>
                        <Text style={styles.textBottom}>Júlio, 40 anos, São Paulo/SP.</Text>
                    </View>

                    <View style={styles.depoimentoBlock}>
                        <Text style={styles.texts}>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        </Text>
                        <Text style={styles.textBottom}>Júlio, 40 anos, São Paulo/SP.</Text>
                    </View>

                    <View style={styles.depoimentoBlockWithoutBorder}>
                        <Text style={styles.texts}>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
                        </Text>
                        <Text style={styles.textBottom}>Júlio, 40 anos, São Paulo/SP.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF8DE',
        paddingHorizontal: 20, // Adiciona espaçamento nas laterais
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center', // Centraliza verticalmente
    },
    textBottom: {
        color: '#6B6E71',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5, // Espaço entre o texto principal e o textBottom
        marginBottom: 10, // Espaço entre o textBottom e a linha
    },
    texts: {
        fontSize: 19,
        color: '#90989F',
        padding: 15,
        marginBottom: 0, // Garante que não haja espaçamento abaixo do texto principal
        textAlign: 'left', // Alinha o texto à esquerda
        maxWidth: '100%', // Define uma largura máxima para o texto
        alignSelf: 'center', // Centraliza horizontalmente o bloco de texto
    },
    button: {
        backgroundColor: '#0B3B60',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'center',
        width: '100%', // Usa a largura total do formulário
        height: 48,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    form: {
        width: '100%', // Largura total do contêiner
        maxWidth: 400, // Limita a largura máxima do formulário
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',

        // Estilos de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Estilos de sombra para Android
        elevation: 5,
        alignSelf: 'center', // Centraliza horizontalmente
        marginBottom: 30
    },
    input: {
        width: '100%',
        height: 47,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginTop: 14,
        borderRadius: 5,
        backgroundColor: '#F8F8F8',

        // Estilos de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Estilos de sombra para Android
        elevation: 5,
    },
    top: {
        alignItems: 'flex-start', // Alinha à esquerda
        marginBottom: 30,
    },
    titulo: {
        fontSize: 24,
        color: "#80CC28",
        margin: 10,
        fontWeight: 'bold',
    },
    depoimentos: {
        alignSelf: 'center',
        width: '100%',
        maxWidth: 400,
        marginTop: 20,
    },
    depoimentosTitle: {
        color: '#0B3B60',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    depoimentoBlock: {
        marginBottom: 10, // Espaçamento entre blocos de depoimentos
        borderBottomWidth: 1,
        borderColor: '#E7EBEF',
    },
    depoimentoBlockWithoutBorder: {
        marginBottom: 120, // Espaçamento entre blocos de depoimentos
    },
});
