import { StyleSheet, Text, View,SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 


class ForecastForm extends Component {

render(){
    return (
        <View style={styles.container}>
                <FontAwesome style={styles.searchIcon} name="search" size={24} color="gray" />
                <TextInput style={styles.input} 
                        placeholder="Rechercher votre ville"
                        placeholderTextColor="#707070"
                          
                        value= {this.props.value} 
                        onChange={this.props.onChange} 
                        onSubmitEditing={this.props.onSubmitEditing}
                />
        </View>
        )
    }
}
export default ForecastForm;

const styles = StyleSheet.create({
    container:{
        flex:0.3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    input:{
        opacity:0.9,
        fontWeight:'bold',
        backgroundColor: 'white',
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        width:'69%',
        height: 80,
         shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 3,
        },
        shadowOpacity: 0.29,
         shadowRadius: 4.65,
        elevation: 7,
    },
    searchIcon:{
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        paddingTop: 29,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        height: 80,
        opacity:0.9,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 3,
        },
        shadowOpacity: 0.9,
         shadowRadius: 4.65,
        elevation: 7,
        
    }
  
})