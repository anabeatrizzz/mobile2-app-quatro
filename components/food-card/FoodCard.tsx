import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './FoodCard.css'

interface IFoodCard {
  callBack: Function;
  img: string;
  title: string;
  description: string;
  price: number;
}

export default function FoodCard(props: IFoodCard){
  const [checked, setChecked] = useState(false);

  function handleCheckBoxOnPress(){
    setChecked(!checked)
    props.callBack(props.price)
  }

  return(
    <View style={styles.viewHandleItens}>
      <Image style={styles.imageStyle} source={{ uri: props.img }} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.descriptionView}>
          <Text>{props.description}</Text>
        </View>
      </View>
      <View>
        <CheckBox
          uncheckedColor="#cccc00"
          size={40}
          checked={checked}
          checkedColor="#ff6600"
          onPress={handleCheckBoxOnPress}
        />
        <Text>R${props.price}</Text>
      </View>
    </View>
  )
}