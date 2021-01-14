import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { Actions } from "react-native-router-flux";

export default function LoginView() {
  const [text, setText] = useState({
    nombre: "",
    correo: "",
  });
  const { nombre, correo } = text;

  const handleChangeText = (nombre, value) => {
    setText({
      ...text,
      [nombre]: value,
    });
  };

  const home = () => {
    Actions.home();
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxed}>
        <Image
          style={[styles.box, styles.image]}
          source={{
            uri:
              "https://cdn.icon-icons.com/icons2/2367/PNG/512/user_icon_143482.png",
          }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => handleChangeText("nombre", value)}
          value={nombre}
          placeholder={"Victor"}
        />
        <TextInput
          style={[styles.box, styles.input]}
          onChangeText={(value) => handleChangeText("correo", value)}
          value={correo}
          placeholder={"vrojas2@ucol.mx"}
        />
        <Button
          onPress={home}
          color="black"
          title="Login"
          accessibilityLabel="Login"
          style={[styles.box]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
      flex: 1,
      justifyContent: 'center',
      flexWrap: "wrap"
    },
    boxed: {
      alignItems: "center",
      justifyContent: "space-around",
      height: '40%',
      width: '100%'
    },
    box: {
    marginTop: 10,
      width: 200,
    },
    input: {
    textAlign: "center",
    color: "black",
      padding: 6,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 2
    },
    image: {
    borderRadius: 50,
    width: 100,
    height: 100
    }
});
