import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {meteoAdd} from "../action/meteoAdd";



class Meteo extends Component {
  render() {
      
    return (
      <View style={styles.container}>
        <Text>meteo here hello it's me{this.props.meteo} </Text>
        
      </View>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      meteo: state.meteoReducer.meteo,
    };
  };

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        meteoAdd,
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Meteo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
