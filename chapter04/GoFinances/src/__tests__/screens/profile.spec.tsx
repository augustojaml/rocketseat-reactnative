import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../../screens/Profile';

describe('Screen Profile', () => {
  it('should be able to show screen input with placeholders in component input name', () => {
    const { getByPlaceholderText } = render(<Profile />);
    const inputName = getByPlaceholderText('Nome');
    expect(inputName.props.placeholder).toBeTruthy();
  });

  it('should be able to load data user', () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId('input-name');
    const inputSurName = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Augusto');
    expect(inputSurName.props.value).toEqual('Monteiro');
  });

  it('should be able to show text title correctly', () => {
    const { getByTestId } = render(<Profile />);
    const text = getByTestId('text-title');
    expect(text.props.children).toContain('Profile');
  });
});
