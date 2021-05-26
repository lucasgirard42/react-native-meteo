import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import ForecastChoseCity from './ForecastChosenCity';
import moment from 'moment';
import 'moment/locale/fr'


class ForecastTitle extends Component {

render(){
    return (
    <View>
        <ForecastChoseCity city = {this.props.city}/>
        <Text style={styles.date}>{moment(this.props.date).format('ddd Do MMM')}</Text>

    </View>

    )
}
}
export default ForecastTitle

const styles = StyleSheet.create({
    date:{
        color: '#FFFFFF',
        fontSize: 22,
        alignSelf:'center',
        justifyContent: "center",
        fontWeight:'bold'

    }
})
// {moment(this.props.date).format('ddd Do MMM')}