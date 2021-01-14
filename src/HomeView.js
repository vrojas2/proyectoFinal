import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ArtistList from "./ArtistList";
import getMusicData from "./api-client";

export default function HomeView() {
  const [artistsData, setArtistsData] = useState(null);
  useEffect(() => {
    getMusicData().then((data) => {
      setArtistsData(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      {artistsData && <ArtistList artistsData={artistsData} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
