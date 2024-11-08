import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; // Importing icons from Expo

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: { backgroundColor: '#0F4B3D' }, // Background color of the tab bar
                tabBarActiveTintColor: '#34C759', // Active icon color
                tabBarInactiveTintColor: '#FFFFFF', // Inactive icon color
            }}
        >
            <Tabs.Screen 
                name='home' 
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='home' size={24} color={color} />
                    ),
                    tabBarLabel: 'Inicio',
                    headerShown: false, // Esconde a barra de título
                }}
            />
            <Tabs.Screen 
                name='perfil' 
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='person' size={24} color={color} />
                    ),
                    tabBarLabel: 'Perfil',
                    headerShown: false,
                }}
            />
            <Tabs.Screen 
                name='sobre' 
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='help-circle' size={24} color={color} />
                    ),
                    tabBarLabel: 'Sobre',
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
