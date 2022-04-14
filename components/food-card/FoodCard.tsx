import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import CheckBox from '../checkbox/CheckBox';
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
        {/* <TouchableOpacity> */}
          <CheckBox
            checked={checked}
            testID="checkbox"
            setChecked={setChecked}
            buttonStyle={styles.checkboxBase}
            activeButtonStyle={styles.checkboxChecked}
          />
        {/* </TouchableOpacity> */}
        <Text style={styles.price}>
          R${props.price}
        </Text>
      </View>
    </View>
  )
}