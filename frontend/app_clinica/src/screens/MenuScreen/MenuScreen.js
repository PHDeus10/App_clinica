import { View, Text, Image, StyleSheet } from "react-native";
import BotaoMenu from "../../componentes/BotaoMenu";
import { Header } from "@react-navigation/stack";

//Carregamento do Logog da aplicação
const Logo = require('../../../assets/logo.png');

//Carregamento dos logotipos  
const IconeMedic = require('../../../assets/usuario-md.png');
const IconePaciente = require('../../../assets/utilizador.png');
const IconeConsulta = require('../../../assets/calendario.png')


const MenuScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Image style={styles.logo} source={Logo}/>
            <Text style={styles.Header} >Gerenciando sua Clinica</Text>
            <View style={styles.btns}>
                <Text>Escolha qual seção deseja iniciar.</Text>
                <BotaoMenu
                    icone={IconeMedic}
                    titulo="Médicos"
                    onPress={()=> navigation.navigate('Médicos')}
                />
                <BotaoMenu
                    icone={IconePaciente}
                    titulo="Pacientes"
                    onPress={()=> navigation.navigate('Pacientes')}
                />  
                <BotaoMenu
                    icone={IconeConsulta}
                    titulo="Consultas"
                    onPress={()=> navigation.navigate('Consultas')}
                />  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding:20,
        backgroundColor: '#ffffff',      
    },
    logo:{
        width:'50%',
        height:'50%',
        alignSelf: 'center',
        marginBottom: 1,
    },
    Header:{
        fontSize:12,
        textAlign:'left',
        fontWeight:'bold'
    },
    btns:{
        marginTop:60,
        flex:1
    }
})
export default MenuScreen;