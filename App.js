import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './LoginForm';
import LoginRegistrar from './LoginRegistrar';
import Inicio from './Inicio';
import Buscar from './Buscar/Buscar';
import AdminLibros from './AdminLibros/AdminLibros';
import PrestamosDevoluciones from './PrestamosDevoluciones/PrestamosDevoluciones';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#cf3065',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginForm} options={{ title: 'LibraryManager' }} />
        <Stack.Screen name="Home" component={Inicio} options={{ title: 'Inicio' }} />
        <Stack.Screen name="LoginRegistrar" component={LoginRegistrar} options={{ title: 'Registrar' }} />
        <Stack.Screen name="BuscarScreen" component={Buscar} options={{ title: 'Buscar' }} />
        <Stack.Screen name="AdminLibrosScreen" component={AdminLibros} options={{ title: 'Administrar Libros' }} />
        <Stack.Screen name="PrestamosDevolucionesScreen" component={PrestamosDevoluciones} options={{ title: 'Préstamos y Devoluciones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
