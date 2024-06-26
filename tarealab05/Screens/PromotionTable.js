import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const PromotionTable = () => {
  const promotionData = [
    { title: 'Promoción 1', description: '¡Compre una planta y obtenga la segunda gratis!', imageUrl: 'https://example.com/promo1.jpg' },
    { title: 'Promoción 2', description: 'Descuento del 20% en todas las plantas de interior.', imageUrl: 'https://example.com/promo2.jpg' },
    { title: 'Promoción 3', description: 'Oferta especial: Plantas de exterior a mitad de precio.', imageUrl: 'https://example.com/promo3.jpg' },
    // Agrega más promociones aquí
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Promociones Especiales</Text>
      <FlatList
        data={promotionData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.promotionContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.promotionImage} />
            <Text style={styles.promotionTitle}>{item.title}</Text>
            <Text style={styles.promotionDescription}>{item.description}</Text>
            
            <TouchableOpacity
              onPress={() => {
                // Aquí puedes agregar la lógica para redirigir a los detalles de la promoción
              }}
              style={styles.learnMoreButton}
            >
              <Text style={styles.learnMoreButtonText}>Aprende Más</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  promotionContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
  },
  promotionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  promotionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  promotionDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  learnMoreButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PromotionTable;
