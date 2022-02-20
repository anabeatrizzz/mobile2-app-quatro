import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import FoodCard from '../../components/food-card/FoodCard';
import styles from './Menu.css'

export default function Menu() {
  const [subtotal, setSubtotal] = useState(0);
  const [showTxt, setShowTxt] = useState<"none" | "flex">('none');
  const [pricesList, setPricesList] = useState([]);
  var cont = 0;

  function calculatesSubtotal(data) {
    if (!(pricesList.includes(data))) {
      setPricesList([...pricesList, data])
    } else {
      var i = pricesList.findIndex((actualValue) => {
        return actualValue == data
      })
      pricesList.splice(i)
    }
  }

  function handleCompletedPurchase() {
    pricesList.forEach((item) => {
      cont += item
    })
    setSubtotal(cont)
    setShowTxt('flex')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.firstTitleTxt}>LANCHONETE</Text>
        <Text style={styles.secondTitleTxt}>ANA BANANA</Text>

        <FoodCard
          callBack={calculatesSubtotal}
          img="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/shortcake_1f370.png"
          title="Bolo de banana"
          description="Não seja sacana, experimente agora (por R$16 e 59 centavos) o bolo da Ana Banana."
          price={16.59}
        />

        <FoodCard
          callBack={calculatesSubtotal}
          img="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/pie_1f967.png"
          title="Torta de banana"
          description="Tal torta não te esgana nem te engana, é feita de banana na lanchonete da Ana Banana!"
          price={23.94}
        />

        <FoodCard
          callBack={calculatesSubtotal}
          img="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/banana_1f34c.png"
          title="Banana"
          description="A iguaria mundana também é o ingrediente essencial da lanchonete da Ana Banana."
          price={31.28}
        />

        <TouchableOpacity
          onPress={handleCompletedPurchase}
          style={styles.btn}
          testID="completedPurchaseBtn"
        >
          <Text style={styles.btnTxt}>Finalizar</Text>
        </TouchableOpacity>

        <Text>{'\n'}</Text>

        <Text
          style={[styles.subtotalTxtView, { display: showTxt }]}
        >
          <Text style={styles.subtotalTxt}>
            Subtotal:
          </Text>
          <Text>{' '}</Text>
          <Text style={styles.valueTxt}>
            R${subtotal}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}