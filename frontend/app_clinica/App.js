import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

//Para instalar os pacotes react-native/native e 
//o pacote react-native/stack executar os seguintes comando
// no diretorio raiz do projeto...

//npm install @react-navigation/native
//npm install @react-navigation/native-stack
//npm install @react-navigation/stack


//Importação dos componentes de tela
import Splash from "./src/screens/Splash/Splash";
import MenuScreen from "./src/screens/MenuScreen/MenuScreen";

