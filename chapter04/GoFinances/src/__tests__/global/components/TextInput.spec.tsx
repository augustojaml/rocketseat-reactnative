import { ThemeProvider } from 'styled-components/native';
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react-native';
import { theme } from '../../../global/styles/theme/theme';
import { TextInput } from '../../../global/components/TextInput';

interface IProviders {
  children: ReactNode;
}

const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme.light}>{children}</ThemeProvider>;
};

describe('Component TextInput', () => {
  it('should be able to must specific border when input active', () => {
    const { getByTestId } = render(
      <TextInput testID="input-email" placeholder="E-mail" active={true} />,
      {
        wrapper: CustomThemeProvider,
      }
    );

    const inputEmail = getByTestId('input-email');

    expect(inputEmail.props.style[0].borderColor).toEqual(theme.light.colors.attention);
    expect(inputEmail.props.style[0].borderWidth).toEqual(3);
  });
});
