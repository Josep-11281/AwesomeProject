import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const AdminLibros = () => {
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [newBookGenre, setNewBookGenre] = useState('');
  const [newBookCode, setNewBookCode] = useState('');
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (newBookTitle && newBookAuthor && newBookGenre && newBookCode) {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          title: newBookTitle,
          author: newBookAuthor,
          genre: newBookGenre,
          code: newBookCode,
          status: 'Disponible', // Estado inicial
        },
      ]);
      setNewBookTitle('');
      setNewBookAuthor('');
      setNewBookGenre('');
      setNewBookCode('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Administración de Libros</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Título del libro"
          value={newBookTitle}
          onChangeText={setNewBookTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Autor"
          value={newBookAuthor}
          onChangeText={setNewBookAuthor}
          style={styles.input}
        />
        <TextInput
          placeholder="Género"
          value={newBookGenre}
          onChangeText={setNewBookGenre}
          style={styles.input}
        />
        <TextInput
          placeholder="Código"
          value={newBookCode}
          onChangeText={setNewBookCode}
          style={styles.input}
        />
        <Button title="Agregar libro" onPress={handleAddBook} />
      </View>
      
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>Autor: {item.author}</Text>
            <Text>Género: {item.genre}</Text>
            <Text>Código: {item.code}</Text>
            <Text>Estado: {item.status}</Text>
          </View>
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
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  bookItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3498db',
  },
});

export default AdminLibros;

