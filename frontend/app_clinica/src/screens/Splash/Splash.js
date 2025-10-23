import React,{ useEffect } from "react";
import { View, Text, Image, StyleSheet} from "react-native";

//Carregamento do logotipo
const Logo = require('../../../assets/logo.png');

//Inicio do componete Splash
const Splash = ({navigation}) => {

    useEffect(() => {
         setTimeout(() =>{
            navigation.replace('Menu');}, 3000)         
    },[])
    return(
        <View style = {styles.container}>
            <Image style={styles.logo} source={Logo}/>
            <Text>Carregando...</Text>
        </View>
    )    
};



const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    title:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    logo: {
        width:'70%',
        height: '70%',
        resizeMode: "contain"
    }
});

export default Splash;

