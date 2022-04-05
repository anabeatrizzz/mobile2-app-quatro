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
    const { getAllByTestId } = render(<Menu />);
    const checkboxes = getAllByTestId("checkbox");

    //console.log(checkboxes.length)

    const firstCheckbox = checkboxes[0].parent.props.children[0]
    //console.log(checkboxes[0]._fiber.stateNode.props)
    console.log(checkboxes[0])

    // const firstCheckbox = checkboxes[0].parent.props.children[0]
    fireEvent.press(checkboxes[0])
    // const isFirstCheckboxChecked = firstCheckbox.props.checked
    // expect(isFirstCheckboxChecked).toBe(true)
  })
})