import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';








export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola</Text>
      <Text style={styles.subtitulo}>Inicia Sesion</Text>
      <TextInput
       placeholder='Escribe tu correo'
       style={styles.textInput}
       
      />
      <TextInput 
       placeholder='Escribe tu contraseña '
       style={styles.textInput}

      /> 
      <Button style={styles.titulo}>Hola</Button>

      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#228b22',
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 20,
    color: '#228b22',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#f8f8ff',
    color: '#ff8c00',
  }


});
