import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();


  const navigateToSection = (sectionName) => {
    if (sectionName === 'Buscar') {
      navigation.navigate('BuscarScreen'); // Nombre de la pantalla de la sección Buscar
    } else if (sectionName === 'AdminLibros') {
      navigation.navigate('AdminLibrosScreen'); // Nombre de la pantalla de Administración de Libros
    } else if (sectionName === 'PrestamosDevoluciones') {
      navigation.navigate('PrestamosDevolucionesScreen'); // Nombre de la pantalla de Préstamos y Devoluciones
    }
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    navigation.navigate('Login');
  };


  return (
    <View style={styles.container}>
      {/* Icono del menú */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.menuIcon}>
        <Image
          source={require('./Imagenes/menu.gif')} // Ruta del archivo GIF del menú
          style={styles.menuGif}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.gifContainer}>
        {/* Primer GIF con texto */}
        <View style={styles.gifItem}>
          <View style={styles.gifWithText}>
            <TouchableOpacity onPress={() => navigateToSection('Buscar')} style={styles.gifItem}>
              <Image
                source={require('./Imagenes/buscar.gif')}
                style={styles.gif}
                resizeMode="contain"
              />
              <Text style={styles.gifText}>Buscar libros</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gifItem}>
          <View style={styles.gifWithText}>
            <TouchableOpacity onPress={() => navigateToSection('AdminLibros')} style={styles.gifItem}>
              {/* ...código del segundo GIF */}
              <Image
                source={require('./Imagenes/libro-abierto.gif')} // Reemplaza con la ruta de tu archivo GIF
                style={styles.gif}
                resizeMode="contain"
              />
              <Text style={styles.gifText}>Administración de Libros</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gifItem}>
          <View style={styles.gifWithText}>
            <TouchableOpacity onPress={() => navigateToSection('PrestamosDevoluciones')} style={styles.gifItem}>
              {/* ...código del tercer GIF */}
              <Image
                source={require('./Imagenes/libros.gif')} // Reemplaza con la ruta de tu archivo GIF
                style={styles.gif}
                resizeMode="contain"
              />
              <Text style={styles.gifText}>Préstamos y Devoluciones</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>

      {/* Modal para cerrar sesión */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => setModalVisible(false)}>
              <Image
                source={require('./Imagenes/importar.gif')} // Ruta del archivo GIF para el icono de cierre
                style={styles.closeGif}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>LibraryManager</Text>
            <View style={styles.gifContainerInModal}>
              <Image
                source={require('./Imagenes/usuario.gif')} // Ruta del archivo GIF
                style={styles.gif}
                resizeMode="contain"
              />
            </View>

            {/* Botones del menú */}
            <View style={styles.menuButtonContainer}>
              <View style={styles.menuButton}>
                <Button
                  title="Buscar"
                  onPress={() => {
                    // Acción al presionar el botón de buscar
                    console.log('Buscar');
                  }}
                  color="#87CEEB" // Color azul cielo
                  style={styles.menuButtonStyle}
                />
              </View>

              <View style={styles.menuButton}>
                <Button
                  title="Administración de Libros"
                  onPress={() => {
                    // Acción al presionar el botón de administración de libros
                    console.log('Administración de Libros');
                  }}
                  color="#87CEEB" // Color azul cielo
                  style={styles.menuButtonStyle}
                />
              </View>

              <View style={styles.menuButton}>
                <Button
                  title="Préstamos y Devoluciones"
                  onPress={() => {
                    // Acción al presionar el botón de préstamos y devoluciones
                    console.log('Préstamos y Devoluciones');
                  }}
                  color="#87CEEB" // Color azul cielo
                  style={styles.menuButtonStyle}
                />
              </View>
            </View>
            <Text style={styles.modalQuestion}>¿Deseas cerrar sesión?</Text>
            <Button
              title="Cerrar Sesión"
              onPress={handleLogout}
              color="#87CEEB" // Color azul cielo
              style={styles.menuButtonStyle}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  menuIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  gifContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  gif: {
    width: 200, // Ajusta el ancho según sea necesario
    height: 200, // Ajusta el alto según sea necesario
    marginBottom: 0,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'skyblue',
    fontWeight: 'bold',
  },

  // Estilos para el modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Cambia el color según tu preferencia
    fontFamily: 'Arial', // Puedes cambiar la fuente si lo deseas
    textAlign: 'center',
  },
  modalQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2ecc71', // Cambia el color según tu preferencia
    fontFamily: 'Arial', // Puedes cambiar la fuente si lo deseas
    textAlign: 'center', // Centra el texto
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  textContainer: {
    width: '200%',
    alignItems: 'center',
  },
  gifText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5, // Espacio entre la imagen y el texto
    textAlign: 'center', // Alinea el texto al centro
    width: 200, // Ancho del texto igual al ancho del GIF
    color: '#3498db', // Color del texto (puedes cambiarlo)
    fontFamily: 'Arial', // Tipo de letra (puedes cambiarlo)
  },
  menuGif: {
    width: 30,
    height: 30,
    // Puedes ajustar el ancho y alto según el tamaño del GIF del menú
  },
  closeGif: {
    width: 30,
    height: 30,
    // Puedes ajustar el ancho y alto según el tamaño del GIF para el icono de cierre
  },

  menuButton: {
    marginBottom: 5,

  },
  menuButtonStyle: {
    flex: 0, // Para que el botón ocupe todo el espacio dentro del contenedor
  },
  gifContainerInModal: {
    marginBottom: 20, // Ajusta el espacio entre la imagen GIF y los botones
  },
});

export default Inicio;
