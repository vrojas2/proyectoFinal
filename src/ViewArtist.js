import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ViewArtist({ nameArtist, imgArtist }) {
  console.log(nameArtist, imgArtist);
  return (
    <View style={styles.artistBox}>
      <Image style={styles.image} source={{ uri: imgArtist }} />
      <View style={styles.info}>
        <Text style={styles.name}>{nameArtist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: "grey",
    color: "white",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: "#333",
  },
});
