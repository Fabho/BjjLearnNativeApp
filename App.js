import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import BeltsScreen from './src/screens/BeltsScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import TechniquesScreen from './src/screens/TechniquesScreen';
import MediaSelectorScreen from './src/screens/MediaSelectorScreen';
import VideoScreen from "./src/screens/VideoScreen";

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>

        <Route exact path="/" component={BeltsScreen} />
        <Route path="/categories/:id" component={CategoriesScreen} />
        <Route path="/techniques/:id" component={TechniquesScreen} />
        <Route exact path="/media/:techniqueId/:name/:yUrl?" component={MediaSelectorScreen} />
        <Route path="/video/:yUrl?" component={VideoScreen} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
