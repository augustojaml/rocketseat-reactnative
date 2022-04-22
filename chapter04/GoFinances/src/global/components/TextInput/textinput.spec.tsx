import React from 'react';
import { render } from '@testing-library/react-native';

import { TextInput } from '.';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../styles/theme/theme';

const Providers: React.FC = ({ children }) => (
  // @ts-ignore
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Component TextInput', () => {
  it('should be able to must specific border when input active', () => {
    const { getByTestId } = render(
      <TextInput testID="input-email" placeholder="E-mail" active={true} />,
      {
        wrapper: Providers,
      }
    );

    const inputEmail = getByTestId('input-email');

    expect(inputEmail.props.style[0].borderColor).toEqual('#E83F5B');
  });
});
