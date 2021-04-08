import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'
import Estilo from './estilo'

export default () => {
    return <Text style = {estilo.txtG}>Comp #Oficial</Text>
}

export function Comp1() {
    return <Text style = {estilo.txtG}>Comp #01</Text>
}

function Comp2() {
    return <Text style = {estilo.txtG}>Comp #02</Text>
}

export {Comp2}
