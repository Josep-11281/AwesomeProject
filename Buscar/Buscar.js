import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const books = [
      { id: 1, title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', genre: 'Fantasía', code: '00123', status: 'Disponible' },
      { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', genre: 'Realismo mágico', code: '00456', status: 'Prestado' },
      { id: 3, title: '1984', author: 'George Orwell', genre: 'Ciencia ficción', code: '00789', status: 'Disponible' },
      // Agrega más libros aquí
    ];

    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.code.includes(searchQuery)
    );

    setSearchResults(results);

    if (results.length === 0) {
      Alert.alert('Sin resultados', 'No se encontraron libros que coincidan con la búsqueda.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buscar Libros</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar libros por título, autor, género, código..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.input}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookInfo}>Autor: {item.author}</Text>
            <Text style={styles.bookInfo}>Género: {item.genre}</Text>
            <Text style={styles.bookInfo}>Código: {item.code}</Text>
            <Text style={styles.bookInfo}>Estado: {item.status}</Text>
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
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  bookInfo: {
    marginBottom: 3,
  },
});

export default SearchScreen;
