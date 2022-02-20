import React from 'react';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react-native'

describe('shows mainly components', () => {
  it('completed purchase button', () => {
    const { getByTestId } = render(<Menu />);
    const completedPurchaseBtn = getByTestId("completedPurchaseBtn");
    expect(completedPurchaseBtn).toBeTruthy()
  })
})

// describe('checkboxes behavior', () => {
//   it('', () => {

//   })
// })