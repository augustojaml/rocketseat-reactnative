import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React, { ReactNode } from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { RegisterTransaction } from '../../screens/RegisterTransaction';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../global/styles/theme/theme';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const Provider: React.FC = ({ children }) => {
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
      </NavigationContainer>
    </>
  );
};

describe('Screen RegisterTransaction', () => {
  it('should be able open category modal on click in RegisterTransaction button', async () => {
    const { getByTestId } = render(<RegisterTransaction />, { wrapper: Provider });

    const categoryModal = getByTestId('modal-showModal');
    const categorySelectButton = getByTestId('category-select-button');
    fireEvent.press(categorySelectButton);

    await waitFor(
      () => {
        expect(categoryModal.props.visible).toBeTruthy();
      },
      { timeout: 5000 }
    );
  });
});
