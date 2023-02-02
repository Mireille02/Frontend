import React, { useEffect } from "react"
import {StyleSheet, Text, TextInput, View} from "react-native"

function PideTexto(){
    //Declara un estado
    const [valor, setValor] = useState('');
    const MostrarTexto = (nuevotexto) => {

    }
    useEffect(() => {
        console.log('Cambio el texto', texto);
    }, [texto])

    //Pedir nombre
    //Mostrar contenido
    return(
        <View>
            <Text>Ingresa texto:</Text>
            <TextInput onChangeText = {setTexto} defaultValue = "" placeholder = "Escribe texto" />
            <Button onPress = {MostrarTexto(texto)} title="Ponlo en grande"/>
            <Text style = {estilos.titulo}>{etiqueta}</Text>
        </View>
    )
}

//Darle estilos
const estilos = StyleSheet.create({
    //Estilo para el label del título
    titulo: {
        fontSize: '40',
        textAligne: 'center'
    }
})
export default PideTexto