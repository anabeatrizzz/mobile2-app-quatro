import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checadoUm: false, checadoDois: false, checadoTres: false, subtotal: 0, mostre: 'none'
    }

    this.lista = [
      {
        imagem: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/shortcake_1f370.png',
        titulo: 'Bolo de banana',
        descricao: 'Não seja sacana, experimente agora (por R$16 e 59 centavos) o bolo da Ana Banana.',
        preco: 16.59
      },
      {
        imagem: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/pie_1f967.png',
        titulo: 'Torta de banana',
        descricao: 'Tal torta não te esgana nem te engana, é feita de banana na lanchonete da Ana Banana!',
        preco: 23.94
      },
      {
        imagem: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/banana_1f34c.png',
        titulo: 'Banana',
        descricao: 'A iguaria mundana também é o ingrediente essencial da lanchonete da Ana Banana.',
        preco: 31.28
      }
    ];
  }

  handleFinalizar = () => {
    var preco1 = 0; var preco2 = 0; var preco3 = 0

    if(this.state.checadoUm){
      preco1 = this.lista[0].preco
    }

    if(this.state.checadoDois){
      preco2 = this.lista[1].preco
    }

    if(this.state.checadoTres){
      preco3 = this.lista[2].preco
    }

    this.setState({
      subtotal: preco1 + preco2 + preco3,
      mostre: 'flex'
    })
  }

  render(){
    return(
      <>
        <StatusBar barStyle="light-content" />
        <View style={estilos.conteudo}>
          <Text style={estilos.textoTituloUm}>LANCHONETE</Text>
          <Text style={estilos.textoTituloDois}>ANA BANANA</Text>
          
          <View style={estilos.viewHandleItens}>
            <Image style={estilos.imageStyle} source={{uri: this.lista[0].imagem}} />
            <View>
              <Text style={estilos.titulo}>{this.lista[0].titulo}</Text>
              <View style={estilos.viewDescricao}>
                <Text>{this.lista[0].descricao}</Text>
              </View>
            </View>
            <View>
              <CheckBox
                uncheckedColor="#cccc00"
                size={40}
                checked={this.state.checadoUm}
                checkedColor="#ff6600"
                onPress={
                  () => this.setState({ checadoUm: !this.state.checadoUm })
                }
              />
              <Text>R${this.lista[0].preco}</Text>
            </View>
          </View>
          
          <View style={estilos.viewHandleItens}>
            <Image style={estilos.imageStyle} source={{uri: this.lista[1].imagem}} />
            <View>
              <Text style={estilos.titulo}>{this.lista[1].titulo}</Text>
              <View style={estilos.viewDescricao}>
                <Text>{this.lista[1].descricao}</Text>
              </View>
            </View>
            <View>
              <CheckBox
                uncheckedColor="#cccc00"
                size={40}
                checked={this.state.checadoDois}
                checkedColor="#ff6600"
                onPress={
                  () => this.setState({ checadoDois: !this.state.checadoDois })
                }
              />
              <Text>R${this.lista[1].preco}</Text>
            </View>
          </View>
          
          <View style={estilos.viewHandleItens}>
            <Image style={estilos.imageStyle} source={{uri: this.lista[2].imagem}} />
            <View>
              <Text style={estilos.titulo}>{this.lista[2].titulo}</Text>
              <View style={estilos.viewDescricao}>
                <Text>{this.lista[2].descricao}</Text>
              </View>
            </View>
            <View>
              <CheckBox
                uncheckedColor="#cccc00"
                size={40}
                checked={this.state.checadoTres}
                checkedColor="#ff6600"
                onPress={
                  () => this.setState({ checadoTres: !this.state.checadoTres })
                }
              />
              <Text>R${this.lista[2].preco}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.handleFinalizar} style={estilos.botao}>
            <Text style={estilos.textoBotao}>Finalizar</Text>
          </TouchableOpacity>
          <Text>{'\n'}</Text>
          <Text
          style={
            {
              display: this.state.mostre,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold'
            }
          }
          >
          <Text style={estilos.textoSubtotal}>Subtotal:</Text> <Text style={estilos.textoValor}>R${this.state.subtotal}</Text>
          </Text>
        </View>
        
      </>
    )
  }
}

const estilos = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: "#ffffb3",
    padding: 10,
  },
  
  viewHandleItens: {
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    padding: 3,
    flexDirection: 'row',
    borderColor: '#e6e600',
    backgroundColor: '#ffff99'
  },

  textoTituloUm: {
    marginTop: 150,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff6600',
    textShadowColor: '#ffb380',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },
  
  textoTituloDois: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#ff6600',
    textShadowColor: '#ffb380',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },

  imageStyle: {
    width: 100,
    height: 100,
    marginRight: 10
  },

  viewDescricao: {
    width: 240
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffbf00',
    textShadowColor: '#ffcc00',
    textShadowRadius: 10,
    textShadowOffset: {
      width: 2,
      height: 2
    }
  },

  botao: {
    alignItems: "center",
    backgroundColor: "#ff6600",
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: '#fff0e6',
    fontWeight: 'bold'
  },

  textoSubtotal: {
    color: '#ff6600',
    textShadowColor: '#ffb380',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },

  textoValor: {
    color: '#ffbf00',
    textShadowColor: '#ffcc00',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  }
})

export default App;
