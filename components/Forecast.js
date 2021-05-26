import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchForecast, updateInput } from "../action/forecastAction";
import ForecastTitle from './ForecastTitle';
import ForecastForm from './ForecastForm';
import ForecastResult from './ForecastResult';



class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.forecast &&
        Object.keys(this.props.forecast).length === 0 ? (
          <ForecastForm placeholder="Rechercher une ville" 
                       onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                       value={this.props.input}/>
        ) : (
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
              <ForecastForm placeholder="Rechercher une ville"
                            onChange ={(e)=>{this.props.updateInput(e.target.value)}} onSubmitEditing ={(e)=>{this.props.fetchForecast(e.target.value)}} 
                            value={this.props.input}
                            />
        </View>
        )}
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state.forecastReducer.forecast);
  return {
    forecast: state.forecastReducer.forecast,
    input: state.forecastReducer.input
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchForecast,
      updateInput,
      
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});



{/* <View style={styles.container}>
{this.props.forecast &&
Object.keys(this.props.forecast).length === 0 ? (
  <TouchableOpacity onPress={this.props.fetchForecast}>
    <Text>click me</Text>
  </TouchableOpacity>
) : (
  <Text>
    <Text style={styles.town} >
    {this.props.forecast.location.name}
    </Text>
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    <Text style={styles.date}>
    {this.props.forecast.location.localtime}
    {"\n"}
    {"\n"}
    </Text>
    <Image
      style={styles.logo}
      source={{ uri: this.props.forecast.current.weather_icons[0] }}
    />
    <Text>{this.props.forecast.current.weather_descriptions[0]}</Text>
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    <Text>{this.props.forecast.current.temperature} °C</Text>
    {"\n"}
    {"\n"}
    {"\n"}
    <Text>min {this.props.forecast.current.temperature - 5} °C</Text>
    {"\n"}
    {"\n"}
    {"\n"}
    <Text>max {this.props.forecast.current.temperature + 5} °C</Text>
    {"\n"}
    {"\n"}
    {"\n"}
    <Text>{this.props.forecast.current.wind_speed} km/h</Text>
    {"\n"}
    {"\n"}
    {"\n"}
    <Text>{this.props.forecast.current.humidity} %</Text>

  </Text>
)}
</View> */}
















{
  /* <Text>Roanne</Text>
        <TouchableOpacity onPress={() => this.props.fetchForecast()}>ta mer </TouchableOpacity>  */
}

{
  /* {!this.props.forecast=={}?
        <TouchableOpacity  onPress={() => this.props.fetchForecast()}>
                <Text style={{color: '#ff0000'}}>click me</Text>
        </TouchableOpacity> :
        <Text>{this.props.forecast.location.name}</Text>
        }  */
}

{
  /* <TouchableOpacity onPress={() => this.props.fetchForecast()}>
          <Text>click {this.props.forecast.location.name}</Text>
        </TouchableOpacity> */
}
