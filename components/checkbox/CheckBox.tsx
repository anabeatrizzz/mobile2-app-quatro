import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CheckBox({
  checked,
  setChecked,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
  testID
  }){

  function handleCheckBoxOnPress(){
    setChecked(!checked)
  }

  const iconProps = checked ? activeIconProps : inactiveIconProps; 
  return (
    <Pressable
      testID={testID}
      style={[
        buttonStyle,
        checked
          ? activeButtonStyle
          : inactiveButtonStyle,
        ]}
      onPress={handleCheckBoxOnPress}>
      {checked && (
        <Ionicons
          name="checkmark"
          size={24}
          color="white"
          {...iconProps}
          />
      )}
    </Pressable>
  );
}