import React from 'react';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react-native';
import CheckBox from '../../components/checkbox/CheckBox'

describe('shows mainly components', () => {
  it('completed purchase button', () => {
    const { getByTestId } = render(<Menu />);
    const completedPurchaseBtn = getByTestId("completedPurchaseBtn");
    expect(completedPurchaseBtn).toBeTruthy()
  })

  it('food cards', () => {
    const { getAllByTestId } = render(<Menu />);
    const foodCards = getAllByTestId(/foodCard[1-3]/).length;
    expect(foodCards).toBe(3);
  })
})

describe('checkboxes behavior', () => {
  it('checked when pressed', () => {
    let checked = false;
    const { getByTestId } = render(
      <CheckBox
        checked={checked}
        setChecked={() => (checked = !checked)}
        testID="checkbox"
      />,
    );
    const checkBox = getByTestId('checkbox');
    expect(checked).toBeFalsy();
    fireEvent(checkBox, 'onClick', { nativeEvent: {} });
    expect(checked).toBeTruthy();
  })
})

describe('finish button', () => {
  it('shows subtotal price', () => {
    const { getByTestId, getAllByTestId } = render(<Menu />)
    const priceTxt = getByTestId("subtotal")
    const finishBtn = getByTestId("completedPurchaseBtn")
    const checkboxes = getAllByTestId("checkbox")

    fireEvent(checkboxes[0], 'onClick', { nativeEvent: {} })
    fireEvent(finishBtn, 'onClick', { nativeEvent: {} })

    expect(priceTxt).toBeTruthy()
  })
})