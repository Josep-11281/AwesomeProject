import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, Modal, Button } from 'react-native';

const PrestamosDevoluciones = () => {
  const [prestamos, setPrestamos] = useState([
    { id: 1, usuario: 'Juan', libro: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', codigo: '001', devuelto: false },
    { id: 2, usuario: 'María', libro: 'El principito', autor: 'Antoine de Saint-Exupéry', genero: 'Literatura infantil', codigo: '002', devuelto: true },
    // Agrega más préstamos aquí si lo deseas
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newPrestamo, setNewPrestamo] = useState({
    usuario: '',
    libro: '',
    autor: '',
    genero: '',
    codigo: '',
    devuelto: false,
  });

  const handleToggleDevolucion = (id) => {
    const updatedPrestamos = prestamos.map((prestamo) =>
      prestamo.id === id ? { ...prestamo, devuelto: !prestamo.devuelto } : prestamo
    );
    setPrestamos(updatedPrestamos);
  };

  const handleEditBook = (id, key, value) => {
    const updatedPrestamos = prestamos.map((prestamo) =>
      prestamo.id === id ? { ...prestamo, [key]: value } : prestamo
    );
    setPrestamos(updatedPrestamos);
  };

  const confirmToggleDevolucion = (id) => {
    // ...
  };

  const handleAddPrestamo = () => {
    const newId = prestamos.length + 1;
    setPrestamos([...prestamos, { ...newPrestamo, id: newId }]);
    setNewPrestamo({
      usuario: '',
      libro: '',
      autor: '',
      genero: '',
      codigo: '',
      devuelto: false,
    });
    setModalVisible(false);
    alert('Prestamo agregado');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Préstamos y Devoluciones</Text>
      <Button title="Agregar préstamo" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={newPrestamo.usuario}
              onChangeText={(text) => setNewPrestamo({ ...newPrestamo, usuario: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Título del libro"
              value={newPrestamo.libro}
              onChangeText={(text) => setNewPrestamo({ ...newPrestamo, libro: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Autor"
              value={newPrestamo.autor}
              onChangeText={(text) => setNewPrestamo({ ...newPrestamo, autor: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Género"
              value={newPrestamo.genero}
              onChangeText={(text) => setNewPrestamo({ ...newPrestamo, genero: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Código"
              value={newPrestamo.codigo}
              onChangeText={(text) => setNewPrestamo({ ...newPrestamo, codigo: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Prestado/Devuelto"
              value={newPrestamo.devuelto ? 'Devuelto' : 'Prestado'}
              onChangeText={(text) => setNewPrestamo({ ...newPrestamo, devuelto: text })}
            />
            <Button title="Agregar" onPress={handleAddPrestamo} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      
      <FlatList
        data={prestamos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.prestamoItem,
              { backgroundColor: item.devuelto ? '#e0e0e0' : '#fff' }
            ]}
            onPress={() => confirmToggleDevolucion(item.id)}
          >
            <TextInput
              style={styles.input}
              value={item.usuario}
              onChangeText={(text) => handleEditBook(item.id, 'usuario', text)}
            />
            <TextInput
              style={styles.input}
              value={item.libro}
              onChangeText={(text) => handleEditBook(item.id, 'libro', text)}
            />
            <TextInput
              style={styles.input}
              value={item.autor}
              onChangeText={(text) => handleEditBook(item.id, 'autor', text)}
            />
            <TextInput
              style={styles.input}
              value={item.genero}
              onChangeText={(text) => handleEditBook(item.id, 'genero', text)}
            />
            <TextInput
              style={styles.input}
              value={item.codigo}
              onChangeText={(text) => handleEditBook(item.id, 'codigo', text)}
            />
            <Text>Estado: {item.devuelto ? 'Devuelto' : 'Prestado'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  prestamoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default PrestamosDevoluciones;

