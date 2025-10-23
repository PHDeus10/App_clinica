import{TouchableOpacity, //Usado para criar botão customizavel
 Text, Image, View, StyleSheet, Dimensions} from 'react-native';

 //Obtem a largura da tela para calcular o tamanho do botão 
 const screenWidth = Dimensions.get('window').width;

 //Define a largura base do botão (90% da tela)
 const BUTTON_WIDTH_PERCENTAGE = 0.5;
 const buttonWidth = screenWidth * BUTTON_WIDTH_PERCENTAGE;

 //Define a largura do botão em 50% de sua largura
 const buttonHeight = buttonWidth * 0.5;

 const BotaoMenu = ({icone, titulo, onPress}) => {
    return(
        <TouchableOpacity style={style.botao} onPress={onPress} activeOpacity={0.7}//Faz que fique 70%opaco quando clicado        
        > 
            {icone &&(
            <Image source={icone} style={style.icone} resizeMode='contain'/>
            )}
            <Text>{titulo}</Text>
        </TouchableOpacity>
    )
 };

const style = StyleSheet.create({
    botao :{
        width:buttonWidth,
        height:buttonHeight,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#007aff',
        padding: 10,
        marginVertical: 5,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation: 5,
    },
    icone: {
        width: '40%',
        height: '40%',
        marginBottom: 5,        
    },
    titulo:{
        color:'#ffffff',
        fontSize: 14,
        textAlign:'center',
        fontWeight:'bold',
    },
});

export default BotaoMenu;