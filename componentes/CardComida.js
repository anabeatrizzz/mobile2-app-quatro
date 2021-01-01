import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import estilos from './Estilo.js';

function CardComida(props){
	const [checado, setChecado] = useState(false);

	function enviar(){
		setChecado(!checado)
		props.callBack(props.preco)
	}

	return(
		<View style={estilos.viewHandleItens}>
			<Image style={estilos.imageStyle} source={{uri: props.imagem}} />
			<View>
				<Text style={estilos.titulo}>{props.titulo}</Text>
				<View style={estilos.viewDescricao}>
					<Text>{props.descricao}</Text>
				</View>
			</View>
			<View>
				<CheckBox
					uncheckedColor="#cccc00"
					size={40}
					checked={checado}
					checkedColor="#ff6600"
					onPress={enviar}
				/>
				<Text>R${props.preco}</Text>
			</View>
		</View>
	)
}

export default CardComida;