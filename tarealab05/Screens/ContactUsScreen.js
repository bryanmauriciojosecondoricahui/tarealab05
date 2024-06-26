import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contáctanos</Text>
      <Text style={styles.text}>
        Si tienes alguna pregunta, comentario o necesitas asistencia, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
      </Text>
      <Text style={styles.text}>
        Puedes comunicarte con nuestro equipo de soporte a través de la siguiente dirección de correo electrónico:
      </Text>
      <Text style={styles.email}>soporte@tuapp.com</Text>
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
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  email: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
});

export default ContactUsScreen;
