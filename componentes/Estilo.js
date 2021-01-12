import { StyleSheet } from 'react-native';

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

export default estilos;