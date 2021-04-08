import React from 'react'
import { View, StyleSheet} from 'react-native'

import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aletorio';
// import Padrao, { Comp1, Comp2 } from './components/Multi'
// import Primerio from './components/Primeiro'
// import MiniMax from './components/MiniMax';

export default () =>(
    <View style = {style.App}>
        <Pai/>
        {/* 
        <Contador inicial = {100} passo = {13}/>
        <Contador/>
        <Botao/>
        <Titulo principal = "Cadastro"
            segundario = "Tela de cadastro"/>
        <Aleatorio min = {1} max = {3} ></Aleatorio>
        <MiniMax min ={3} max = {20} />
        <Padrao />
        <Comp1 />
        <Comp2 />
        <Primerio /> */}
    </View>
)

const style = StyleSheet.create({
    App:{
        backgroundColor: '#FFF',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})
 