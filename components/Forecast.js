import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView, 
  ScrollView
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {fetchForecast, updateInput } from "../action/forecastAction";
import ForecastTitle from './ForecastTitle';
import ForecastForm from './ForecastForm';
import ForecastResult from './ForecastResult';


class Forecast extends Component {

  render() {
    return (      
      <SafeAreaView  style={styles.container}>
        
        {this.props.forecast &&
        Object.keys(this.props.forecast).length === 0 ? (
          <View>
          <ForecastForm placeholder="Rechercher une ville" 
                       onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                       onChangeText= {(text) => {this.props.updateInput(text)}}
                       value={this.props.inputValue} />
          </View>
        ) : (
          <ScrollView>
          <View>
              <ForecastTitle  city={this.props.forecast.location.name}
                              date={this.props.forecast.location.localtime} 
                              />
              <ForecastResult weatherIcon={this.props.forecast.current.weather_icons[0]}
                              weatherDescriptions={this.props.forecast.current.weather_descriptions[0]}
                              temperature={this.props.forecast.current.temperature}
                              temperatureMin={this.props.forecast.current.temperature - 5}
                              temperatureMax={this.props.forecast.current.temperature + 5}
                              windSpeed={this.props.forecast.current.wind_speed}
                              humidity={this.props.forecast.current.humidity}
                              />
                  <ForecastForm 
                                onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                                onChangeText= {(text) => {this.props.updateInput(text)}}
                                value={this.props.inputValue} 
                            />  
        </View>
        </ScrollView>
        )}
        
      </SafeAreaView >
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.forecast);
  return {
    forecast: state.forecast,
    input: state.input,
    loader: state.loader,
  };
};

// const mapStateToProps = (state) => ({
//   forecast: state.forecastReducer.forecast,
//   inputValue: state.forecastReducer.inputValue,
//   loader: state.forecastReducer.loader,
// })

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchForecast,
      updateInput,
    },
    dispatch
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});



















