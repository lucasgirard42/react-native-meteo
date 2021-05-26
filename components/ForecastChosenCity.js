import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';


class ForecastChoseCity extends Component {

render(){
    return(

    <View>
        <Text style={styles.town}> {this.props.city}</Text>
    </View>
    )


}
}
export default ForecastChoseCity

const styles = StyleSheet.create({
    town:{
        color:'white', 
        fontSize: 62,
        alignSelf:'center',
        justifyContent: "center",
        fontWeight:'bold'
        
        
    }
})