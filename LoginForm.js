import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Usuarios from './Usuarios.json';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = Usuarios.Users.find(user => user.NombreUsuario === username);

      if (user) {
        if (user.Pass === password) {
          setErrorMessage('');
          navigation.navigate('Home'); // Navegamos a la pantalla Home después del inicio de sesión exitoso.
        } else {
          setErrorMessage('Contraseña incorrecta');
        }
      } else {
        setErrorMessage('Usuario no encontrado');
      }
    } catch (error) {
      setErrorMessage('Error al iniciar sesión. Por favor, inténtalo nuevamente.');
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./Imagenes/_LibraryManager_-removebg-preview.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>¡Bienvenido</Text>
      <Text style={styles.title}>Inicia Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        color="lightgreen"
        style={styles.Button}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200, // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta el alto de la imagen según tus necesidades
    marginBottom: 10, // Espacio entre la imagen y el texto de bienvenida
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'skyblue',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CF3232',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,

  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  separator: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  Button: {
    borderRadius: 20,
  },

});

export default LoginForm;
