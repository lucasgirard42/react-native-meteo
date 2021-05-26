import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Provider, connect } from "react-redux";
import Forecast from "./components/Forecast";
// import { applyMiddleware, createStore } from "redux";
import store from "./store";
import Meteo from "./components/Meteo";
// import rootReducer from './reducers/forecastReducer'

// const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ImageBackground
            source={require('./assets/images/Background_weather.png')}
            style={styles.images}
          >
            <Forecast />
            {/* <Meteo /> */}
          </ImageBackground>
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  images: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
