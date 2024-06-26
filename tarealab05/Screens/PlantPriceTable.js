import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlantPriceTable = () => {
  const plantData = [
    { name: 'Planta 1', price: '$ 10', imageUrl: 'https://media.admagazine.com/photos/644b88b2154ed7b822040126/4:3/w_3000,h_2250,c_limit/plantas-con-flores.jpg' },
    { name: 'Planta 2', price: '$ 15', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6kYyfFvpZaQgyitWmZe3nk8bS-nAFztiq0g3YV6p4RWL7ZAbMvS71yYP0YSGV60AkeQ&usqp=CAU' },
    { name: 'Planta 3', price: '$ 30', imageUrl: 'https://media.admagazine.com/photos/644b88b2154ed7b822040126/4:3/w_3000,h_2250,c_limit/plantas-con-flores.jpg' },
    { name: 'Planta 4', price: '$ 11', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6kYyfFvpZaQgyitWmZe3nk8bS-nAFztiq0g3YV6p4RWL7ZAbMvS71yYP0YSGV60AkeQ&usqp=CAU' },
    { name: 'Planta 5', price: '$ 9', imageUrl: 'https://images.squarespace-cdn.com/content/v1/59e92c802aeba584ee44451f/1577995456135-JDJHEYY9HINR3IK2FD3O/reduced_ss_dahlia_bouquet_for_sale_Karma_chocolate_lindas_baby_cress_frosted_explosion.jpg?format=500w' },
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabla de Precios de Plantas</Text>
      <FlatList
        data={plantData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <MaterialCommunityIcons name="flower-poppy" size={24} color="black" />
            <Text style={styles.plantName}> {item.name}</Text>

            <Text style={styles.price}>{item.price}</Text>
            
            <TouchableOpacity
              onPress={() => navigation.navigate("StacK")} // Aquí debes manejar la navegación según tus necesidades
              style={styles.buyButton}
            >
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.description}>
        La tabla de precios de plantas presenta una variedad exquisita de opciones para todos los amantes de la jardinería y la decoración del hogar. Cada planta es cuidadosamente seleccionada para brindar belleza y frescura a tu espacio. Desde la encantadora 'Planta 1' a un precio de $10 hasta la elegante 'Planta 5' que puedes adquirir por tan solo $9, encontrarás opciones para todos los gustos y presupuestos.

        Cada fila de la tabla muestra una imagen de la planta junto con su nombre y precio correspondiente. La información está organizada de manera clara y ordenada para facilitar tu elección. Además, hemos incluido un ícono de flor que agrega un toque de encanto a cada entrada.

        ¿Estás buscando una forma sencilla de embellecer tu hogar u oficina? Nuestra selección de plantas no solo aportará frescura y vida a tus espacios, sino que también añadirá un toque de tranquilidad y serenidad a tu entorno. Ya sea que busques una planta de interior o una adición a tu jardín, estamos seguros de que encontrarás la opción perfecta en nuestra tabla de precios.

        ¡Explora nuestra variedad de plantas y dale vida a tu espacio con la belleza de la naturaleza!
      </Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  plantName: {
    flex: 1,
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 20,
    width: '10%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buyButtonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
});

export default PlantPriceTable;
