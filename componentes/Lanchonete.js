import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import CardComida from './CardComida.js';
import estilos from './Estilo.js';

export default function Lanchonete(props){
  const [subtotal, setSubtotal] = useState(0);
  const [mostre, setMostre] = useState('none');
  const [listaPrecos, setListaPrecos] = useState([]);
  var cont = 0;

  function subtotalFunction(dados){
    if(!(listaPrecos.includes(dados))){
      setListaPrecos([...listaPrecos, dados])
    } else {
      var i = listaPrecos.findIndex((valorAtual, indice, lista) => {
        return valorAtual == dados
      })
      listaPrecos.splice(i)
    }
  }

  function handleFinalizar(){
    listaPrecos.forEach((item, indice) => {
      cont += item
    })
    setSubtotal(cont)
    setMostre('flex')
  }

  return(
    <>
      <StatusBar barStyle="light-content" />
      <View style={estilos.conteudo}>
      <Text style={estilos.textoTituloUm}>LANCHONETE</Text>
      <Text style={estilos.textoTituloDois}>ANA BANANA</Text>

      <CardComida
        callBack={subtotalFunction}
        imagem="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/shortcake_1f370.png"
        titulo="Bolo de banana"
        descricao="Não seja sacana, experimente agora (por R$16 e 59 centavos) o bolo da Ana Banana."
        preco={16.59}
      />

      <CardComida
        callBack={subtotalFunction}
        imagem="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/pie_1f967.png"
        titulo="Torta de banana"
        descricao="Tal torta não te esgana nem te engana, é feita de banana na lanchonete da Ana Banana!"
        preco={23.94}
      />

      <CardComida
        callBack={subtotalFunction}
        imagem="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/banana_1f34c.png"
        titulo="Banana"
        descricao="A iguaria mundana também é o ingrediente essencial da lanchonete da Ana Banana."
        preco={31.28}
      />

      <TouchableOpacity onPress={handleFinalizar} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Finalizar</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <Text
      style={
        {
          display: mostre,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold'
        }
      }
      >
      <Text style={estilos.textoSubtotal}>Subtotal:</Text>
      <Text>{' '}</Text>
      <Text style={estilos.textoValor}>R${subtotal}</Text>
      </Text>
    </View>
    </>
  )
}