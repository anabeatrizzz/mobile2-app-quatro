import React from 'react';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react-native'

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
  it('first one checked when pressed', () => {
    const { getAllByTestId } = render(<Menu />)
    const checkboxes = getAllByTestId("checkbox")

    const firstCheckbox = checkboxes[0].parent.props.children[0]
    fireEvent.press(firstCheckbox)
    const isFirstCheckboxChecked = checkboxes[0].parent.props.children[0].props.checked
    expect(isFirstCheckboxChecked).toBe(true)
  })
})