import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock';
import * as AuthSession from 'expo-auth-session';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, IUser, useAuth } from '../../hooks/useAuth';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('expo-auth-session');

fetchMock.enableMocks();

const fakeUser = {
  id: 'fake_id',
  name: 'fake_name',
  email: 'fake_email',
  photo: 'fake_photo',
};

const noFakeUser = {} as IUser;

describe('Hook useAuth', () => {
  it('should be able to sign with Google existing', async () => {
    jest.spyOn(AuthSession, 'startAsync').mockImplementationOnce(async () => {
      return {
        params: {
          access_token: 'access_token',
        },
        type: 'success',
      } as any;
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    fetchMock.mockResponseOnce(JSON.stringify(fakeUser));

    await act(async () => await result.current.signInWithGoogle());

    result.current.user = fakeUser;

    expect(result.current.user.email).toBe(fakeUser.email);
  });

  it('should be able cancel google authentication if no connected', async () => {
    jest.spyOn(AuthSession, 'startAsync').mockImplementationOnce(async () => {
      return {
        params: {
          access_token: null,
        },
        type: 'cancel',
      } as any;
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(async () => await result.current.signInWithGoogle());

    result.current.user = noFakeUser;

    expect(result.current.user?.email).not.toBe(fakeUser.email);
  });
});
