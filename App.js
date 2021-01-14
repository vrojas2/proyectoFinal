import "react-native-gesture-handler";
import React from "react";
import LoginView from "./src/LoginView";
import HomeView from "./src/HomeView";
import ViewArtist from "./src/ViewArtist";
import { Actions, Scene, Router } from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
    <Scene key="home" component={HomeView} title="Lista de artistas" />
    <Scene key="viewArtist" component={ViewArtist} title="Artista" />
  </Scene>
);

export default function App() {
  return <Router scenes={scenes} />;
}
