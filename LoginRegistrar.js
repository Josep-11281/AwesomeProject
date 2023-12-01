import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import Usuarios from './Usuarios.json';
import { useNavigation } from '@react-navigation/native';

const LoginRegistrar = () => {
  const [NombreUsuario, setNombreUsuario] = useState('');
  const [Pass, setPass] = useState('');
  const [mensaje, setMensaje] = useState('');

  
  const navigation = useNavigation();

  const handleRegistrar = async () => {
    try {
      // Verificamos si el usuario ya existe en el archivo Usuarios.json
      const usuarioExistente = Usuarios.Users.find(user => user.NombreUsuario === NombreUsuario);
      if (usuarioExistente) {
        setMensaje('El nombre de usuario ya existe.');
      } else {
        // Creamos un nuevo usuario con los datos ingresados
        const nuevoUsuario = {
          id: Usuarios.Users.length + 1,
          IdPerfil: "3", // Puedes establecer el valor del IdPerfil según tus necesidades
          NombreUsuario: NombreUsuario,
          Pass: Pass,
          Estatus: "Nuevo usuario", // Puedes cambiar este valor según tus necesidades
          FechaRegistro: new Date().toISOString().split('T')[0],
          IdSucursal: 0 // Puedes cambiar este valor según tus necesidades
        };

        // Agregamos el nuevo usuario a la lista de usuarios en el archivo Usuarios.json
        Usuarios.Users.push(nuevoUsuario);

        // Guardamos los cambios en el archivo JSON utilizando Axios
        const response = await axios.post('http://localhost:19006/Usuarios/Users', nuevoUsuario);
        // La URL_DE_TU_API_O_BACKEND es la dirección de tu servidor o endpoint donde se guarda el archivo Usuarios.json

        // Verificamos si la inserción fue exitosa
        if (response.status === 201) {
          navigation.navigate('LoginForm');
        } else {
          setMensaje('Gracias por registrarte ');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Gracias por registrarte');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido</Text>
      <Text style={styles.title}>Registrate </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        onChangeText={text => setNombreUsuario(text)}
        value={NombreUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
        value={Pass}
      />
      <Button title="Registrarte" onPress={handleRegistrar}  />
      {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#1a8b78', 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  mensaje: {
    color: 'green',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginRegistrar;

